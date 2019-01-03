var A4TV = {};
A4TV.htmlNodeList = {};// later holds a list of A4TV-relevant HTML elements

// *** UI Representation object (for UIML generation) *****************************************
A4TV.uiRepresentation = {};
A4TV.uiRepresentation.hiddenElements = {};
A4TV.uiRepresentation.currentUimlStr = "";
A4TV.uiRepresentation.hasVideoPlayer = false;
A4TV.useBlockOMatic = true;
A4TV.userType = 1; //1-Blind 2-Some degree of vision
A4TV.debug = false;

// *** A4TV HTML Markup attribute specifications *************************
A4TV.UiMarkup = {};
A4TV.UiMarkup.Attributes = {};
A4TV.UiMarkup.Attributes.Disabled = "aria-disabled";
A4TV.UiMarkup.Attributes.Label = "aria-label";
A4TV.UiMarkup.Attributes.DescribedBy = "aria-describedby";
A4TV.UiMarkup.Attributes.Role = "role";
A4TV.UiMarkup.Attributes.ApplicationAction = "A4TV-application-action";
A4TV.UiMarkup.Attributes.TabIndex = "A4TV-tabindex";
A4TV.UiMarkup.Attributes.PositionX = "A4TV-position-x";
A4TV.UiMarkup.Attributes.PositionY = "A4TV-position-y";
A4TV.UiMarkup.Attributes.Width = "A4TV-width";
A4TV.UiMarkup.Attributes.Height = "A4TV-height";
A4TV.UiMarkup.Attributes.DialogElement = "A4TV-dialog";


/*
 * This function returns an object, which contains the basic geometry information
 * about the passed node.
 * The returned object has the following properties: left, top, right, bottom, width, height.
 * All values are relative to available window width/height.
 *
 * @param el {HTMLElement} node, from which the geometry information shall be extracted
*/
A4TV.getElementGeometry = function(el) {
    var geo = {width:0, height:0, left:0, top:0, right:0, bottom:0};
        
    // if the user zoomed, IE < 8 screws up and
    // gives us physical pixels instead of logical pixels.
    // follwing 4 lines of code inspired by http://help.dottoro.com/ljvmcrrn.php#supByObj
    var b = document.getElementsByTagName('body')[0];
    var physicalW = b.getBoundingClientRect().right - b.getBoundingClientRect().left;
    var logicalW = document.body.offsetWidth;
    // the zoom level is always an integer percent value
    var zoom = Math.round ((physicalW / logicalW) * 100) / 100;

    // houston, we have ugly code!
    if (el.getBoundingClientRect) {
        try {
            var clientRect = el.getBoundingClientRect();
            geo.width = clientRect.width;
            geo.height = clientRect.height;
            geo.left = clientRect.left; geo.top = clientRect.top;
            geo.right = clientRect.right; geo.bottom = clientRect.bottom;          
            
        } catch(e) {
            // ie 6 - 8 may throw here...
        }

        for(var i in geo) {
            if (geo.hasOwnProperty(i)) {
                geo[i] *= zoom;
            }
        }

        // values of getBoundingClientRect are always relative to scrolled offset.
        var scrollTop = undefined, scrollLeft = undefined;
        if (typeof window.pageXOffset) { // standard compliant
            scrollTop = window.pageYOffset;
            scrollLeft = window.pageXOffset;
        } else if (typeof document.body.scrollLeft) { // first ie way
            scrollTop = document.body.scrollTop;
            scrollLeft = document.body.scrollLeft;
        } else if (typeof document.documentElement && typeof document.documentElement.scrollLeft) { // second ie way
            scrollTop = document.documentElement.scrollTop;
            scrollLeft = document.documentElement.scrollLeft;
        } else {
            throw 'unsupported browser';
        }
        geo.left += scrollLeft; geo.right += scrollLeft;
        geo.top += scrollTop; geo.bottom += scrollTop; 

        // in IE < 8, the values returned by getBoundingClientRect.{left,top,right,bottom} are off
        // because of the browser window border, which is included in the calculation
        if (navigator.appName.toLowerCase() === 'microsoft internet explorer' && (parseInt(navigator.appVersion, 10) < 7)) {
            var ieBorderLeft = document.documentElement.clientLeft, ieBorderTop = document.documentElement.clientTop;
            geo.left -= ieBorderLeft; geo.right -= ieBorderLeft;
            geo.top -= ieBorderTop; geo.bottom -= ieBorderTop;
        }
    } else {
        // getBoundingClientRect is not available.
        // Loop through parent elements, cumulating their offsets
        geo = {width:0, height:0, left:0, top:0, right:0, bottom:0};
        var calcEl = el;
        var bSearchContaining = false;
        do {
            
            if (bSearchContaining) {
                // we need to find the containing block for an "absolute" positioned block
                // that is, the first node in the hierachy that is not statically positioned
                // refer to the w3c css2 spec of position "absolute" for this
                 if ( (calcEl.style && calcEl.style.position && calcEl.style.position !== 'static') ||
                        (window.getComputedStyle && window.getComputedStyle(calcEl, null).getPropertyValue('position') !== 'static') ||
                        (el.currentStyle && el.currentStyle.position && el.currentStyle.position !== 'static')) {
                    geo.left += calcEl.offsetLeft;
                    geo.top += calcEl.offsetTop;
                    bSearchContaining = false;
                } else {
                    continue;
                }
            } else {
				if ((calcEl.style && calcEl.style.position && calcEl.style.position !== 'static') ||
                        (window.getComputedStyle && window.getComputedStyle(calcEl, null).getPropertyValue('position') !== 'static') ||
                        (el.currentStyle && el.currentStyle.position && el.currentStyle.position !== 'static')) {
					geo.left += calcEl.offsetLeft;
					geo.top += calcEl.offsetTop;
				}
            }

            if ( (calcEl.style && calcEl.style.position && calcEl.style.position === 'absolute') ||
                    (window.getComputedStyle && window.getComputedStyle(calcEl, null).getPropertyValue('position') === 'absolute') ||
                     (el.currentStyle && el.currentStyle.position && el.currentStyle.position === 'absolute')) {
                bSearchContaining = true;
            }

            // FF returns values which include the element's border-width
            if (/gecko/.test(navigator.userAgent.toLowerCase())) {
                   var ffBorderTop = parseInt(window.getComputedStyle(calcEl, null).getPropertyValue('borderTopWidth'), 10) || 0,
                       ffBorderLeft = parseInt(window.getComputedStyle(calcEl, null).getPropertyValue('borderLeftWidth'), 10) || 0;
                    geo.left += ffBorderLeft; geo.right += ffBorderLeft;
                    geo.top += ffBorderTop; geo.bottom += ffBorderTop;
            }
            
            if ( (calcEl.style && calcEl.style.position && calcEl.style.position === 'fixed') ||
                    (window.getComputedStyle && window.getComputedStyle(calcEl, null).getPropertyValue('position') === 'fixed') ||
                     (calcEl.currentStyle && calcEl.currentStyle.position && calcEl.currentStyle.position === 'fixed')) {
                 break;
            }
        } while ((calcEl = calcEl.parentNode) && (calcEl.nodeType != 9))
        
		if ((el.style && el.style.position && el.style.position === 'static') ||
                        (window.getComputedStyle && window.getComputedStyle(el, null).getPropertyValue('position') === 'static') ||
                        (el.currentStyle && el.currentStyle.position && el.currentStyle.position === 'static')) {
				geo.left += el.offsetLeft;
				geo.top += el.offsetTop;
		}
        geo.width = el.scrollWidth * zoom; geo.height = el.scrollHeight * zoom;
        geo.right = geo.left + geo.width;
        geo.bottom = geo.top + geo.height;
    }

    // make information relative to window dimensions
    geo.width /= window.innerWidth;
    geo.height /= window.innerHeight;
    geo.left /= window.innerWidth; geo.right /= window.innerWidth;
    geo.top /= window.innerHeight; geo.bottom /= window.innerHeight;

    return geo;
}

/*
 *	Check if an HTML element (provided as ID or node) is marked as disabled or not.
 */
A4TV.isElementDisabled = function (element) {

    if (element === undefined) throw new Error("A4TV.isElementDisabled(): Invalid function arguments.");

    if (!(typeof (element) === "object")) {

        element = document.getElementById(element);
        if (element === null) throw new Error("A4TV.isElementDisabled(): Provided element ID does not exist.");

    }

    attrDis = element.getAttribute(A4TV.UiMarkup.Attributes.Disabled);
    if (attrDis != null) {

        if (attrDis == "true") {
            return true;
        }
        else {
            return false;
        }

    }
    else {
        return false;
    }

}


/*
 *	Checks if a given HTML node object is to be considered by A4TV.
 */
A4TV.checkGuideRelevantElement = function (htmlNode) {
	    //console.log(htmlNode + " role: " + htmlNode.getAttribute('role'));
		return (((   (htmlNode.getAttribute('role') == "button") ||
							(htmlNode.getAttribute('role') == "group") ||
							(htmlNode.getAttribute('role') == "complementary") ||
							(htmlNode.getAttribute('role') == "region") ||
							(htmlNode.getAttribute('role') == "navigation") ||
							(htmlNode.getAttribute('role') == "contentinfo") ||
							(htmlNode.getAttribute('role') == "menuitem") ||
							(htmlNode.getAttribute('role') == "paragraph") ||
							(htmlNode.getAttribute('role') == "heading") ||
							(htmlNode.getAttribute('role') == "banner") ||
							(htmlNode.getAttribute('role') == "article") ||
							(htmlNode.getAttribute('role') == "menu"))) &&
						!A4TV.isElementDisabled(htmlNode) &&
						A4TV.isElementVisible(htmlNode) );
		
	
}

/*
 * Returns an array of all active elements in the HTML
 * which have role=button and are rendered visible.
 * 
 * Child nodes are not distinguished from parent nodes, only
 * attribute 'role=button' is taken into consideration.
 */
A4TV.filterGuideRelevantElements = function(activeElements){
	
	var tags = activeElements;
	var buttons = new Array();
	var j = 0;
	for (i=0;i<tags.length;i++) {

	    if (A4TV.checkGuideRelevantElement(tags[i]) === true) {
			
			//this node is an active button
			buttons[j] = tags[i];
			j++;
		}
	}
	return buttons;	
}

/*
 * Returns an array of all those div-elements which are rendered on TOP.
 * Only those elements are selected which are either:
 * 
 * 1: Do not overlap with any other element in the HTML, or
 * 2: If Overlap, have the highest z-Index value, or
 * 3: If elements have default or same z-Index value, then browser specific
 * top most stacked element will be returned [rendered last in the DOM].
 */
A4TV.getRelevantHtmlElements = function() {

	
	var tags = ["DIV", "SECTION", "VIDEO", "IMG", "A", "BUTTON", "INPUT", "HEADING", "P", "UL", "LI", "ARTICLE", "SPAN", "STRONG", "H1", "H2", "H3", "H4", "H5", "H6"];
	
	var potentialRelevantUiElements = [];
	var all = document.getElementsByTagName('*');
	for (var n=0; n<all.length; n++) {
		if(tags.indexOf(all[n].tagName) != -1)
			potentialRelevantUiElements.push(all[n]);
	}
	
	
	return potentialRelevantUiElements;
	
}

/*
 * Adds additional attributes to a A4TV UI element node, describing position and size of the element on screen. (This implementation is just temporary, until UIML generation is completely performed in JS.)
 * 
 * @param htmlNodeList: List of HTML nodes that should be extended with geometry markup.
 *
 */
A4TV.addGeometryMarkup = function( htmlNodeList ) {

	var elementGeometry;
	
	// go through all provided
	for ( i=0; i<htmlNodeList.length; i++ ){

		elementGeometry = A4TV.getElementGeometry( htmlNodeList[i] );
		
		// create attributes in DOM and initialise value
		var attrNodeGuideX = document.createAttribute(A4TV.UiMarkup.Attributes.PositionX);
		attrNodeGuideX.nodeValue = elementGeometry.left;
		var attrNodeGuideY = document.createAttribute(A4TV.UiMarkup.Attributes.PositionY);
		attrNodeGuideY.nodeValue = elementGeometry.top;
		var attrNodeGuideWidth = document.createAttribute("a4tv-width");
		attrNodeGuideWidth.nodeValue = elementGeometry.width;
		var attrNodeGuideHeight = document.createAttribute("a4tv-height");
		attrNodeGuideHeight.nodeValue = elementGeometry.height;
		
		// add attributes to source HTML node
		htmlNodeList[i].setAttributeNode( attrNodeGuideX );
		htmlNodeList[i].setAttributeNode( attrNodeGuideY );
		htmlNodeList[i].setAttributeNode( attrNodeGuideWidth );
		htmlNodeList[i].setAttributeNode( attrNodeGuideHeight );
	
	}	

}

/* returns raw HTML for current active elements */
A4TV.getGuideHtmlElements = function(){

	A4TV.htmlNodeList = A4TV.getRelevantHtmlElements();
	var size = A4TV.htmlNodeList.length;
	var html = "";
	
	//A4TV.addGeometryMarkup( A4TV.htmlNodeList );

	//process the output
	for (i=0;i<size;i++){
		html += A4TV.getHTMLString(A4TV.htmlNodeList[i]) + "";
		html = html.replace(/&quot;/g,'"');
	}
	
	return html;
}

/*
 *	Returns the full HTML string of the current node.
 */
A4TV.getHTMLString = function(el) {
	if (el.outerHTML) {
		return el.outerHTML;
	} else {
		// e.g. firefox does not know
		// outerHTML
		var tmpDiv = document.createElement('div');
		tmpDiv.appendChild(el.cloneNode(true));
		return tmpDiv.innerHTML;
	}
}


//Initialising uiml string
var uiml = "<?xml version=\"1.0\"?><!DOCTYPE uiml PUBLIC  \"-//OASIS//DTD UIML 4.0a Draft//EN\" \"http://www.oasis-open.org/committees/download.php/28455/UIML4_0.DTD\">";
uiml += "<uiml xmlns='http://docs.oasis-open.org/uiml/ns/uiml4.0'>";
uiml += "<peers><presentation base=\" HTML_4.01frameset_Harmonia_0.1 \" /></peers>";
uiml += "<interface>";
uiml += "<structure>";
uiml += "</structure>";
uiml += "<style>";
uiml += "</style>";
uiml += "</interface>";
uiml += "</uiml>";

var parser = new DOMParser();
var xmlDoc = parser.parseFromString(uiml,"text/xml");

A4TV.uiRepresentation.appendUiml = function ( tag, id, property_name, property_value, value, appendTo ) {
	
	var newElement = xmlDoc.createElement(tag);
	newElement.setAttribute("part-name",id);
	newElement.setAttribute(property_name,property_value);
	var textElement = xmlDoc.createTextNode(value);
	newElement.appendChild(textElement);
    x = xmlDoc.getElementsByTagName(appendTo)[0];
    x.appendChild(newElement);
	
}

/*
 *	This method returns a UIML string that has been generated from the DOM elements.
 */
A4TV.uiRepresentation.generateUiml = function ( elems ) {
	A4TV.uiRepresentation.hasVideoPlayer = false;
    var size = elems.length;
	
    uiml = "<?xml version=\"1.0\"?><!DOCTYPE uiml PUBLIC  \"-//OASIS//DTD UIML 4.0a Draft//EN\" \"http://www.oasis-open.org/committees/download.php/28455/UIML4_0.DTD\">";
	uiml += "<uiml xmlns='http://docs.oasis-open.org/uiml/ns/uiml4.0'>";
	uiml += "<peers><presentation base=\" HTML_4.01frameset_Harmonia_0.1 \" /></peers>";
	uiml += "<interface>";
	uiml += "<structure>";
	uiml += "</structure>";
	uiml += "<style>";
	uiml += "</style>";
	uiml += "</interface>";
	uiml += "</uiml>";
	xmlDoc = parser.parseFromString(uiml,"text/xml");
	
    //getting structure information here
    var parentId, previousParentId, parentId;
	var visibleElems = new Array();
	
	//create first structure node Application
	var newElement = xmlDoc.createElement("part");
	newElement.setAttribute("class","application");
	var appTitle = document.getElementsByTagName("title")[0].text;
	
	//only for the tests
	if(appTitle == "Universal RSS Reader")
		A4TV.useBlockOMatic = false;
	else
		A4TV.useBlockOMatic = true;
	
	newElement.setAttribute("id","a4tv_app");
    x = xmlDoc.getElementsByTagName("structure")[0];
	x.appendChild(newElement);
	A4TV.uiRepresentation.appendUiml( "property", "a4tv_app", "name", "title", appTitle, "style" );
	//get all visible elements, add an id, store them
    for (i = 0; i < size; i++) {
		var tag = elems[i].tagName;
		/*
		//check if this element has some text, if not discard it
		var text = ""
		if (elems[i].hasAttribute('alt')) text = elems[i].getAttribute('alt').replace(/['`~!ºª@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, "").replace(/-/g, " ");
		if (elems[i].innerHTML != "" && elems[i].firstChild != undefined && elems[i].firstChild.nodeName === "#text" && elems[i].firstChild.nodeValue.replace(/^\s+|\s+$/g,"") != "") text = elems[i].firstChild.nodeValue.replace(/^\s+|\s+$/g,"").replace(/['`~!ºª@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, "").replace(/-/g, " ");
		//specific application extraction for video-player
		if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-back') > -1) text = "Back";
		if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-pause') > -1) text = "Pause";
		if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-show-info') > -1) text = "Show information";
		if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-prev') > -1) text = "Previous video";
		if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-next') > -1) text = "Next Video";*/
	
        //if (A4TV.isElementVisible(elems[i])){
		
			if(!elems[i].hasAttribute('id')){
				elems[i].setAttribute("id", "a4tv_"+tag+"_"+i);
			}
				
            var id = elems[i].id;
						
			parentId = elems[i].parentElement.id;
			
			//create new element
			var newElement = xmlDoc.createElement("part");
			newElement.setAttribute("class",tag);
			newElement.setAttribute("id",id);
			
			//search if parent is already in, else goes under the node application
			var index = visibleElems.indexOf(parentId);
			
			if(index >= 0){
				//alert( id + " found parent " + visibleElems[index]);
				var y = xmlDoc.getElementById(visibleElems[index]);
				
			}else{
				//alert( id + " didnt find parent ");
				var y = xmlDoc.getElementById("a4tv_app");
				
			}
			
			y.appendChild(newElement);
			visibleElems.push(id);
        //}
		
    //}
	
    //getting style information here
    //for (i = 0; i < size; i++) {
       // if (elems[i].hasAttribute('id') /*&& A4TV.isElementVisible(elems[i])*/) {
		
            var id = elems[i].id;
			
			var visible  = false;
			if(A4TV.isElementVisible(elems[i])){
				visible = true;
			}
			A4TV.uiRepresentation.appendUiml( "property", id, "name", "visible", visible, "style" );
			
			if (elems[i].hasAttribute('autofocus')) A4TV.uiRepresentation.appendUiml( "property", id, "name", "autofocus", elems[i].getAttribute('autofocus'), "style" );
            if (elems[i].hasAttribute('aria-checked')) A4TV.uiRepresentation.appendUiml( "property", id, "name", "checked", elems[i].getAttribute('aria-checked'), "style" );
            if (elems[i].hasAttribute('aria-labelledby')) A4TV.uiRepresentation.appendUiml( "property", id, "name", "labelId", elems[i].getAttribute('aria-labelledby'), "style" );
			if (elems[i].hasAttribute('aria-describedby'))
			{ 
				var idDesc = elems[i].getAttribute('aria-describedby');
				var elementDesc = document.getElementById(idDesc);
				if(elementDesc != null && elementDesc.innerHTML != "" && elementDesc.firstChild != undefined && elementDesc.firstChild.nodeName === "#text" && elementDesc.firstChild.nodeValue.replace(/^\s+|\s+$/g,"") != "")
				{
					A4TV.uiRepresentation.appendUiml( "property", id, "name", "description", elementDesc.firstChild.nodeValue.replace(/^\s+|\s+$/g,""), "style" );
				}
			}
            if (elems[i].hasAttribute(A4TV.UiMarkup.Attributes.Label) && elems[i].getAttribute(A4TV.UiMarkup.Attributes.Label) != "" && elems[i].getAttribute(A4TV.UiMarkup.Attributes.Label) != undefined && elems[i].getAttribute(A4TV.UiMarkup.Attributes.Label) != "null" ) A4TV.uiRepresentation.appendUiml( "property", id, "name", "label", elems[i].getAttribute(A4TV.UiMarkup.Attributes.Label).replace(/[/\n'`~!ºª@#$%^&*()_|+=?;:'"<>\{\}\[\]\\\/]/gi, "").replace(/-/g, " "), "style" );
            
			
			//corrigir isto!!
			
			
			//old way that works
			//if (elems[i].innerHTML != "" && elems[i].firstChild != undefined && elems[i].firstChild.nodeName === "#text" && elems[i].firstChild.nodeValue.replace(/^\s+|\s+$/g,"") != "") A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", elems[i].firstChild.nodeValue.replace(/^\s+|\s+$/g,"").replace(/[/\n'`~!ºª@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, " ").replace(/-/g, " "), "style" );
			
			/* //versao jquery
			var text = $("#demo").contents().filter(function() {
				return this.nodeType == Node.TEXT_NODE;
			}).text();*/
				
						
			
			
			
			if (elems[i].innerHTML != "" && elems[i].firstChild != undefined && elems[i].firstChild.nodeName === "#text" && elems[i].firstChild.nodeValue.replace(/^\s+|\s+$/g,"") != ""){

				A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", elems[i].firstChild.nodeValue.replace(/^\s+|\s+$/g,"").replace(/[/\n'`~!ºª@#$%^&*()–_|+=?;:'"<>\{\}\[\]\\\/]/gi, " ").replace(/-/g, " "), "style" );
				
			}else if (elems[i].hasAttribute('alt')){
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", elems[i].getAttribute('alt').replace(/['`~!ºª@#$%^&*()–_|+=?;:'"<>\{\}\[\]\\\/]/gi, "").replace(/-/g, " "), "style" );
			}else{
				/*
				var oDiv = elems[i];
				var firstText = "";
				for (var u = 0; u < oDiv.childNodes.length; u++) {
					var curNode = oDiv.childNodes[u];
					whitespace = /^\s*$/;
					if (curNode.nodeName === "#text" && !(whitespace.test(curNode.nodeValue))) {
						firstText = curNode.nodeValue;
						break;
					}
				}
				
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", firstText.replace(/[/\n'`~!ºª@#$%^&*()_|+=?;:'"<>\{\}\[\]\\\/]/gi, " ").replace(/-/g, " "), "style" );*/
			}
					
					
			
			
            if (elems[i].hasAttribute('type')){
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "type", elems[i].getAttribute('type'), "style" );
				if(elems[i].getAttribute('type').includes("video")){
					A4TV.uiRepresentation.hasVideoPlayer = true;
				}
			}
			if (!elems[i].hasAttribute('type')){
				var tag = elems[i].tagName;
				
				switch (tag)
				{
				   case "DIV": tag = "Section"
				   break;
				   
				   case "IMG": tag = "Image"
				   break;
				   
				   case "P": tag = "Paragraph"
				   break;
				   
				   case "A": tag = "Hyperlink"
				   break;
				   
				   case "OL": tag = "Ordered List"
				   break;
				   
				   case "UL": tag = "Unordered List"
				   break;
				   
				   case "LI": tag = "List Item"
				   break;
				}
				
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "type", tag, "style" );
			}
			
			if (elems[i].hasAttribute('label')){ 
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "label", elems[i].getAttribute('label'), "style" );
			}else if (elems[i].hasAttribute('data-tooltip')){
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "label", elems[i].getAttribute('data-tooltip'), "style" );
			}else if (elems[i].hasAttribute('aria-label')){
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "label", elems[i].getAttribute('aria-label'), "style" );
			} 
            
			//specific application extraction
			if (elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('focused') > -1){
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "focused", true, "style" );
			}else if (elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('active') > -1){
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "focused", true, "style" );
			}else if (elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('selected') > -1) {
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "focused", true, "style" );
			}
			
			
			if (elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('slideshowBtn') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Apresentação", "style" );
			if (elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('updateBtn') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Atualizar", "style" );
			if (elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('aboutBtn') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Sobre", "style" );
			if (elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('exitBtn') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Sair", "style" );
			if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-back') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Voltar", "style" );
			if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-pause') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Pausa", "style" );
			if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-show-info') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Informações", "style" );
			if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-prev') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Video Anterior", "style" );
			if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('button-next') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Video Seguinte", "style" );
			if (elems[i].hasAttribute('id') && elems[i].getAttribute('id').search('progress-indicator') > -1) A4TV.uiRepresentation.appendUiml( "property", id, "name", "text", "Barra de Progresso", "style" );
			
			
		  //var fontSize = document.defaultView.getComputedStyle(elems[i],null).getPropertyValue('font-size');
		  //var color = document.defaultView.getComputedStyle(elems[i],null).getPropertyValue('color');
		  //var backgroundColor = document.defaultView.getComputedStyle(elems[i],null).getPropertyValue('background-color');
		  //if (fontSize != "") uiml += (" <property part-name=\"" + id + "\" name=\"font-size\" >" + fontSize.substring(0, fontSize.length-2) + "</property>");
          //if (color != "") uiml += (" <property part-name=\"" + id + "\" name=\"color\" >" + color + "</property>");
          //if (backgroundColor != "") uiml += (" <property part-name=\"" + id + "\" name=\"background-color\" >" + backgroundColor + "</property>");
			
			var x = xmlDoc.getElementsByTagName("part");
			for (xi = 0; xi <x.length; xi++) {
			  if(x[xi].getAttribute("id") == elems[i].id){
				var depth = A4TV.getDepth(x[xi]) - 6;
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "depth", depth, "style" );
				break;
			  }
			}
			
        //}
    //}
		if(A4TV.useBlockOMatic == false){
				
			if(id == "a4tv_LI_12" || id == "a4tv_LI_14" || id == "a4tv_LI_16" || id == "a4tv_LI_18"){
				 A4TV.uiRepresentation.appendUiml( "property", id, "name", "block", "L2", "style" );
				 A4TV.uiRepresentation.appendUiml( "property", id, "name", "orientation", "horizontal", "style" );
			}else if(( id.search('a4tv_ARTICLE_') > -1 && elems[i].hasAttribute('class') && elems[i].getAttribute('class').search('item') > -1)){
				 A4TV.uiRepresentation.appendUiml( "property", id, "name", "block", "L1", "style" );
				 A4TV.uiRepresentation.appendUiml( "property", id, "name", "orientation", "vertical", "style" );
			}else if(id == "active_item"){
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "block", "L3", "style" );
				A4TV.uiRepresentation.appendUiml( "property", id, "name", "orientation", "horizontal", "style" );
			}else{
				//A4TV.uiRepresentation.appendUiml( "property", id, "name", "block", "L4", "style" );
				//A4TV.uiRepresentation.appendUiml( "property", id, "name", "orientation", "horizontal", "style" );
			}
				
			
		}
	}
	
	
	
    return xmlDoc;

}

A4TV.uiRepresentation.getHash = function(dom) {
  var hash = 0, i, chr;
  if (dom.length === 0) return hash;
  for (i = 0; i < dom.length; i++) {
    chr   = dom.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

A4TV.uiRepresentation.getFocusedElement = function(elems){
	
	var size = elems.length;
	var dirText = '';
	
	for (i = 0; i < size; i++) {
			
			if (elems[i].hasAttribute('class') && (elems[i].getAttribute('class').search(' focused')  > -1 || elems[i].getAttribute('class').search(' active') > -1 || elems[i].getAttribute('class').search(' selected') > -1)){
				
				dirText += elems[i].textContent.replace(/^\s+|\s+$/g,"").replace(/[/\n'`~!ºª@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi, " ").replace(/-/g, " ") + " ";
								
			}
			
		
	}
	
	return dirText;
}


A4TV.getDepth = function(elem){
	
	var a = elem;
	var els = [];
	while (a) {
		els.unshift(a);
		a = a.parentNode;
	}
	//alert(els.toString());
	return els.length;
}

// Helper function to get an element's exact position - geometry is not working
A4TV.getPosition = function(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

A4TV.uiRepresentation.storedUIMLs = new Array();
A4TV.blocks = new Array();
A4TV.allBlocks = new Array();

function compressArray(original) {
 
	var compressed = [];
	// make a copy of the input array
	var copy = original.slice(0);
 
	// first loop goes over every element
	for (var i = 0; i < original.length; i++) {
 
		var myCount = 0;	
		// loop over every element in the copy and see if it's the same
		for (var w = 0; w < copy.length; w++) {
			if (original[i] == copy[w]) {
				// increase amount of times duplicate is found
				myCount++;
				// sets item to undefined
				delete copy[w];
			}
		}
 
		if (myCount > 0) {
			var a = new Object();
			a.value = original[i];
			a.count = myCount;
			compressed.push(a);
		}
	}
	
	return compressed;
};


A4TV.associateElemsWithBlocksInUIML = function(elems){
	var size = elems.length;
	var associatedElements = new Array();
	//sendlog("has video player: " + A4TV.uiRepresentation.hasVideoPlayer);
	for (i = 0; i < size; i++) {
        if (elems[i].hasAttribute('id') /*&& A4TV.isElementVisible(elems[i])*/ && associatedElements.indexOf(elems[i].id) == -1) {
			var id = elems[i].id;
			
			var siblings = elems[i].parentElement.childNodes;
			var siblingsBlock = new Array();
			
			for (c = 0; c < siblings.length; c++) {
				if (siblings[c].id != undefined && siblings[c].id != ""){
					var block = A4TV.getBlockId(siblings[c]);
					if (block != null && block.id != null){
						//sendlog("Adding block :" + block.id);
						siblingsBlock.push(block);
						
					}else{
						associatedElements.push(siblings[c].id);
						//if(A4TV.debug)
							//sendlog("elem with id: " + id + " does not fit in a block.");
					}
				}
				
			}
			
			var result = compressArray(siblingsBlock);
			var mostOccurences = 0;
			var candidateBlock = null;
			
			for (b = 0; b < result.length; b++) {
								
				if(result[b].count > mostOccurences){
					mostOccurences = result[b].count;
					candidateBlock = result[b].value;
				}
			}
			
			if(candidateBlock != null){
				var count = 0;
				for (f = 0; f < siblings.length; f++) {
					if (siblings[f].id != undefined && siblings[f].id != "" && associatedElements.indexOf(siblings[f].id) == -1){
					
						//if(A4TV.debug)
							//sendlog("elem with id: " + siblings[f].id + " belongs to block: " + candidateBlock.id);
						associatedElements.push(siblings[f].id);
						A4TV.uiRepresentation.appendUiml( "property", siblings[f].id, "name", "block", candidateBlock.id, "style" );
						A4TV.uiRepresentation.appendUiml( "property", siblings[f].id, "name", "orientation", candidateBlock.orientation, "style" );
					}
					
					count++;
				}
				
				
				
				var block_type = "-"; // types: menu, content, title

				if(candidateBlock.width >= 2*candidateBlock.height || candidateBlock.height >= 2*candidateBlock.width){
					//most likely a menu
					
					if(A4TV.uiRepresentation.hasVideoPlayer) //video control type
						block_type = "control ";
					else
						block_type = "navigation "; //navigation type
					if(count >= 2){ //probably a menu
						block_type += "menu";
					}else if(count == 1){
						block_type += "single item menu";
					}

				}else if(count == 1){
					//most likely content
					if(ttsQueue.toString().length() > 80)
						block_type = "content text";
					else
						block_type = "content title";

				}else{
					block_type = "unknown";
				}
				
				for (h = 0; h < A4TV.blocks.length; h++) {
					
					if(candidateBlock.id == A4TV.blocks[h].id && candidateBlock.width == A4TV.blocks[h].width && candidateBlock.height == A4TV.blocks[h].height){
						if(A4TV.blocks[h].type == ""){
							A4TV.blocks[h].type = block_type;
							//sendlog("Updating block " + A4TV.blocks[h].id + " with style: " + A4TV.blocks[h].type);
						}							
						break;
					}
					
				}
				
				
			}
			
			
		
			
		}
	}
	
}

A4TV.setBlocksInUIML = function(){
	for(var i = 0; i < A4TV.blocks.length; i++){
		
		var found = false;
		for (h = 0; h < A4TV.allBlocks.length; h++){
			if(A4TV.blocks[i].id == A4TV.allBlocks[h].id && A4TV.blocks[i].width == A4TV.allBlocks[h].width && A4TV.blocks[i].height == A4TV.allBlocks[h].height){
				//sendlog("Found existent block id: " + A4TV.allBlocks[i].id + " with style: " + A4TV.allBlocks[i].type);
				found = true;
				A4TV.uiRepresentation.appendUiml( "property", A4TV.allBlocks[h].id, "name", "position", A4TV.allBlocks[h].posX + ";" + A4TV.allBlocks[h].posY, "style" );
				A4TV.uiRepresentation.appendUiml( "property", A4TV.allBlocks[h].id, "name", "dimensions", A4TV.allBlocks[h].width + ";" + A4TV.allBlocks[h].height, "style" );
				A4TV.uiRepresentation.appendUiml( "property", A4TV.allBlocks[h].id, "name", "orientation", A4TV.allBlocks[h].orientation, "style" );
				A4TV.uiRepresentation.appendUiml( "property", A4TV.allBlocks[h].id, "name", "type", A4TV.allBlocks[h].type, "style" );
				break;
			}
		}
		if(!found){
			//sendlog("Not Found adding block id: " + A4TV.blocks[i].id + " with style: " + A4TV.blocks[i].type);
			A4TV.uiRepresentation.appendUiml( "property", A4TV.blocks[i].id, "name", "position", A4TV.blocks[i].posX + ";" + A4TV.blocks[i].posY, "style" );
			A4TV.uiRepresentation.appendUiml( "property", A4TV.blocks[i].id, "name", "dimensions", A4TV.blocks[i].width + ";" + A4TV.blocks[i].height, "style" );
			A4TV.uiRepresentation.appendUiml( "property", A4TV.blocks[i].id, "name", "orientation", A4TV.blocks[i].orientation, "style" );
			A4TV.uiRepresentation.appendUiml( "property", A4TV.blocks[i].id, "name", "type", A4TV.blocks[i].type, "style" );
			A4TV.allBlocks.push(A4TV.blocks[i]);
		}
		
		
		
	}
	
	A4TV.blocks = new Array();
}


A4TV.getAllBlocks = function(){
	var blockSpans = document.getElementsByClassName("block");
	var block = null;
	var minArea = 400*400;
	var maxArea = 1280*720;
	for(var i = 0; i < blockSpans.length; i++){
		var bPosition = A4TV.getPosition(blockSpans[i]);
		var bWidth = blockSpans[i].clientWidth;
		var bHeight = blockSpans[i].clientHeight;
		var bArea = bWidth * bHeight;
		var bOrientation;
		if(bWidth > bHeight)
			bOrientation = "horizontal";
		else
			bOrientation = "vertical";
		if(/*bArea > minArea &&*/ bArea < maxArea){
			block = { id: "L"+i, orientation: bOrientation, posX: bPosition.x, posY: bPosition.y, width: bWidth, height: bHeight, type: ""};
			A4TV.blocks.push(block);
			//if(A4TV.debug)
				//sendlog(" block id: " + "L"+i + " block left: " + bPosition.x + " block top: " + bPosition.y + " block width: " + bWidth + " block height: " + bHeight );
			
		}
	}
	
	//clean blocks created by BLOCK-O-MATIC
	A4TV.clearBlocks();
	
}

A4TV.getBlockId = function(elem){
	
	var deviationCorrection = 20; //for block sizes
	var elPosition = A4TV.getPosition(elem);//check position
	var elWidth = elem.clientWidth;
	var elHeight = elem.clientHeight;
	
	var candArea = 0;
	var candidateIndex = -1;
	/*
	if(A4TV.debug)
		sendlog("elem id: " + elem.id + " left: " + elPosition.x + " top: " + elPosition.y + " width: " + elWidth + " height: " + elHeight);
	*/
	
	for(var i = 0; i < A4TV.blocks.length; i++){
		var bPosition = {x: A4TV.blocks[i].posX - deviationCorrection, y: A4TV.blocks[i].posY- deviationCorrection};
		var bWidth = A4TV.blocks[i].width + deviationCorrection*2;
		var bHeight = A4TV.blocks[i].height +deviationCorrection*2;
		var bArea = bWidth * bHeight;
		
		if( elPosition.x >= bPosition.x && elPosition.y >= bPosition.y && elPosition.x <= (bPosition.x + bWidth) 
			&& elPosition.y <= (bPosition.y + bHeight) && (elPosition.x + elWidth) <= (bPosition.x + bWidth) 
			&& (elPosition.y + elHeight) <= (bPosition.y + bHeight)){	
			
					candidateIndex = i;
	
		}
	}
	
	if(candidateIndex == -1)
		return null;
	
	return A4TV.blocks[candidateIndex];;
	
}

A4TV.clearBlocks = function(){
	
	var elems = document.getElementsByTagName('*');
	var size = elems.length;	
	//sendlog("elems size: " + size);
	for(var i = 0; i < size; i++){
		//sendlog("elems i: " + i + " elem: " + elems[i]);
		if(elems[i] != undefined && elems[i].hasAttribute('class') && (elems[i].getAttribute('class').search('bomauxtext') > -1 
		|| elems[i].getAttribute('class').search('bomwrapper') > -1 
		|| elems[i].getAttribute('class').search('block') > -1)){
			//sendlog("elems i: " + i + " elem: " + elems[i].getAttribute('class'));
			if(elems[i].getAttribute('class').search('bomwrapper') > -1 ){
				
				
				// Replace the whole wrapper with its own contents
				elems[i].outerHTML = elems[i].innerHTML;
				
			}else{
				var parent = elems[i].parentElement;
				parent.removeChild(elems[i]);
			}
			
			i--;
		
		}
		if(elems[i] != undefined && elems[i].hasAttribute('bomtype'))
			elems[i].removeAttribute('bomtype');
	}
	
	/*var blocks = contentWindow.document.getElementsByClassName("bomauxtext");
	for(var i = 0; i < blocks.length; i++){
		
		var parent = blocks[i].parentElement;
		parent.removeChild(blocks[i]);
	}
	
	var blocks = contentWindow.document.getElementsByClassName("block");
	var size = blocks.length;
	for(var j = 0; j < blocks.length;){
		//alert(" J= " + j + " Removing " + blocks[j].id + " size " + blocks.length);
		var parent = blocks[j].parentElement;
		parent.removeChild(blocks[j]);
		
	}*/
	
	
}

/*
 * This function checks whether an element is visible for A4TV.
 */
A4TV.isElementVisible = function(el) {
    var isVisible = true;

    if (el.nodeType === 9) {    // nodeType 9 is the HTMLDocument. This is always visible.
        return true;
    }
    if (el === undefined || el === null || !el.nodeType || el.nodeType !== 1) {
        throw new Error('A4TV.isElementVisible called but a ' + typeof el + ' passed!');
    }
    // 1. check direct presence of 'display', 'visibility', 'opacity', 'clientHeight' and 'clientWidth' attributes
    if (el.style && el.style.display && el.style.display === 'none' ) {
        isVisible = false;
    } else {
        if(el.style && el.style.visibility && el.style.visibility === 'hidden') {
            isVisible = false;
        } else if(el.style && el.style.opacity && el.style.opacity === '0') {
            isVisible = false;
        } else if(el.clientHeight && el.clientHeight <= 0 && el.clientWidth <= 0) { 
			isVisible = false;
		} else {
	// 2. check the computed style of 'display' and 'visibility'
            var computedDisplay = undefined, computedVisibility = undefined, computedOpacity = undefined;
            if (window.getComputedStyle) { // standard compliant way
                computedDisplay = window.getComputedStyle(el, null).getPropertyValue('display');
                computedVisibility = window.getComputedStyle(el, null).getPropertyValue('visibility');
				computedOpacity = window.getComputedStyle(el, null).getPropertyValue('opacity');
            } else if(el.currentStyle) {   // ie way (opera can do this, too)
                computedDisplay = el.currentStyle.display;
                computedVisibility = el.currentStyle.visibility;
				computedOpacity = el.currentStyle.opacity;
            } else {
                throw 'unsupported browser!';
            }
            if ( computedDisplay === 'none' || computedVisibility === 'hidden' || computedOpacity === '0') {
                isVisible = false;
            } else {
			
				//var elGeo = A4TV.getElementGeometry(el);//check geometry
				var elGeo = A4TV.getPosition(el);//check postion
				var body = document.body,
				html = document.documentElement,
				mainDiv = document.getElementById('main');

				//get the tiniest "display window" - not working very well instead we will use the 'main' div
				try{
					var height =  mainDiv.clientHeight;
					var width = mainDiv.clientWidth;
				}catch(e){
					var height = html.clientHeight;
					var width =  html.clientWidth;
				}
				
				//alert("elem left: " + elGeo.x " elem top: " + elGeo.y);
				//alert("Main div h: " + mainDiv.clientHeight + " w: " + mainDiv.clientWidth /*+ " elem left: " + elGeo.left " elem top: " + elGeo.top*/);
				
				if( (elGeo.x < 0 && elGeo.x + el.clientWidth < 0) || elGeo.x > width || (elGeo.y < 0 && elGeo.y + el.clientHeight < 0) || elGeo.y > height ){
					isVisible = false;
				}else{
	// 3. check visibility of parent element
					if (el.parentNode) {
						isVisible = A4TV.isElementVisible(el.parentNode);
					} else {
						// we went up the chain to the document node without finding any display or visibility
						// css declaration. therefore it's safe to assume the element is visible.
						// notice: the element could still be positioned offscreen, clipped or overlayed!
					}
				}
            }
        }
    }
    return isVisible;
}

A4TV.changeVolume = function(volume){
	var elems = document.getElementsByTagName('video');
	var size = elems.length;	
	sendlog("videos: " + size);
	try{
		for(var i = 0; i < size; i++){
			elems[i].volume = volume;
		}
	}catch(e){
		sendlog("Error setting volume:" + e);
	}
}

A4TV.changeFont = function(element){
	try{
		var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
		var fontSize = parseFloat(style); 
		
		var titleTags = ["H1", "H2", "H3", "H4", "H5", "H6"];
		
		
		// now you have a proper float for the font size (yes, it can be a float, not just an integer)
		if(fontSize < 24 && titleTags.indexOf(element.tagName) != -1){
			element.style.fontSize = 24 + 'px';
		}else if(fontSize < 14 && titleTags.indexOf(element.tagName) == -1){
			while(fontSize < 14){
				fontSize+=4;
			}
			element.style.fontSize = fontSize + 'px';
		}
		
		element.style.backgroundColor = "black";
		element.style.color = "white";
	
		//element.setAttribute("style",element.getAttribute("style")+";font-family: Courier New");
		for(var i=0; i < element.children.length; i++){
				A4TV.changeFont(element.children[i]);
		}
	
	}catch(e){
		
	}
}




A4TV.adaptApplication = function(){
	
	A4TV.changeFont(document.getElementsByTagName("body")[0]);
	
}

function getLinks() {
  var links = document.querySelectorAll("a");
  var results = [];
  var seenLinks = {};
  for (var i  = 0; i < links.length; ++i) {
    var text = links[i].textContent;
    if (text.length > 100)
      text = text.substring(0, 100) + "...";
    var link = links[i].href.replace(/(.*)#?/, "$1");
    if (seenLinks[link])
      continue;
    seenLinks[link] = 1;
    results.push({ href: link, text: text });
  }
    
  return results;
};


function getDOM() {
  var dom = document.body.innerHTML;
  
  return dom;
};

var tout;
function sendUIML(){
	/*if(tout != null)
		clearTimeout(tout);*/
	
	A4TV.getGuideHtmlElements();
	
	var currentHash = A4TV.uiRepresentation.getHash(document.getElementsByTagName("html")[0].innerHTML);
	//sendlog(document.getElementsByTagName("html")[0].innerHTML);
	//sendlog("Hash: " + currentHash);
	var alreadyExists = false;
	for (var i = 0; i < A4TV.uiRepresentation.storedUIMLs.length; i++){
		//sendlog("stored hash: " + A4TV.uiRepresentation.storedUIMLs[i].hash);
		if(A4TV.uiRepresentation.storedUIMLs[i].hash === currentHash){
			A4TV.uiRepresentation.currentUimlStr = A4TV.uiRepresentation.storedUIMLs[i].uiml;
			sendMessage(A4TV.uiRepresentation.currentUimlStr);
			alreadyExists = true;
			//sendlog("Found the hash");
			break;
		}
		
	}
	
	//if user has some degree of vision, adapt the interface
	if(A4TV.userType == "2"){
		A4TV.adaptApplication();
	}
	
	if(!alreadyExists){
		//sendlog("Did not found the hash");
		A4TV.uiRepresentation.generateUiml( A4TV.htmlNodeList );
		
		if(A4TV.useBlockOMatic == true){
			//segment the web page
			segmentPage();
		}
		
		//tout = setTimeout(function () {
			
			var serializer = new XMLSerializer();
			// the serializeToString method raises an exception in IE9
			try {
				
				var str = serializer.serializeToString (xmlDoc.documentElement);
				A4TV.uiRepresentation.currentUimlStr = str;
				
				A4TV.uiRepresentation.storedUIMLs.push({hash: currentHash , uiml: str})
				sendMessage(str);
			}
			catch (e) {
				alert (e);
			}
			
		//}, 800);
	}

}

function init(){
	connect();
	//sendUIML();
}

var uimlStr = "";

document.onreadystatechange = function(e)
{
    if (document.readyState === 'complete')
    {
        try{
		
			var head = document.getElementsByTagName('body')[0];
			var script = document.createElement('script');
			script.type= 'text/javascript';
			script.src= 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
			head.appendChild(script);
						
		}catch(e){
			alert(e);
		}
    }
};

window.onload = function() {
	
	//alert(getDOM());
	setTimeout(init, 1000);
 
};

/*
function clickHandler(e){
 var elem, evt = e ? e:event;
 if (evt.srcElement)  elem = evt.srcElement;
 else if (evt.target) elem = evt.target;
 
 console.log('You clicked with key ' + e.keyCode +' target ' + evt.target + " content: " + JSON.stringify(e, null, 4));
 
 return true;
}*/

//document.onkeydown=clickHandler;

function sendlog(msg){
		console.log(msg);
		ipcRenderer.send('debug', msg);
}
var timeout;

function executeKeyCode(response){
		console.log("keycode " + response.keycode);
		if(timeout != null)
			clearTimeout(timeout);
		
		ipcRenderer.send('sendInputKey', {target:0, key:response.keycode});
		if(response.keycode != "20") //Space keycode is used to double commands in video players
			timeout = setTimeout(sendUIML, 800);
		
}

function executeVolumeChange(value){
	A4TV.changeVolume(value);
}

function segmentPage(){
	try{
		 A4TV.getGuideHtmlElements();
		 var done = startSegmentation(window, 0.6, 100, "record", window.location.href); //--> good for dailymotion template
		 //sendlog(xml);
		 //startSegmentation(window, 0.8, 20, "record", window.location.href);
		 A4TV.getAllBlocks();
		 A4TV.associateElemsWithBlocksInUIML(A4TV.htmlNodeList);
		 A4TV.setBlocksInUIML();
		 return done;
		}catch(e){
			alert(e);
			return false;
		}
}

var ws;
const ipcRenderer = require('electron').ipcRenderer;


function connect(){
	if ("WebSocket" in window)
				{
				   //alert("WebSocket is supported by your Browser!");
				   
				   // Let us open a web socket
				   //var ws = new WebSocket("ws://127.0.0.1:5000/");
				   try{
				   
					  ws = new WebSocket("ws://localhost:8080/jsrA4TV");
					  //ws = new WebSocket("ws://localhost:4445/");
				   
				   }catch(e){
					   alert(e);
				   }
				   
				   ws.onopen = function()
				   {
					  // Web Socket is connected, send data using send()
					  console.log("Handshake was successful");
					  
					  /*var url = window.location.href;
					  window.open(url, "_blank");
					  window.open(url, "_blank");
					  window.open(url, "_blank");
					  window.open(url, "_blank");*/
					  
					  
					  setTimeout(sendUIML, 800);					  										  
					  
				   };
					
				   ws.onmessage = function (evt) 
				   { 
					  if(A4TV.useBlockOMatic)
						  A4TV.clearBlocks();
					  var received_msg = evt.data;
					  console.log("Message received..." + received_msg);
					  sendlog("Message received..." + received_msg);
					  var cmd = received_msg.split(";");
					  var key = cmd[0].split("=");
					  var user = cmd[1].split("=");
					  var volume = cmd[2].split("=");
					  var keyCode = key[1];
					  var usertype = user[1];
					  var volumeValue = volume[1];
					  A4TV.userType = usertype;
					  if(volumeValue != -1)
						executeVolumeChange(volumeValue);
					  
					  if(keyCode != -1)
						executeKeyCode({keycode: keyCode});
					  //ws.send("Messagem de teste");
				   };
					
				   ws.onclose = function()
				   { 
					  // websocket is closed.
					  console.log("Connection is closed...");
					  //ws.close();
					  //setTimeout(connect, 2000);
				   };
				}
				
				else
				{
				   // The browser doesn't support WebSocket
				   console.log("WebSocket NOT supported by your Browser!");
				}
}  
  
function sendMessage(dom){ 
 
		if (dom != null){
			//sendlog(dom);
			ws.send(dom);
		}
    
}

function disconnect(){
	console.log("Connection will close");
	ws.close();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////BLOCK-O-MATIC////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

var containerList 	= ["BODY","DIV","UL","DL","P","TABLE","TD","SECTION","HEADER","FOOTER","ASIDE","NAV","ARTICLE","OBJECT","IFRAME","INS"];
var contentList 	= ["SPAN","A","LI","DT","DD","H1","H2","H3","H4","H5","IMG","INS"];
var excludeList 	= ["SCRIPT","STYLE","AREA","HEAD","META","FRAME","FRAMESET","BR","HR","NOSCRIPT"];
var ignoreList 	 	= ["HTML","TBODY","TR","PARAM","LINK"];

var ac = 0.5; //in pixel-square
var mac = 0.002 //0.002 pixel-square
var dc = 50; //50px
var tc = 1; //3 words

var dx = dc;
var dy = dc;

var blocks = [];
var geoList = [];

var bind=0;

var bomversion = "1.1";

var colors = {PAGE:'#FFFF00',CONTAINER:'#34FF00',CONTENT_CONTAINER:'#6FBEE5',CONTENT:'blue',DEFAULT:'magenta'};

var page;

var displayBlocks = true;

function documentDim(win,doc) {
	var w,h;
	if (win) w=win; else win=window;
	if (doc) d=doc; else doc=document;
	return {w:$(doc).width(),h:$(doc).height()};
}

function code(s) {
    var res="";
    if (!s) return "";
    res = res.replace("&","\&");
    res = res.replace("'","\'");
    res = res.replace('"',"\"");
    return res;
}

function getViXML() {
    var cnt = "<XML>\n";
    cnt+="<Document url='"+(document.URL)+"' Title='"+code(document.title)+"' Version='"+bomversion+"' Pos='WindowWidth||PageRectLeft:"+documentDim().w+" WindowHeight||PageRectTop:"+documentDim().h+" ObjectRectWith:0 ObjectRectHeight:0'>\n";
    cnt+=getViXMLObject(page,0,1);
    cnt+="</Document>\n";
    cnt+="</XML>";
    return(cnt);
}

function getImageList(obj) {
    var t="<Imgs ID='#ID#' IDList='$ID_LIST_IMAGES$'>\n";
    var a = "";
    var list = [];
    var col = [];
    for (var m=0;m<obj.geometricObjects.length;m++) {
        var geo = obj.geometricObjects[m];
        axc = obj.geometricObjects[m].element.getElementsByTagName("img");
        for (p=0;p<axc.length;p++) {
            col.push(axc[p]);
        }
    }
    col = col.filter(function(elem, pos) {return col.indexOf(elem) == pos;});
    
    for (var i=0;i<col.length;i++) {
        var img = col[i];
        a = "<img ID='#ID#' Name='"+code(img.getAttribute('name'))+"' Src='"+code(img.getAttribute('src'))+"'/>"
        var c = CryptoJS.MD5(a);
        list.push(c);
        t += a.replace('#ID#',c)+"\n";
    }
    t+="</Imgs>\n";
    t = t.replace('$ID_LIST_IMAGES$',list.join(","));
    t = t.replace("#ID#",CryptoJS.MD5(t));
    return(t);
}

function getLinksList(obj) {
    var t="<Links ID='#ID#' IDList='$ID_LIST_LINKS$'>\n";
    var a = "";
    var list = [];
    var col = [];
    for (var m=0;m<obj.geometricObjects.length;m++) {
        var geo = obj.geometricObjects[m];
        axc = obj.geometricObjects[m].element.getElementsByTagName("a");
        for (p=0;p<axc.length;p++) {
            col.push(axc[p]);
        }
    }
    col = col.filter(function(elem, pos) {return col.indexOf(elem) == pos;});
    
    for (var i=0;i<col.length;i++) {
        var link = col[i];
        a = "<Link ID='#ID#' Name='"+code(link.getAttribute('name'))+"' Adr='"+code(link.getAttribute('href'))+"'/>"
        var c = CryptoJS.MD5(a);
        list.push(c);
        t += a.replace('#ID#',c)+"\n";
    }
    t+="</Links>\n";
    t = t.replace('$ID_LIST_LINKS$',list.join(","));
    t = t.replace("#ID#",CryptoJS.MD5(t));
    return(t);
}

function collectTextNodes(element, texts) {
    if (element.tagName.toLowerCase() == "script") return;
    
    for (var child= element.firstChild; child!==null; child= child.nextSibling) {
        if (child.nodeType===3)
            texts.push(child);
        else if (child.nodeType===1)
            collectTextNodes(child, texts);
    }
}
function getTextWithSpaces(element) {
    if (element.tagName.toLowerCase() == "script") return "";
    var texts= [];
    collectTextNodes(element, texts);
    for (var i= texts.length; i-->0;)
        texts[i]= texts[i].data.replace("'","").replace('"',"").replace("&","&amp;");
    return texts.join(' ');
}

function getText(obj) {
    var all="";
    for (var i=0;i<obj.geometricObjects.length;i++) {
        var geo = obj.geometricObjects[i];
        if (geo) {
            all += getTextWithSpaces(geo.element)
        }
    }
    all = all.replace(/\s+/g, ' ');
    all = code(all);
    var txt = "<Txts ID='"+CryptoJS.MD5(all)+"' Txt='"+all+"'/>";
    return(txt);
}

function getViXMLObject(obj,level,pid) {
	if (!obj) return;
	var xml = "";
        var block="";
        var internal = "";
        
	var spc="";
	
	for (var j=0;j<level;j++) spc+=" ";
        
        
        if (obj.terminal()) {
            internal=spc+"   " + getLinksList(obj);
            internal+=spc+"   " + getImageList(obj);
            internal+=spc+"   " + getText(obj);
            block+=spc+"<Block Ref='Block"+pid+"' internal_id='"+obj.label+"' ID='"+CryptoJS.MD5(internal)+"' Pos='WindowWidth||PageRectLeft:" +obj.dim.x+ " WindowHeight||PageRectTop:"+obj.dim.y+" ObjectRectWidth:"+obj.dim.w+" ObjectRectHeight:"+obj.dim.h+"' Doc=''>\n"
            block+=internal;
        } else {
            var tt=spc+"<Block Ref='Block"+pid+"' internal_id='"+obj.label+"' ID='#ID#' Pos='WindowWidth||PageRectLeft:" +obj.dim.x+ " WindowHeight||PageRectTop:"+obj.dim.y+" ObjectRectWidth:"+obj.dim.w+" ObjectRectHeight:"+obj.dim.h+"' Doc=''>\n"
            block += tt.replace("#ID#",CryptoJS.MD5(tt));
        }
        xml+=block;
        for (var j=0;j<obj.children.length;j++) {
                block = obj.children[j];
                if (block) {
                    xml+=getViXMLObject(block,level+1,pid+"."+j);
                }
        }
        
	xml+= spc+"</Block>\n"
	return(xml);
}

function getRecord(obj,srcurl) {
	if (!obj) return;
	var s="";
	if (obj.countChildren()==0) {
		return "BOM,"+sniff()+",none,"+srcurl+","+documentDim().w+","+documentDim().h+","+ac+","+obj.id+","+obj.dim.x+","+obj.dim.y+","+obj.dim.w+","+obj.dim.h+","+obj.countCover()+"\n";
	} else {
		for (var i=0;i<obj.children.length;i++) {
			var child = obj.children[i];
			if (child) {
				s+=getRecord(child,srcurl);
			}
		}
	}
	return(s)
}

function elementCount(element) {
	if (!element) return;
	if (isWS(element)) return;
	if (isComment(element)) return;
	if (isText(element)) return;
	
	var count=0;
	for (var i=0;i<obj.childNodes.length;i++) {
		var child = obj.childNodes[i];
		if (child && !isWS(child) && !isComment(child) && !isText(child))
			count++;
	}
	return(count)
}

function blockCount(obj,onlyLeaves) {
	if (!obj) return;
	if (!obj.block)  return;
	var count;
	if (onlyLeaves && countChildren(obj)>0) 
		count=0;
	else 
		count=1;
	
	for (var i=0;i<obj.children.length;i++) {
		if (obj && obj.block) {
			dat = blockCount(obj.children[i],onlyLeaves);
			if (dat) {
				count+=dat
			}
		}
	}
	return(count);
}

function prepareLogicStructure(go,parent) {
	if (!go) return;
	//~ if (go.getAttribute("class")=="block") return;
	var log,gchild,lchild;
	log=parent;
	if (go.children.length == 1) {
		log = prepareLogicStructure(go.children[0],parent);
	} else {
		if ( (included(go.type,["CONTAINER","CONTENT_CONTAINER","CONTENT","DEFAULT"])) && (go.geometry) )
		{
			log = createNewLogicalObject(go,parent);
		}
		for (var i=0;i<go.children.length;i++) {
			gchild = go.children[i];
			prepareLogicStructure(gchild,log);
		}
	}
	return(log);
}

function debug(s) {
    console.log(s);
} 

function startSegmentation(win,pac,pdc,proclog) {	
		contentWindow = win;
		contentDocument = contentWindow.document;
		ac = pac;
		dc = pdc;
		debug("Starting with AC:"+ac+", DC:"+dc+"px, proclog:"+proclog);
		var root = contentDocument.getElementsByTagName('BODY')[0];
		debug("Processing Content Structure");
		processContentStructure(root,0);
		debug("Processing Geometric Structure");
		var georoot = processGeometricStructure(root,undefined);
		debug("Pre-processing Logic Structure");
		page = prepareLogicStructure(georoot);
		debug("Processing Logic Structure");
		//console.log(root,page)
		processLogicStructure(page,0,1,undefined);
        //return getViXML();
		return true;
}

function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    outputDocument.body.appendChild(form);
    form.submit();
}

function getXPath(elt) {
     var path = "";
     for (; elt && elt.nodeType == 1; elt = elt.parentNode)
     {
   	idx = getElementIdx(elt);
	xname = elt.tagName;
	if (idx > 1) xname += "[" + idx + "]";
	path = "/" + xname + path;
     }
 
     return path.toLowerCase();	
}

function getElementIdx(elt)
{
    var count = 1;
    for (var sib = elt.previousSibling; sib ; sib = sib.previousSibling)
    {
        if(sib.nodeType == 1 && sib.tagName == elt.tagName)	count++
    }
    
    return count;
}

function findPos(obj) {
   var curleft = obj.offsetLeft || 0;
   var curtop = obj.offsetTop || 0;
   while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
   }
   return {x:curleft,y:curtop};
}

function getRect(obj) {
	if (obj.tagName.toUpperCase() == "BODY") {
		return {x:0, y:0, w:documentDim().w, h:documentDim().h}
	} else {
		//~ r=obj.getBoundingClientRect();
		return {x:$(obj).offset().left, y:$(obj).offset().top, w:$(obj).width(), h:$(obj).height()};
	}
	
}

function isText(element) {
	if (element) {
		if (element.nodeName=="#text") {
			return(element.data.trim()!="");
		} else
			return(false);
	} else {
		return(false);
	}
}

function isWS(element) {
	if (element) {
		if (element.nodeType == 3) {
			if (element.data) {
				return(element.data.trim()=="");
			} else {
				return false
			}
		} else {
			return false;
		}
	} else {
		return(false);
	}
}

function isComment(element) {
	if (element) {
		if (element.nodeType == 8) {
			return true;
		} else {
			return false;
		}
	} else {
		return(false);
	}
}

function isRoot(element) {
	if (element) {
		if (element.tagName.toUpperCase() == "BODY") {
			return true;
		} else {
			return false;
		}
	} else {
		return(false);
	}
}


function isContentContainer(element) {
	if (!element) return;
	if (isContainer(element)) {
		var etc=0;
		var child;
		var n=element.childNodes.length;
		for (var i=0; i<element.childNodes.length; i++) {
			child = element.childNodes[i];
			//~ console.log(child,isWS(child))
			if (isContent(child)) {
				etc++;
			}
			//~ console.log(isWS(child),child.data);
			if (isWS(child) || isComment(child) || !visible(child) || isExcluded(child) || isIgnored(child)) {
				n--;
			}
		}
			//~ console.log("CONTENT",element.tagName,etc,element.childNodes.length,n);//~ console.log(element.tagName,etc,element.childNodes.length,n);

		return(etc == n);
	} else {
		return(false);
	}
}

function isDefault(element) {
	//inspect area and text length of element
	if (element.childNodes.length==0) {
		return(true)
	} 
	var ws = 0;
	for (var i=0; i<element.childNodes.length; i++) {
		if (isWS(element.childNodes[i])) {
			ws++;
		}
	}
	return(element.childNodes.length == ws);
}

function isContent(element) {
	if (!element) return;
	if (!element.tagName) return;
	if (isWS(element)) return(false);
	if (isComment(element)) return(false);
	if (isText(element)) return(true);
	var itis = false;
	for (var i=0;i<contentList.length;i++) {
		if (contentList[i].toUpperCase() == element.tagName.toUpperCase()) {
			itis = true;
			break;
		}
	}

	return(itis);
}

function isContainer(element) {
	if (!element) return(false);
	if (isWS(element)) return(false);
	if (isComment(element)) return(false);
	if (isText(element)) return(false);
	
	var itis = false;
	for (var i=0;i<containerList.length;i++) {
		if (containerList[i].toUpperCase() == element.tagName.toUpperCase()) {
			itis = true;
			break;
		}
	}
	return(itis);
}
function isExcluded(element) {
	if (!element) return(false);
	if (isWS(element)) return(false);
	if (isComment(element)) return(false);
	if (isText(element)) return(false);
	if (!element) return(false);
	
	var itis = false;
	for (var i=0;i<excludeList.length;i++) {
		if (excludeList[i] && element.tagName) {
			if (excludeList[i].toUpperCase() == element.tagName.toUpperCase()) {
				itis = true;
				break;
			}
		}
	}
	return(itis);
}

function isIgnored(element) {
	if (!element) return(false);
	if (isWS(element)) return(false);
	if (isComment(element)) return(false);
	if (isText(element)) return(false);
	if (!element) return(false);
	
	var itis = false;
	for (var i=0;i<ignoreList.length;i++) {
		if (ignoreList[i].toUpperCase() == element.tagName.toUpperCase()) {
			itis = true;
			break;
		}
	}
	return(itis);
}

function BOMType(element) {
        if (!element) return(null);
        if (isWS(element)) return(null);
	if (isComment(element)) return(null);
	if (isText(element)) return(null);
	if (isExcluded(element)) return(null);
	if (!visible(element)) return(null);
	if (!isContent(element)) {
            var txn = $(element).text();
            //if (element.textContent) {alert("firefox");txn=element.textContent;} else {alert("chrome");txn=element.innerText;}
            if (txn) {
                if ((element.children.length==0) && (txn.trim()=="")) {
                        return(false);
                }
            }
	}
	
	//this bother on chrome evaluation with this pluging
	if (element.getAttribute("id")) {
		if (element.getAttribute("id").toLowerCase() == "window-resizer-tooltip") 
			return false;
	}
	
	if (isDefault(element)) 			return "DEFAULT";
	if (isContent(element)) 			return "CONTENT";
	if (isContentContainer(element)) 	return "CONTENT_CONTAINER";
	if (isContainer(element)) 			return "CONTAINER";
	if (isRoot(element)) 				return "PAGE";
	return(null);
}

function processContentStructure(element,level) {
	if (!element) return;
	if (isWS(element)) return(false);
	if (isComment(element)) return(false);
	if (isText(element)) {
		var span = contentDocument.createElement("span");
		span.setAttribute("class","bomwrapper");
		var par = element.parentNode;
		span.appendChild(element);
		par.appendChild(span);
		element = span;
		element.setAttribute("bomtype","CONTENT");
		return;
	}

	if (element.getAttribute("bomtype")) return(false);
	if (isExcluded(element)) return(false);
	if (!visible(element)) return(false);
	if (!valid(element)) return(false);
	if (element.getAttribute('id')=="window-resizer-tooltip") return(false);
	if (isIgnored(element)) {
		for (var i=0; i<element.childNodes.length; i++) {
			processContentStructure(element.childNodes[i],level+1);
		}
		return;
	}
	
	var tn = element.tagName;
	var bt = BOMType(element);
	element.setAttribute("bomtype",bt);
	for (var i=0; i<element.childNodes.length; i++) {
		processContentStructure(element.childNodes[i],level+1);
	}
}

function refName(element) {
	if (!element) return "";
	if (isWS(element)) return("");
	if (isComment(element)) return("");
	if (isText(element)) return("");
	if (isExcluded(element)) return("");
	var name = "(nodef)";
	if (element.tagName) name = element.tagName;
	if (element.getAttribute("id")) name = name + "." + element.getAttribute("id");
	if (element.className) name = name + " " + element.className
	return(name);
}

function processGeometricObject(element) {
	var bt = BOMType(element);
	var geo;
	if (bt) {
		element.setAttribute("bomtype",bt);
		var dim = getRect(element);
		var r = dim.x+" "+dim.y+" "+dim.w+" "+dim.h;
		var a =  relativeArea(element);
		element.setAttribute("bomgeometry",r);
		element.setAttribute("bomarea",a);
		element.setAttribute("bomid","C"+(1000+Math.random(1000)));
		geo = createNewGeometricObject(element,element.parent);
	}
	return(geo);
}

function processGeometricStructure(element,parent) {
	if (!element) return;
	if (isWS(element)) return(false);
	if (isComment(element)) return(false);
	if (isText(element)) return(false);
	if (isExcluded(element)) return(false);
	
	var dim = getRect(element);
	if ((dim.w<10) || (dim.h<10)) {
		//~ element.setAttribute("bomtype",null); SKIP IT DO NOT CREATE GEOMETRIC OBJECT
		return;
	}
	var geo = createNewGeometricObject(element,parent);
	
	var k = 0;
	for (var i=0; i<element.childNodes.length; i++) {
		child = element.childNodes[i];
		if (!isWS(child) && !isComment(child) && !isText(child) && !isExcluded(child)) {
			k++;
			processGeometricStructure(element.childNodes[i],geo);
		} 
	}
	return geo;
}

function visuallyDifferent(element) {
	if (element) {
		if (!included(element.style.backgroundColor.toLowerCase(),["","transparent","rgba(0,0,0,0)"])) {
			return(true);
		}
	}
	return(false);
}

function distanceGL(go,lo) {
	return(1);
} //delete me
function distanceGG(go,lo) {
	return(0);
} //delete me

function edistance(x1,y1,x2,y2) {
var xs = 0;
var ys = 0;
xs = x2-x1;
xs = xs*xs;
ys = y2-y1;
ys = ys*ys;
return(Math.sqrt(xs+ys));
}

function getPoints(geo) {
	if (!geo) return;
	if (!geo.getAttribute("bomgeometry")) return;
	poly = geo.getAttribute("bomgeometry").split(" ");
	for (var u=0;u<poly.length;u++) {
		poly[u] = parseFloat(poly[u]);
	}
	return(poly);
}

function getPolygonPoints(dim) {
	var res = [];
	res = res.concat([dim.x,dim.y]);
	res = res.concat([dim.x,dim.y+dim.h]);
	res = res.concat([dim.x+dim.w,dim.y+dim.h]);
	res = res.concat([dim.x+dim.w,dim.y]);
	//~ res = res.concat([dim.x,dim.y]);
	return(res);
}

function visited(element) {
	if (!element) return(true);
	var res;
	if (res = element.getAttribute("visited")) {
		if (res == "true") {
			return(true);
		} else {
			return(false);
		}
	} else {
		return(false);
	}
}



function isIn(geo,log) {
	var itis = false;
	for (var i=0;i<log.geometricObjects.length;i++) {
		if (log.geometricObjects[i] == geo)
			itis = true;
	}
	return(itis);
}

function isContained(p1,p2) {
	var res = PolyK.Contained(p1,p2);
	return(res);
}

function visible(obj) {
	if (isWS(obj)) return(false);
	if (isComment(obj)) return(false);
	if (isText(obj)) return(true);
	if (isExcluded(obj)) return(false);
	//~ if (visited(obj)) return(false);
	
	var xvis=false;
	var xarea=parseFloat((Math.abs(getRect(obj).w-getRect(obj).x))*(Math.abs(getRect(obj).h-getRect(obj).y)));
	xvis = (included(obj.style.visibility.toUpperCase(),["","VISIBLE","INHERIT"])) && (!included(obj.style.display.toUpperCase(),["NONE"]));
	return(xvis && (xarea>0));
}

function valid(obj) {
	if (!obj) return false;
	var val = false;
	var c=0;
	var ws=0;
	var vok=0;
	var child;
	
	if (isContent(obj)) vok++; 
	
	for (var i=0;i<obj.childNodes.length;i++) {
		child = obj.childNodes[i];
		if (isWS(child)) {
			ws++;
		} else { 
			if (isText(child)) {
				if (child.data.trim().length>=tc) { //mejorar el conteo evitar ws internos
					vok++;
				}
			} else {
				if (isContent(child)) { //i.e.: <img/>, <br/> tags
					vok++;
				} else {
					if (!isExcluded(child) && !isComment(child) ) {
						if (child.tagName) {
							if (child.tagName.toUpperCase() == "IFRAME") {
								if (($(child).width()>0) && ($(child).height()>0) && ($(child).css("display")=="block"))
								vok++;
							} else {
								if (valid(child)) 
									vok++;
							}
						} else {
							if (valid(child)) 
									vok++;
						}
					} 
				}
			}
		}
	}
	
	return(vok>0);
}

function distance(log1,log2) {
	
	var closest = {obj:undefined, value:9999999999};
	
	ileft = 0
	itop = 1
	iright = 2
	ibottom = 3
	
	poly1 = getPolygonPoints(log1.dim);
	
	dleft = PolyK.ClosestEdge	(poly1,log2.dim.x,log2.dim.y);
	dtop = PolyK.ClosestEdge	(poly1,log2.dim.x,log2.dim.y+log2.dim.h);
	dright = PolyK.	ClosestEdge	(poly1,log2.dim.x+log2.dim.w,log2.dim.y+log2.dim.h);
	dbottom = PolyK.ClosestEdge	(poly1,log2.dim.x+log2.dim.w,log2.dim.y);
		
	if (dleft.dist < closest.value) {
		closest.obj = blocks[i];
		closest.value = dleft.dist;
	}
	if (dtop.dist < closest.value) {
		closest.obj = blocks[i];
		closest.value = dtop.dist;
	}
	if (dright.dist < closest.value) {
		closest.obj = blocks[i];
		closest.value = dright.dist;
	}
	if (dbottom.dist < closest.value) {
		closest.obj = blocks[i];
		closest.value = dbottom.dist;
	}
	
	//console.log("closest",closest.obj,closest.value);
	return(closest);
}

function createNewLogicalObject(geo,parent) {
	var log = new logicalObject();
	log.parent = parent;
	log.addGeometricObject(geo);
	log.setLabel();
	if (parent)	parent.children.push(log);
	blocks.push(log);
	return(log);
}

function createNewGeometricObject(element,parent) {
	var geo = new geometricObject();
	geo.addContentElement(element);
	geo.parent = parent;
	if (parent) parent.children.push(geo);
	geoList.push(geo);
	return(geo);
}

function getAligment(log1,log2) {
	if ( (Math.abs(log1.dim.x-log2.dim.x)<dc) && (Math.abs(log1.dim.w-log2.dim.w)<dc)) {
		return("V");
	} else { 
		if ( (Math.abs(log1.dim.y-log2.dim.y)<dc) && (Math.abs(log1.dim.h-log2.dim.h)<dc)) {
			return("H");
		} else {
			return(null);
		}
	}
}

function removeLogicObject(log) {
	if (!log) return;
	//console.log("delete "+log.id+" "+log.label)
	if (log.parent) {
		for(var i=0;i<log.children.length;i++) {
			var child = log.children[i];
			if (child) {
				child.parent = log.parent;
				log.parent.children.push(child);
				log.children[i] = undefined;
			}
		}
		var ind=log.parent.children.indexOf(log);
		log.parent.children[ind]=undefined
	}
	blocks.splice(blocks.indexOf(log),1);
	log.deleteBlock();
	log = undefined;

}

function processLogicalObject(log) {
	if (!log) return;
	if (log.visited) return;
	var dep = false;
	var i,j;
	for (i=0;i<log.children.length;i++) {
		if (log.children[i]) {
			if (log.children[i].relativeArea()>=ac) {
				processLogicStructure(log.children[i])
			} else {
				if (log.children[i].visualCuesPresent) {
					log.children[i].clearChildrenBlocks();
				} else {
					var touch = 0;
					var stop=false;
					if (i<log.children.length-1)
						j=i+1
					else
						j=i
					while (!stop) {
						if (log.children[j]) {
							if (log.children[j] && log.children[j].relativeArea()<ac) {
								if (log.children[j] && (i!=j) && (distance(log.children[i],log.children[j]).value<dc) && (included(getAligment(log.children[i],log.children[j]),["V","H"])) ) {
									log.children[i].mergeWith(log.children[j]);
									touch++;
								} 
							} 
						}
						j++;
						stop = (j>=log.children.length);
					}
				}
				if (touch==0) {
					log.children[i].clearChildrenBlocks();
				}
			} 
		}
	}
	/*for (var i=0;i<log.children.length;i++) {
		if (log.children[i]) {
			if (log.children[i].relativeArea()<ac) {
				//log.clearChildrenBlocks();
				//console.log("borrado");
				break;
			}
		}
	}*/
	log.updateBlock();
}



function processLogicStructure(log,level,pid,parent) {
	if (!log) return;
	if (log.visited) return;
	
	if (log.type=="PAGE") {
		processLogicalObject(log);
	} else if (log.type=="CONTAINER"){
		if (log.children.length==1) {
			child = log.children[0];
			removeLogicObject(log);
			processLogicStructure(child,level+1,pid,log);
		} else {
			processLogicalObject(log);
		}
	} else if (log.type=="CONTENT_CONTAINER") {
		if (log.children.length==1) {
			child = log.children[0];
			removeLogicObject(log);
			processLogicStructure(child,level+1,pid,log);
		} else {
			processLogicalObject(log);
		}
	} else if (log.type=="CONTENT") {
		if (log.children.length==1) {
			child = log.children[0];
			removeLogicObject(log);
			processLogicStructure(child,level+1,pid,log);
		} else {
			processLogicalObject(log);
		}
	} else if (log.type=="DEFAULT") {
		processLogicalObject(log);
	} else {
		console.log("WARNING!!!! Element SKIPPED")
	}
	log.visited = true;
}


function getPolygonPoints(dim) {
	var res = [];
	res = res.concat([dim.x,dim.y]);
	res = res.concat([dim.x,dim.y+dim.h]);
	res = res.concat([dim.x+dim.w,dim.y+dim.h]);
	res = res.concat([dim.x+dim.w,dim.y]);
	return(res);
}

function getX(points) {
	var x=[];
	for (var i=0;i<points.length;i+=2) {
		x.push(points[i]);
	}
	return(x);
}

function getY(points) {
	var y=[];
	for (var i=1;i<points.length;i+=2) {
		y.push(points[i]);
	}
	return(y);
}

function getType(obj) { //not used
	if (isWS(obj)) return("");
	if (isComment(obj)) return("");
	if (isText(obj)) return("");
	if (isExcluded(obj)) return("");
	if (visited(obj)) return("");
	
	return(obj.getAttribute("bomtype"));
}
function getId(go) { //not used
	return(go.getAttribute("bomid"));
}

function included(obj,arr) {
	for (var i=0;i<arr.length;i++) {
		if (arr[i]==obj) {
			return(true);
		}
	}
	return(false);
}

/* ==============================================================*/
/*  LOGIC OBJECT */
/* ==============================================================*/

function logicalObject(obj) {
	this.block = undefined;
	this.id = "L"+blocks.length;
	this.dim = undefined;
	this.parent;
	this.visited = false;
	this.children = [];
	this.type = "";
	this.geometricObjects = [];
	this.label = "STANDARD";
	this.visualCuesPresent = false;

	this.setLabel = function() {
		if (this.dim.x < dx) {
			this.label = "LEFT";
		} else {
			if ((documentDim().w - this.dim.w) < dx) {
				this.label = "RIGHT";
			} else {
				if (this.dim.y < dy) {
					this.label = "TOP";
				} else {
					if ((documentDim().h - this.dim.h) < dy) {
						this.label = "BOTTOM";
					} else {
						this.label = "STANDARD";
					}
				}
			}
		}
	}
	
	this.nextSibling = function() {
		if (this.parent) {
			ind = this.parent.children.indexOf(this);
			if (ind<this.parent.children.length) {
				return(this.parent.children[ind+1]);
			} else {
				return(null);
			}
		} else {
			return(null);
		}
	}
	
	this.previousSibling = function() {
		if (this.parent) {
			ind = this.parent.children.indexOf(this);
			if (ind>0) {
				return(this.parent.children[ind-1]);
			} else {
				return(null);
			}
		} else {
			return(null);
		}
	}
	
	this.clearChildrenBlocks = function() {
		this.visited = true
		for (var i=0;i<this.children.length;i++) {
			if (this.children[i]) {
				this.children[i].clearChildrenBlocks();
				this.children[i].deleteBlock();
				this.children[i] = undefined;
				blocks.splice(blocks.indexOf(this.children[i]),1);
			}
		}
	}
	
	this.mergeWith = function(log) {
		if (!log) return;
		if (this == log) return;
		if (log.geometricObjects) {
			for (var i=0;i<log.geometricObjects.length;i++) {
				this.addGeometricObject(log.geometricObjects[i]);
			}
		}
		if (log.parent) {
			var ind=log.parent.children.indexOf(log);
			log.parent.children[ind]=undefined
		}

		log.deleteBlock();
		
		for (var i=0;i<log.children.length;i++) {
			child = log.children[i];
			if (child) {
				child.parent = this;
				child.visited = true;
				this.children.push(child);
			}
		}
		
		if (this.type!="CONTAINER") {
			if (log.type!="DEFAULT") {
				if (this.type != log.type) this.type = log.type;
			}
		}
		this.clearChildrenBlocks();
		blocks.splice(blocks.indexOf(log),1);
		log = undefined
		this.updateBlock();
	}
	
	this.area = function() {
		return( (this.dim.w) * (this.dim.h));
	}
	this.perimeter = function() {
		return( 2*(this.dim.w+this.dim.h));
	}
	this.hypo = function() {
		return(Math.sqrt(Math.pow(this.dim.w,2)+Math.pow(this.dim.h,2)));
	}
	
	this.relativeArea = function() {
                //~ return(this.area() / this.parent.area() );
                //~ return(this.hypo()/this.parent.hypo());
                //~ return(this.perimeter()/this.parent.perimeter());
		if (page) {
			return(this.hypo()/page.hypo());
		} else {
			return(0);
		}
	}
	
	this.bomgeometry = function() {
		return [this.dim.x,this.dim.y,this.dim.w,this.dim.h];
	}
	
	this.makeid = function()
	{
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 25; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
	
	this.addChild = function(child) {
		child.parent = this;
		this.children.push(child);
	}
	
	this.addGeometricObject = function(geo) {
		if (!geo) return;
		if (!geo.element) return;
		this.geometricObjects.push(geo);
		var nr;
		var r;
		if (!this.dim) {
			if (geo.element.tagName.toUpperCase()=="BODY") {
				this.type='PAGE';this.id="PAGE";
				this.dim = {x:0,y:0,w:documentDim(parent.contentWindow,parent.contentDocument).w,h:documentDim(parent.contentWindow,parent.contentDocument).h}
			} else  {
				this.dim = {x:0,y:0,w:0,h:0}
				//~ gr = getRect(geo);
				this.dim = geo.geometry;
				this.type = geo.type; //getType(geo);
			}
			r = getPolygonPoints(this.dim);
		} else {
			r = getPolygonPoints(this.dim).concat(getPolygonPoints(geo.geometry));
			if (included(geo.type,["CONTAINER","CONTENT_CONTAINER"])) {
				this.type = geo.type;
			}
		}
		
		xs = getX(r);
		ys = getY(r);
		
		this.dim.x = Math.min.apply(null, xs);
		this.dim.y = Math.min.apply(null, ys);
		this.dim.w = Math.max.apply(null, xs)-this.dim.x;
		this.dim.h = Math.max.apply(null, ys)-this.dim.y;
		
		if (!this.block) {
			this.block = this.insertBlock();
		}
		var g = this.dim.x+" "+this.dim.y+" "+this.dim.w+" "+this.dim.h;
		this.block.setAttribute("bomgeometry",g);
		this.block.setAttribute("bomtype",this.type);
		color=colors[this.type]; 
		
		if (displayBlocks) {
                    this.block.setAttribute("style","border : 2px solid black;z-index: 10000;position:absolute;background-color:transparent;border-color:"+color+";color:black;font-weight:bold;opacity:1"); 
                    this.block.style.left = this.dim.x+"px";
                    this.block.style.top = this.dim.y+"px";
                    this.block.style.width = this.dim.w+"px";
                    this.block.style.height = this.dim.h+"px";
                }
		geo.visited = true;
		var sfc;
		var bgc;
		bgc = contentWindow.getComputedStyle(geo.element,null).getPropertyValue("background-color");
		fc = parseInt(contentWindow.getComputedStyle(geo.element,null).getPropertyValue("font-size"));
		if (bgc!="rgba(0, 0, 0, 0)") {
			this.visualCuesPresent = true;
		}

		if (geo.element.parentNode) {
			t=0
			for (var k=0;k<geo.element.parentNode.children.length;k++) {
				if ( (geo.element.parentNode.children[k]!=geo) ) {
					var sfc = parseInt(contentWindow.getComputedStyle(geo.element.parentNode.children[k],null).getPropertyValue("font-size")); 
					if (2*sfc < fc) 
						t++;
				}
			}
			if (t>0) 
				this.visualCuesPresent = true;
		}
		this.updateBlock();
	}
	
	this.insertBlock = function() {
            var vc="";
            var block = document.createElement('div');
            if (this.visualCuesPresent) vc="VC";
            block.innerHTML = "<span  visited='true' class='bomauxtext' style='opacity:1;color:black;font-size:12pt'>"+this.id+" - "+this.relativeArea().toFixed(4) +"<br>"+vc+"</span>";
            block.setAttribute("class","block");
            block.setAttribute("visited","true");
            //block.setAttribute("id",this.makeid());
			block.setAttribute("id",this.id);
            contentDocument.body.appendChild(block);
            return(block);
	}
	
	this.updateBlock = function() {
		var aaa=this.relativeArea().toFixed(4);
		if (this.countChildren()==0) {
                    this.setOn();
                } else {
                    this.hide();
                }
		this.block.innerHTML = "<span visited='true' class='bomauxtext' style='opacity:1;color:black;font-size:12pt'>"+this.id+"</span>";
	}
	
	this.setOn = function() {
		if (!this.block) return;
		var c = colors[this.type]
		if (!c) c="black";
		this.block.style.backgroundColor = c;
		this.block.style.opacity = "0.5";
		this.block.style.border = "2px dotted black";
		this.block.style.color = "white";
	}
	
	this.setOff = function() {
		if (!this.block) return;
		this.block.style.backgroundColor = "transparent";
		this.block.style.color = "black";
		this.block.style.opacity = "1";
		this.block.style.border = "2px solid "+colors[this.type];
	}
	this.hide = function() {
		if (!this.block) return;
		this.block.style.backgroundColor = "transparent";
		this.block.style.opacity = "1";
		this.block.style.border = "0px solid transparent";
	}
	this.deleteBlock = function() {
		if (this.block) contentDocument.body.removeChild(this.block);
		this.block=undefined;
	}
	this.countCover = function() {
		var cont=0;
		for (var i=0;i<this.geometricObjects.length;i++) {
			cont+=this.geometricObjects[i].countCover();
		}
		return(cont);
	}
	this.countChildren = function() {
		var cont=0;
		for (var i=0;i<this.children.length;i++) {
			if (this.children[i]) {
				cont++;
			}
		}
		return(cont);
	}
        this.terminal = function() {
            return(this.countChildren()==0);
        }
}

function relativeArea(element) {
		var r,p;
		if (element.parentNode) {
			r = getPolygonPoints(getRect(element));
			p = getPolygonPoints(getRect(element.parentNode))
			ra = Math.abs(PolyK.GetArea(r));
			rp = Math.abs(PolyK.GetArea(p));
			res = ra / rp;
			if (res>1) res=1;
			return(res);
		} else {
			return(1);
		}
	}

/* ==============================================================*/
/*  GEOMETRIC OBJECT */
/* ==============================================================*/

function geometricObject() {
	this.children = [];
	this.parent = undefined;
	this.element = undefined;
	this.type = undefined;
	this.geometry = undefined;
	this.area = undefined;
	this.id = undefined;
	this.visited = false;
	
	this.addContentElement = function(element) {
		this.element = element;
		this.bt = BOMType(this.element);
		if (this.bt) {
			this.type = this.bt;
			this.geometry=getRect(this.element);
			this.area = relativeArea(this.element);
			this.id = "C"+(1000+Math.random(1000));
		}
	}
	this.getGeometry = function() {
		return(this.dim.x+" "+this.dim.y+" "+this.dim.w+" "+this.dim.h);
	}
	this.countCover = function() {
		return($(this.element).find('*').length)
	}
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////POLYK////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


	/*
		PolyK library
		url: http://polyk.ivank.net
		Released under MIT licence.
		
		Copyright (c) 2012 Ivan Kuckir

		Permission is hereby granted, free of charge, to any person
		obtaining a copy of this software and associated documentation
		files (the "Software"), to deal in the Software without
		restriction, including without limitation the rights to use,
		copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the
		Software is furnished to do so, subject to the following
		conditions:

		The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		OTHER DEALINGS IN THE SOFTWARE.
	*/

	var PolyK = {};
	var allBaseLines = new Array();	//needed for convex and orthogonal hull computing
	/*
		Is Polygon self-intersecting?
		
		O(n^2)
	*/
	
	PolyK.IsSimple = function(p)
	{
		var n = p.length>>1;
		if(n<4) return true;
		var a1 = new PolyK._P(), a2 = new PolyK._P();
		var b1 = new PolyK._P(), b2 = new PolyK._P();
		var c = new PolyK._P();
		
		for(var i=0; i<n; i++)
		{
			a1.x = p[2*i  ];
			a1.y = p[2*i+1];
			if(i==n-1)	{ a2.x = p[0    ];  a2.y = p[1    ]; }
			else		{ a2.x = p[2*i+2];  a2.y = p[2*i+3]; }
			
			for(var j=0; j<n; j++)
			{
				if(Math.abs(i-j) < 2) continue;
				if(j==n-1 && i==0) continue;
				if(i==n-1 && j==0) continue;
				
				b1.x = p[2*j  ];
				b1.y = p[2*j+1];
				if(j==n-1)	{ b2.x = p[0    ];  b2.y = p[1    ]; }
				else		{ b2.x = p[2*j+2];  b2.y = p[2*j+3]; }
				
				if(PolyK._GetLineIntersection(a1,a2,b1,b2,c) != null) return false;
			}
		}
		return true;
	}
	
	PolyK.IsConvex = function(p)
	{
		if(p.length<6) return true;
		var l = p.length - 4;
		for(var i=0; i<l; i+=2)
			if(!PolyK._convex(p[i], p[i+1], p[i+2], p[i+3], p[i+4], p[i+5])) return false;
		if(!PolyK._convex(p[l  ], p[l+1], p[l+2], p[l+3], p[0], p[1])) return false;
		if(!PolyK._convex(p[l+2], p[l+3], p[0  ], p[1  ], p[2], p[3])) return false;
		return true;
	}
	
	PolyK.GetArea = function(p)
	{
		if(p.length <6) return 0;
		var l = p.length - 2;
		var sum = 0;
		for(var i=0; i<l; i+=2)
			sum += (p[i+2]-p[i]) * (p[i+1]+p[i+3]);
		sum += (p[0]-p[l]) * (p[l+1]+p[1]);
		return - sum * 0.5;
	}
	
	PolyK.GetAABB = function(p)
	{
		var minx = Infinity; 
		var miny = Infinity;
		var maxx = -minx;
		var maxy = -miny;
		for(var i=0; i<p.length; i+=2)
		{
			minx = Math.min(minx, p[i  ]);
			maxx = Math.max(maxx, p[i  ]);
			miny = Math.min(miny, p[i+1]);
			maxy = Math.max(maxy, p[i+1]);
		}
		return {x:minx, y:miny, width:maxx-minx, height:maxy-miny};
	}
	/*
	* Finding the ConvexHull of a set of points
	* hacked by Andres Sanoja
	* LIP6
	*/
	function getDistant(cpt, bl) {
		var Vy = bl[1][0] - bl[0][0];
		var Vx = bl[0][1] - bl[1][1];
		return (Vx * (cpt[0] - bl[0][0]) + Vy * (cpt[1] -bl[0][1]))
	}


	function findMostDistantPointFromBaseLine(baseLine, points) {
		var maxD = 0;
		var maxPt = new Array();
		var newPoints = new Array();
		for (var idx in points) {
			var pt = points[idx];
			var d = getDistant(pt, baseLine);
			
			if ( d > 0) {
				newPoints.push(pt);
			} else {
				continue;
			}
			
			if ( d > maxD ) {
				maxD = d;
				maxPt = pt;
			}
		
		} 
		return {'maxPoint':maxPt, 'newPoints':newPoints}
	}
	
	function buildConvexHull(baseLine, points) {
		allBaseLines.push(baseLine)
		var convexHullBaseLines = new Array();
		var t = findMostDistantPointFromBaseLine(baseLine, points);
		if (t.maxPoint.length) { // if there is still a point "outside" the base line
			convexHullBaseLines = 
				convexHullBaseLines.concat( 
					buildConvexHull( [baseLine[0],t.maxPoint], t.newPoints) 
				);
			convexHullBaseLines = 
				convexHullBaseLines.concat( 
					buildConvexHull( [t.maxPoint,baseLine[1]], t.newPoints) 
				);
			return convexHullBaseLines;
		} else {  // if there is no more point "outside" the base line, the current base line is part of the convex hull
			return [baseLine];
		}    
	}

	function getConvexHull(points) {
    //find first baseline
    var maxX, minX;
    var maxPt, minPt;
    for (var idx in points) {
        var pt = points[idx];
        if (pt[0] > maxX || !maxX) {
            maxPt = pt;
            maxX = pt[0];
        }
        if (pt[0] < minX || !minX) {
            minPt = pt;
            minX = pt[0];
        }
    }
    var ch = [].concat(buildConvexHull([minPt, maxPt], points),
                       buildConvexHull([maxPt, minPt], points))
    return ch;
}
	
	PolyK.ConvexHull = function(p)
	{
		allBaseLines = new Array();
		var parr = [];
		var pmod = [];
		// conversing array of points to points as subarray 
		for (var i=0;i<p.length;i+=2) {
			parr.push([p[i],p[i+1]]);
		}
		res = getConvexHull(parr);
		// reconverting to array of points representacion
		for (var i=0;i<parr.length;i++) {
			pmod.push(parr[i][0]);
			pmod.push(parr[i][1]);
		}
		return(pmod);
	}
	
	/*
	 ending computing convew hull
	 */
	
	PolyK.Triangulate = function(p)
	{
		var n = p.length>>1;
		if(n<3) return [];
		var tgs = [];
		var avl = [];
		for(var i=0; i<n; i++) avl.push(i);
		
		var i = 0;
		var al = n;
		while(al > 3)
		{
			var i0 = avl[(i+0)%al];
			var i1 = avl[(i+1)%al];
			var i2 = avl[(i+2)%al];
			
			var ax = p[2*i0],  ay = p[2*i0+1];
			var bx = p[2*i1],  by = p[2*i1+1];
			var cx = p[2*i2],  cy = p[2*i2+1];
			
			var earFound = false;
			if(PolyK._convex(ax, ay, bx, by, cx, cy))
			{
				earFound = true;
				for(var j=0; j<al; j++)
				{
					var vi = avl[j];
					if(vi==i0 || vi==i1 || vi==i2) continue;
					if(PolyK._PointInTriangle(p[2*vi], p[2*vi+1], ax, ay, bx, by, cx, cy)) {earFound = false; break;}
				}
			}
			if(earFound)
			{
				tgs.push(i0, i1, i2);
				avl.splice((i+1)%al, 1);
				al--;
				i= 0;
			}
			else if(i++ > 3*al) break;		// no convex angles :(
		}
		tgs.push(avl[0], avl[1], avl[2]);
		return tgs;
	}
	
	PolyK.ContainsPoint = function(p, px, py)
	{
		var n = p.length>>1;
		var ax, ay, bx = p[2*n-2]-px, by = p[2*n-1]-py;
		var depth = 0;
		for(var i=0; i<n; i++)
		{
			ax = bx;  ay = by;
			bx = p[2*i  ] - px;
			by = p[2*i+1] - py;
			if(ay< 0 && by< 0) continue;	// both "up" or both "donw"
			if(ay>=0 && by>=0) continue;	// both "up" or both "donw"
			if(ax< 0 && bx< 0) continue; 
			
			var lx = ax + (bx-ax)*(-ay)/(by-ay);
			if(lx>0) depth++;
		}
		return (depth & 1) == 1;
	}
	
	PolyK.Contained = function(p1, p2) {
		var con = true;
		for (var i=0;i<p1.length;i+=2) {
			if (!PolyK.ContainsPoint(p2,p1[i],p1[i+1])) {
				con=false;
				break;
			}
		}
		return(con);
	}
	
	PolyK.Slice = function(p, ax, ay, bx, by)
	{
		if(PolyK.ContainsPoint(p, ax, ay) || PolyK.ContainsPoint(p, bx, by)) return [p.slice(0)];

		var a = new PolyK._P(ax, ay);
		var b = new PolyK._P(bx, by);
		var iscs = [];	// intersections
		var ps = [];	// points
		for(var i=0; i<p.length; i+=2) ps.push(new PolyK._P(p[i], p[i+1]));
		
		for(var i=0; i<ps.length; i++)
		{
			var isc = new PolyK._P(0,0);
			isc = PolyK._GetLineIntersection(a, b, ps[i], ps[(i+1)%ps.length], isc);
			
			if(isc)
			{
				isc.flag = true;
				iscs.push(isc);
				ps.splice(i+1,0,isc);
				i++;
			}
		}
		if(iscs.length == 0) return [p.slice(0)];
		var comp = function(u,v) {return PolyK._P.dist(a,u) - PolyK._P.dist(a,v); }
		iscs.sort(comp);
		
		var pgs = [];
		var dir = 0;
		while(iscs.length > 0)
		{
			var n = ps.length;
			var i0 = iscs[0];
			var i1 = iscs[1];
			var ind0 = ps.indexOf(i0);
			var ind1 = ps.indexOf(i1);
			var solved = false;
			
			if(PolyK._firstWithFlag(ps, ind0) == ind1) solved = true;
			else
			{
				i0 = iscs[1];
				i1 = iscs[0];
				ind0 = ps.indexOf(i0);
				ind1 = ps.indexOf(i1);
				if(PolyK._firstWithFlag(ps, ind0) == ind1) solved = true;
			}
			if(solved)
			{
				dir--;
				var pgn = PolyK._getPoints(ps, ind0, ind1);
				pgs.push(pgn);
				ps = PolyK._getPoints(ps, ind1, ind0);
				i0.flag = i1.flag = false;
				iscs.splice(0,2);
				if(iscs.length == 0) pgs.push(ps);
			}
			else { dir++; iscs.reverse(); }
			if(dir>1) break;
		}
		var result = [];
		for(var i=0; i<pgs.length; i++)
		{
			var pg = pgs[i];
			var npg = [];
			for(var j=0; j<pg.length; j++) npg.push(pg[j].x, pg[j].y);
			result.push(npg);
		}
		return result;
	}
	
	PolyK.Raycast = function(p, x, y, dx, dy, isc)
	{
		var l = p.length - 2;
		var tp = PolyK._tp;
		var a1 = tp[0], a2 = tp[1], 
		b1 = tp[2], b2 = tp[3], c = tp[4];
		a1.x = x; a1.y = y;
		a2.x = x+dx; a2.y = y+dy;
		
		if(isc==null) isc = {dist:0, edge:0, norm:{x:0, y:0}, refl:{x:0, y:0}};
		isc.dist = Infinity;
		
		for(var i=0; i<l; i+=2)
		{
			b1.x = p[i  ];  b1.y = p[i+1];
			b2.x = p[i+2];  b2.y = p[i+3];
			var nisc = PolyK._RayLineIntersection(a1, a2, b1, b2, c);
			if(nisc) PolyK._updateISC(dx, dy, a1, b1, b2, c, i/2, isc);
		}
		b1.x = b2.x;  b1.y = b2.y;
		b2.x = p[0];  b2.y = p[1];
		var nisc = PolyK._RayLineIntersection(a1, a2, b1, b2, c);
		if(nisc) PolyK._updateISC(dx, dy, a1, b1, b2, c, p.length/2, isc);
		
		return (isc.dist != Infinity) ? isc : null;
	}
	
	PolyK.ClosestEdge = function(p, x, y, isc)
	{
		var l = p.length - 2;
		var tp = PolyK._tp;
		var a1 = tp[0], 
		b1 = tp[2], b2 = tp[3], c = tp[4];
		a1.x = x; a1.y = y;
		
		if(isc==null) isc = {dist:0, edge:0, point:{x:0, y:0}, norm:{x:0, y:0}};
		isc.dist = Infinity;
		
		for(var i=0; i<l; i+=2)
		{
			b1.x = p[i  ];  b1.y = p[i+1];
			b2.x = p[i+2];  b2.y = p[i+3];
			PolyK._pointLineDist(a1, b1, b2, i>>1, isc);
		}
		b1.x = b2.x;  b1.y = b2.y;
		b2.x = p[0];  b2.y = p[1];
		PolyK._pointLineDist(a1, b1, b2, l>>1, isc);
		
		var idst = 1/isc.dist;
		isc.norm.x = (x-isc.point.x)*idst;
		isc.norm.y = (y-isc.point.y)*idst;
		return isc;
	}
	
	PolyK._pointLineDist = function(p, a, b, edge, isc)
	{
		var x = p.x, y = p.y, x1 = a.x, y1 = a.y, x2 = b.x, y2 = b.y;
		
		var A = x - x1;
		var B = y - y1;
		var C = x2 - x1;
		var D = y2 - y1;

		var dot = A * C + B * D;
		var len_sq = C * C + D * D;
		var param = dot / len_sq;

		var xx, yy;

		if (param < 0 || (x1 == x2 && y1 == y2)) {
			xx = x1;
			yy = y1;
		}
		else if (param > 1) {
			xx = x2;
			yy = y2;
		}
		else {
			xx = x1 + param * C;
			yy = y1 + param * D;
		}

		var dx = x - xx;
		var dy = y - yy;
		var dst = Math.sqrt(dx * dx + dy * dy);
		if(dst<isc.dist)
		{
			isc.dist = dst;
			isc.edge = edge;
			isc.point.x = xx;
			isc.point.y = yy;
		}
	}
	
	PolyK._updateISC = function(dx, dy, a1, b1, b2, c, edge, isc)
	{
		var nrl = PolyK._P.dist(a1, c);
		if(nrl<isc.dist)
		{
			var ibl = 1/PolyK._P.dist(b1, b2);
			var nx = -(b2.y-b1.y)*ibl;
			var ny =  (b2.x-b1.x)*ibl;
			var ddot = 2*(dx*nx+dy*ny);
			isc.dist = nrl;
			isc.norm.x = nx;  
			isc.norm.y = ny; 
			isc.refl.x = -ddot*nx+dx;
			isc.refl.y = -ddot*ny+dy;
			isc.edge = edge;
		}
	}
	
	PolyK._getPoints = function(ps, ind0, ind1)
	{
		var n = ps.length;
		var nps = [];
		if(ind1<ind0) ind1 += n;
		for(var i=ind0; i<= ind1; i++) nps.push(ps[i%n]);
		return nps;
	}
	
	PolyK._firstWithFlag = function(ps, ind)
	{
		var n = ps.length;
		while(true)
		{
			ind = (ind+1)%n;
			if(ps[ind].flag) return ind;
		}
	}
	
	PolyK._PointInTriangle = function(px, py, ax, ay, bx, by, cx, cy)
	{
		var v0x = cx-ax;
		var v0y = cy-ay;
		var v1x = bx-ax;
		var v1y = by-ay;
		var v2x = px-ax;
		var v2y = py-ay;
		
		var dot00 = v0x*v0x+v0y*v0y;
		var dot01 = v0x*v1x+v0y*v1y;
		var dot02 = v0x*v2x+v0y*v2y;
		var dot11 = v1x*v1x+v1y*v1y;
		var dot12 = v1x*v2x+v1y*v2y;
		
		var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
		var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
		var v = (dot00 * dot12 - dot01 * dot02) * invDenom;

		// Check if point is in triangle
		return (u >= 0) && (v >= 0) && (u + v < 1);
	}
	
	PolyK._RayLineIntersection = function(a1, a2, b1, b2, c)
	{
		var dax = (a1.x-a2.x), dbx = (b1.x-b2.x);
		var day = (a1.y-a2.y), dby = (b1.y-b2.y);

		var Den = dax*dby - day*dbx;
		if (Den == 0) return null;	// parallel
		
		var A = (a1.x * a2.y - a1.y * a2.x);
		var B = (b1.x * b2.y - b1.y * b2.x);
		
		var I = c;
		var iDen = 1/Den;
		I.x = ( A*dbx - dax*B ) * iDen;
		I.y = ( A*dby - day*B ) * iDen;
		
		if(!PolyK._InRect(I, b1, b2)) return null;
		if((day>0 && I.y>a1.y) || (day<0 && I.y<a1.y)) return null; 
		if((dax>0 && I.x>a1.x) || (dax<0 && I.x<a1.x)) return null; 
		return I;
	}
	
	PolyK._GetLineIntersection = function(a1, a2, b1, b2, c)
	{
		var dax = (a1.x-a2.x), dbx = (b1.x-b2.x);
		var day = (a1.y-a2.y), dby = (b1.y-b2.y);

		var Den = dax*dby - day*dbx;
		if (Den == 0) return null;	// parallel
		
		var A = (a1.x * a2.y - a1.y * a2.x);
		var B = (b1.x * b2.y - b1.y * b2.x);
		
		var I = c;
		I.x = ( A*dbx - dax*B ) / Den;
		I.y = ( A*dby - day*B ) / Den;
		
		if(PolyK._InRect(I, a1, a2) && PolyK._InRect(I, b1, b2)) return I;
		return null;
	}
	
	PolyK._InRect = function(a, b, c)
	{
		if	(b.x == c.x) return (a.y>=Math.min(b.y, c.y) && a.y<=Math.max(b.y, c.y));
		if	(b.y == c.y) return (a.x>=Math.min(b.x, c.x) && a.x<=Math.max(b.x, c.x));
		
		if(a.x >= Math.min(b.x, c.x) && a.x <= Math.max(b.x, c.x)
		&& a.y >= Math.min(b.y, c.y) && a.y <= Math.max(b.y, c.y)) 
		return true;
		return false;
	}
	
	PolyK._convex = function(ax, ay, bx, by, cx, cy)
	{
		return (ay-by)*(cx-bx) + (bx-ax)*(cy-by) >= 0;
	}
		
	PolyK._P = function(x,y)
	{
		this.x = x;
		this.y = y;
		this.flag = false;
	}
	PolyK._P.prototype.toString = function()
	{
		return "Point ["+this.x+", "+this.y+"]";
	}
	PolyK._P.dist = function(a,b)
	{
		var dx = b.x-a.x;
		var dy = b.y-a.y;
		return Math.sqrt(dx*dx + dy*dy);
	}
	
	PolyK._tp = [];
	for(var i=0; i<10; i++) PolyK._tp.push(new PolyK._P(0,0));


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////RECTLIB//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

function rectObj() {

	this.data = undefined;

	this.init = function(win,doc)  {
		this.document = doc;
		this.window = win;
	}
	this.draw = function() {
		this.document.body.appendChild(this.data);
	}
	this.clear = function() {
		try {
			this.document.body.removeChild(this.data);
		} catch(err) {
			//handle
		}
	}
	this.build = function(x,y,w,h,border,background,cont,id) {
		this.data = this.document.createElement('div');
		this.setId(id);
		this.setContent(cont);
		this.move(x,y);
		this.resize(w,h);
		this.rectInit();
		this.applyStyle('border',border);
		this.applyStyle('background',background);
		this.draw();
		return(this);
	}
	this.buildHidden = function(x,y,w,h,border,background,cont,id) {
		this.data = this.document.createElement('div');
		this.setId(id);
		this.setContent(cont);
		this.move(x,y);
		this.resize(w,h);
		this.rectInit();
		this.applyStyle('border',border);
		this.applyStyle('background',background);
		this.applyStyle('display',"none");
		this.draw();
		return(this);
	}
	
	this.deleteRect = function() {
		var ind = this.rects.indexOf(this.data);
		this.document.body.removeChild(this.data);
	}
	
	this.resize = function(w,h) {
		this.data.style.width = w + "px";
		this.data.style.height = h + "px";
	}
	this.move = function(x,y) {
		this.data.style.left = x + "px";
		this.data.style.top = y + "px";
	}
	this.applyStyle = function(selector,sty) {
		if (selector=='border')
			this.data.style.border = sty;
		else {
			this.setOpacity("0.5");
			this.data.style.background = sty;
		}
	}
	this.setOpacity = function(value) {
		this.data.style.opacity = value;
	}
	this.setPosition = function(pos) {
		this.data.style.position=pos;
	}
	this.setClass = function(css) {
		this.data.className=css;
	}
	this.rectInit = function() {
		this.data.style.zIndex = 100000;
		this.data.style.position = "absolute";
		this.data.style.overflow = "scroll";
	}
	this.setContent = function(cont) {
		this.data.innerHTML = cont;
	}
	this.setId = function(id) {
		if (id) 
			this.data.setAttribute("id",id);
		else
			this.data.setAttribute("id","reclib_" + Math.floor((Math.random()*1000)+1));
	}
	this.getRect = function() {
		if (this.data)
			return(this.data.getBoundingClientRect());
	}
	this.hide = function() {
		console.log("eoeoe");
		if (this.data) {
			this.data.style.display = "none";
		}
	}
	this.show = function() {
		if (this.data)
			this.data.style.display = "block";
	}
}



  

 
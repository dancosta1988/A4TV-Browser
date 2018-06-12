
function WebSocketTest()
         {
            if ("WebSocket" in window)
            {
               console.log("WebSocket is supported by your Browser!");
               
               // Let us open a web socket
               var ws = new WebSocket("ws://127.0.0.1:5000/");
				
               ws.onopen = function()
               {
                  // Web Socket is connected, send data using send()
                 
                  console.log("Handshake was successful");
               };
				
               ws.onmessage = function (evt) 
               { 
                  var received_msg = evt.data;
                  console.log("Message received..." + received_msg);
				  var cmd = received_msg.split("=");
				  var keyCode = cmd[1];
				  sendResponse({keycode: keyCode});
				  ws.send("Messagem de teste");
               };
				
               ws.onclose = function()
               { 
                  // websocket is closed.
                  console.log("Connection is closed..."); 
               };
            }
            
            else
            {
               // The browser doesn't support WebSocket
               console.log("WebSocket NOT supported by your Browser!");
            }
         }

function HTTPRequestTest(){
		 //console.log("Recebeu qualquer coisa");
    	console.log(request.dom);	
		//a4tv.sendToMobile(request.dom);
		
		var xhr = new XMLHttpRequest();
		xhr.open('GET', "http://127.0.0.1:5000/index.php?uiml=" + request.dom  , true);
		//xhr.open('GET', "http://127.0.0.1:5000"  , true);
		xhr.send();
		console.log(xhr.getAllResponseHeaders());
		
		xhr.onreadystatechange = function() {
			if (/*xhr.readyState == 4 &&*/ xhr.status == 200) {
				console.log("We got a response from the server: " + xhr.responseText);
				var cmd = xhr.responseText.split("=");
				var keyCode = cmd[1];
				sendResponse({keycode: keyCode});
				
				
			}else{
				console.log("Something gone wrong");
			}
		}
}

	 
//chrome.runtime.onConnect.addListener(

 // function(port) {
  //  port.onMessage.addListener(function(request) {
  

  
 
  
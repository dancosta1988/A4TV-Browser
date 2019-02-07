
const electron = require('electron');
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow


const ipcMain = require('electron').ipcMain;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  
  mainWindow = new BrowserWindow({width: 1280, height: 720, "web-preferences": {preload: __dirname + '/a4tv/content.js'}})
  
  //mainWindow = new BrowserWindow({width: 800, height: 600, preload: __dirname + '/a4tv/content.js'})
  

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/tvapp-main.html`)
  //mainWindow.loadURL('http://apps.tvstore.opera.com/dailymotion/?target_user=RantSports&uid=7351a4e7c0dc11c8a4cb3bb1c76917b898617a36fd65d685c4e74121ab48e8f5xrant-sportsx9cc2de65f343d21555b83e0c2ccd14725834ea8ff8e13254b6985ea0fd22409a#fix')
  
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
  
  
  // Emitted when the window is loaded.
  mainWindow.on('show', function () {
    
    //a4tv = require('./a4tv/content')
  })
  
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
    
  mainWindow.show();
  mainWindow.focusOnWebView();
  
  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.commandLine.appendSwitch("ignore-certificate-errors");
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('sendInputKey', function (e, key) {
	mainWindow.focusOnWebView();
	var newkey ="";
	switch(key.key){
		case "37": newkey = "LEFT";break; //LEFT
		case "38": newkey = "UP";break; //UP
		case "39": newkey = "RIGHT";break; //RIGHT
		case "40": newkey = "DOWN";break; //DOWN
		case "13": newkey = "ENTER";break; //ENTER
		case "8": newkey = "BACKSPACE";break;
		case "19": newkey = "PAUSE";break; 
		case "403": newkey = "RED";break;
		case "404": newkey = "GREEN";break; 
		case "405": newkey = "YELLOW";break; 
		case "406": newkey = "BLUE";break; 
		case "413": newkey = "STOP";break; 
		case "415": newkey = "PLAY";break;
		case "461": newkey = "BACK";break;
		default: newKey = "Unknown";break;
		
		
	}
	
	
	
	mainWindow.show();
	mainWindow.webContents.sendInputEvent({
	  type: "keyDown",
	  keyCode: newkey,
	  which: newkey
	});
		
	
	mainWindow.show();
	
})

ipcMain.on('sendCue', function (e, focused) {
	console.log(focused);
	
	
})

ipcMain.on('debug', function (e, msg) {

	console.log(msg);
    
})




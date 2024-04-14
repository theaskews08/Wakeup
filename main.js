const {app, BrowserWindow} = require('electron');

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

const {ipcMain} = require('electron');
const alarm = require('./alarm.js'); // Assuming alarm.js exposes needed functions

ipcMain.on('create-alarm', (event, arg) => {
    alarm.createAlarm();
});

ipcMain.on('stop-alarm', (event, arg) => {
    alarm.stopAlarm();
});


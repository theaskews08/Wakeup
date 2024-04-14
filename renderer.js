const {ipcRenderer} = require('electron');

window.createAlarm = function () {
    ipcRenderer.send('create-alarm');
}

window.stopAlarm = function () {
    ipcRenderer.send('stop-alarm');
}

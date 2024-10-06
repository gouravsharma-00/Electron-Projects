// JavaScript

const { app, BrowserWindow, ipcMain, Menu }  = require('electron');
const path = require('node:path')

const CreateWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join( __dirname, 'preload.js' )
        },
        icon: path.join(__dirname, 'public', 'icon-app.ico')
    })
    win.loadFile('index.html');
    Menu.setApplicationMenu(null);
}

app.on('ready', () => {  // app.whenReady().then(() => { CreateWindow } ) // for Electron 9 or later
    ipcMain.handle('ping', () => 'pong');
    CreateWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            CreateWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
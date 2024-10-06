// JavaScript

const { contextBridge, ipcRenderer } =  require('electron');

contextBridge.exposeInMainWorld('versions', {
    electron: () => process.versions.electron,
    chrome  : () => process.versions.chrome,
    node    : () => process.versions.node,
    ping    : () => ipcRenderer.invoke('ping')
});
const { contextBridge, ipcRenderer } = require("electron");

console.log("preload js");

contextBridge.exposeInMainWorld("api", {
  goBack: () => ipcRenderer.send("go-back-event"),
  goForward: () => ipcRenderer.send("go-forward-event"),
  minimize: () => ipcRenderer.send("minimize-event"),
  maximize: () => ipcRenderer.send("maximize-event"),
  unmaximize: () => ipcRenderer.send("unmaximize-event"),
  close: () => ipcRenderer.send("close-event"),
  onfocus: (callback) => ipcRenderer.on('focused', callback),
  onBlur: (callback) => ipcRenderer.on('blurred', callback),
  onMaximized: (callback) => ipcRenderer.on('maximized', callback),
  onUnMaximized: (callback) => ipcRenderer.on('unmaximized', callback),
});

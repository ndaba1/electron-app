import { ipcRenderer, contextBridge } from "electron";

contextBridge.exposeInMainWorld("api", {
    tryResize: (args: Array<string>) => ipcRenderer.send("checkResize", args)
})
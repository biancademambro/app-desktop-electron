const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

function criarJanela() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        frame: false, // Remove a barra de título padrão
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    })

    win.loadFile('index.html')

    // Handlers para os controles da janela customizada
    ipcMain.on('window-minimize', () => {
        win.minimize();
    });

    ipcMain.on('window-maximize', () => {
        if (win.isMaximized()) {
            win.restore();
        } else {
            win.maximize();
        }
    });

    ipcMain.on('window-close', () => {
        win.close();
    });
}

app.whenReady().then(criarJanela)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) criarJanela()
})

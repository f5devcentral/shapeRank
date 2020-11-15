const { app, BrowserWindow } = require('electron');

async function createWindow () {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true
    }
  });

  await win.webContents.session.clearCache();
  await win.loadURL(`file:///${__dirname}/primordialsoup/out/web/primordialsoup.html?snapshot=ShapeRankWithIDE.vfuel`);
  // win.webContents.openDevTools();
}

app.whenReady()
  .then(createWindow)
  .then(() => {}, err => console.error(err));

// Don't close the app when all its windows are closed on OSX
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Rebuild the app if all windows are closed and it's activated
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

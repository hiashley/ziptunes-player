const { app, BrowserWindow } = require("electron");

let mainWindow;
let isDragging = false;
let windowPosition = { x: 0, y: 0 };

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 1280,
    minHeight: 720,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: __dirname + "/icon.ico",
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#ffffff",
      symbolColor: "#74b1be",
      height: 30,
    },
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("move", () => {
    const position = mainWindow.getPosition();
    windowPosition.x = position[0];
    windowPosition.y = position[1];
  });

  mainWindow.on("resize", () => {
    const size = mainWindow.getSize();
    mainWindow.webContents.send("window-resized", size);
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");

const userStore = require("./db/stores/userStore");
const saleStore = require("./db/stores/salesStore");
const dishStore = require("./db/stores/dishesStore");
const beverageStore = require("./db/stores/beverageStore");
const liqureStore = require("./db/stores/liqureStore");

global.userStore = userStore;
global.saleStore = saleStore;
global.dishStore = dishStore;
global.beverageStore = beverageStore;
global.liqureStore = liqureStore;

function createWindow() {
  const win = new BrowserWindow({
    show: false,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });

  win.maximize();
  win.show();
  // win.removeMenu();

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// app.setPath(
//   'userData',
//   isDev
//     ? path.join(app.getAppPath(), 'userdata/') // In development it creates the userdata folder where package.json is
//     : path.join(process.resourcesPath, 'userdata/') // In production it creates userdata folder in the resources folder
// );

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

if (isDev) {
  try {
    require("electron-reloader")(module, {
      debug: true,
      watchRenderer: true
    });
  } catch (_) {}
}

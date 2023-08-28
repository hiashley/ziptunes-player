const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  const moveWindowBtn = document.getElementById("moveWindowBtn");
  const windowFrame = document.getElementById("windowFrame");

  moveWindowBtn.addEventListener("click", () => {
    ipcRenderer.send("move-window");
  });

  windowFrame.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      ipcRenderer.send("start-dragging");
    }
  });

  window.addEventListener("mouseup", () => {
    ipcRenderer.send("stop-dragging");
  });

  window.addEventListener("mousemove", (e) => {
    ipcRenderer.send("dragging", { x: e.screenX, y: e.screenY });
  });
});

ipcRenderer.on("window-resized", (event, size) => {
  const contentHeight = window.innerHeight - 30;
  document.getElementById("content").style.height = contentHeight + "px";
});

// Var
const getCanvas = document.querySelector("#draw");
const getContext = getCanvas.getContext("2d");
const getInput = document.querySelector("#pickColor");
const getSize = document.querySelector("#size");
const getButton = document.querySelector(".buttonBorrar");

// Witdh & Height
getCanvas.width = window.innerWidth;
getCanvas.height = window.innerHeight;

// Color
getContext.strokeStyle = "#BADA55";
getContext.lineWidth = getSize.value;
getContext.lineJoin = "round";
getContext.lineCap = "round";

// Start instance
let mouseUse = false;
let lastX = 0;
let lastY = 0;
let hue = getInput.value;

// Draw function
const getDraw = (e) => {
  if (!mouseUse) return;
  getContext.strokeStyle = hue;
  getContext.beginPath();
  getContext.moveTo(lastX, lastY);
  getContext.lineTo(e.offsetX, e.offsetY);
  getContext.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY]; // update lastX & lastY
};

// Choose color
getInput.addEventListener("input", (e) => {
  hue = e.target.value;
});

// Pen size
getSize.addEventListener("input", (e) => {
  getContext.lineWidth = e.target.value;
});

// Mouse down, up, move and out
getCanvas.addEventListener("mousedown", (e) => {
  mouseUse = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
getCanvas.addEventListener("mousemove", getDraw);
getCanvas.addEventListener("mouseup", () => (mouseUse = false));
getCanvas.addEventListener("mouseout", () => (mouseUse = false));

// Borrar canvas
getButton.addEventListener("click", () =>
  getContext.clearRect(0, 0, getCanvas.width, getCanvas.height)
);

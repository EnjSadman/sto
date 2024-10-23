//import fetchData from "./functions/fetch";

import { CustomCanvas } from "./components/CustomCanvas";

const canvasContainer : HTMLElement | null = document.getElementById('canvasContainer');

if (canvasContainer) {
  const newCanvas = new CustomCanvas(400, 500)
  canvasContainer.appendChild(newCanvas.returnCanvas())
}
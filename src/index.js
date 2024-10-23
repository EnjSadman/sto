"use strict";
//import fetchData from "./functions/fetch";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomCanvas_1 = require("./components/CustomCanvas");
const canvasContainer = document.getElementById('canvasContainer');
if (canvasContainer) {
    const newCanvas = new CustomCanvas_1.CustomCanvas(400, 500);
    canvasContainer.appendChild(newCanvas.returnCanvas());
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCanvas = void 0;
class CustomCanvas {
    constructor(width, height) {
        this.cameraZoom = 1;
        this.MAX_ZOOM = 5;
        this.MIN_ZOOM = 0.1;
        this.SCROLL_SENSITIVITY = 0.0005;
        this.width = width;
        this.height = height;
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.cameraOffset = { x: width / 2, y: height / 2 };
    }
    initialDraw() {
        if (this.ctx) {
            this.ctx.translate(this.width / 2, this.height / 2);
            this.ctx.scale(this.cameraZoom, this.cameraZoom);
            this.ctx.translate(-this.width / 2 + this.cameraOffset.x, -this.height / 2 + this.cameraOffset.y);
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.fillStyle = "#991111";
            this.drawRect(-50, -50, 100, 100);
        }
    }
    drawRect(x, y, width, height) {
        if (this.ctx) {
            this.ctx.fillRect(x, y, width, height);
        }
    }
    drawDateRuler(length) {
    }
    returnCanvas() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.initialDraw();
        return (this.canvas);
    }
}
exports.CustomCanvas = CustomCanvas;

export class CustomCanvas {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  cameraZoom: number = 1;
  MAX_ZOOM: number = 5;
  MIN_ZOOM: number = 0.1;
  SCROLL_SENSITIVITY: number = 0.0005;
  cameraOffset: {x: number, y: number};
  ctx: CanvasRenderingContext2D | null;

  constructor(
    width: number,
    height: number
  ) {
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.cameraOffset = {x: width / 2, y: height / 2}
  }
  

  initialDraw() {
    if (this.ctx) {
      this.ctx.translate(this.width / 2, this.height / 2)
      this.ctx.scale(this.cameraZoom, this.cameraZoom);
      this.ctx.translate(-this.width / 2 + this.cameraOffset.x, -this.height / 2 + this.cameraOffset.y)
      this.ctx.clearRect(0,0, this.width, this.height);
      this.ctx.fillStyle = "#991111"
      this.drawRect(-50,-50,100,100)
    }
  }

  drawRect(x : number, y : number, width : number, height: number) {
    if (this.ctx) {
      this.ctx.fillRect( x, y, width, height )
      }
  }

  drawDateRuler(length: number) {
    
  }



  returnCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.initialDraw();

    return(this.canvas);
  }


}
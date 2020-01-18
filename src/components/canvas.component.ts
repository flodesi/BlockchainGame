import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import { Penguin } from "./penguin";

@Component({
  selector: "canvas-component",
  template: `
    <canvas #canvas width="800" height="480"></canvas>
    <button (click)="play()">Play</button>
  `,
  styles: ["canvas { border-style: solid }"]
})
export class CanvasComponent {
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId;
  interval;
  squares: Penguin[] = [];

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext("2d");
    this.ctx.fillStyle = "red";
    this.ngZone.runOutsideAngular(() => this.tick());
    setInterval(() => {
      this.tick();
    }, 200);
  }

  tick() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.squares.forEach((square: Penguin) => {
      square.moveRight();
    });
    this.requestId = requestAnimationFrame(() => this.tick);
  }

  play() {
    const square = new Penguin(this.ctx);
    this.squares = this.squares.concat(square);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.requestId);
  }
}

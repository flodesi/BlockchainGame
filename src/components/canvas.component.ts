import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import { Penguin } from "./penguin";

var numTimes = 0;

@Component({
  selector: "canvas-component",
  template: `
    <canvas #canvas width="750" height="400"></canvas>
    <button (click)="play()">Generate</button>
    <button (click)="update()">Update</button>
  `,
  styles: [
    "canvas { border-width: 3px; border-style: double; border-color: #1C6EA4; }"
  ]
})
export class CanvasComponent {
  @ViewChild("canvas", { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId;
  interval;
  penguins: Penguin[] = [];

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
    this.penguins.forEach((penguin: Penguin) => {
      penguin.move();
    });
    this.requestId = requestAnimationFrame(() => this.tick);
  }

  play() {
    if (numTimes == 0) {
      var penguin = new Penguin(this.ctx, 3); // Red
    } else if (numTimes == 1) {
      var penguin = new Penguin(this.ctx, 5); // Green
    } else {
      var num = Math.floor(Math.random()*10);
      var penguin = new Penguin(this.ctx, num);
    }
    this.penguins = this.penguins.concat(penguin);
    numTimes++;
  }

  update() {
    var penguin = new Penguin(this.ctx, 6); // Rainbow
    this.penguins = this.penguins.concat(penguin);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.requestId);
  }
}

export class Penguin {
<<<<<<< HEAD
  public image = new Image(50, 50);
  private color = 'red';
=======
  private image = new Image(50, 50);
  private color = "red";
>>>>>>> 964b372763c90f6371793a6b7f00112f4d8840c1
  private x = Math.random() * 800;
  private y = Math.random() * 480;

  constructor(private ctx: CanvasRenderingContext2D) {
    this.image.src = "../assets/img/base_penguin.png";
  }

  move() {
    let randH = Math.random();
    let randV = Math.random();
    let randB = Math.random();
    if (randH < 0.1) {
      this.moveRight();
    }
    if (randH > 0.9) {
      this.moveLeft();
    }
    if (randV > 0.1) {
      this.moveUp();
    }
    if (randV < 0.9) {
      this.moveDown();
    }
    if (randB < 0.1) {
      this.blink();
    } else {
      this.unblink();
    }
    this.draw();
  }

  private moveUp() {
    this.y = this.y + 5;
  }

  private moveDown() {
    this.y = this.y - 5;
  }

  private moveLeft() {
    this.x = this.x - 5;
  }

  private moveRight() {
    this.x = this.x + 5;
  }

  private blink() {
    this.image.src = "../assets/img/base_penguin_blinking.png";
  }
  private unblink() {
    this.image.src = "../assets/img/base_penguin.png";
  }

  private draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
  }

<<<<<<< HEAD
  private flip(){
    
  }
}
=======
  private flip() {}
}
>>>>>>> 964b372763c90f6371793a6b7f00112f4d8840c1

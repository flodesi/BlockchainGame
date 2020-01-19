export class Penguin {
  public image = new Image(50, 50);
  private color = "red";
  private x = Math.random() * 750;
  private y = Math.random() * 400;

  constructor(private ctx: CanvasRenderingContext2D, private idNum) {
    this.unblink();
  }

  private assign() {
    switch (this.idNum) {
      case 0: {
        this.image.src = "../assets/img/base_penguin_blinking.png";
        break;
      }
      case 1: {
        this.image.src = "../assets/img/grey_penguin_blinking.png";
        break;
      }
      case 2: {
        this.image.src = "../assets/img/blue_penguin_blinking.png";
        break;
      }
      case 3: {
        this.image.src = "../assets/img/red_penguin_blinking.png";
        break;
      }
      case 4: {
        this.image.src = "../assets/img/orange_penguin_blinking.png";
        break;
      }
      case 5: {
        this.image.src = "../assets/img/green_penguin_blinking.png";
        break;
      }
      case 6: {
        this.image.src = "../assets/img/rainbow_penguin_blinking.png";
      }
    }
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
      this.assign();
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

  private unblink() {
    switch (this.idNum) {
      case 0: {
        this.image.src = "../assets/img/base_penguin.png";
        break;
      }
      case 1: {
        this.image.src = "../assets/img/grey_penguin.png";
        break;
      }
      case 2: {
        this.image.src = "../assets/img/blue_penguin.png";
        break;
      }
      case 3: {
        this.image.src = "../assets/img/red_penguin.png";
        break;
      }
      case 4: {
        this.image.src = "../assets/img/orange_penguin.png";
        break;
      }
      case 5: {
        this.image.src = "../assets/img/green_penguin.png";
        break;
      }
      case 6: {
        this.image.src = "../assets/img/rainbow_penguin.png";
      }
    }
  }

  private draw() {
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  private flip() {}
}

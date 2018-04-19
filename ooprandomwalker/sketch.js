let myWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myWalker = new Walker();
}

function draw() {
  myWalker.move();
  myWalker.display();

}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.speed = 10;
    this.direction = floor(random(4));
  }

  display() {
    stroke(random(255),random(255),random(255));
    ellipse(this.x, this.y, 10);
  }

  move() {
    this.direction = floor(random(4));
    if (this.direction === 0) {
      this.x += this.speed;
    }
    else if (this.direction === 1) {
      this.x -= this.speed;
    }
    else if (this.direction === 2) {
      this.y += this.speed;
    }
    else {
      this.y -= this.speed;
    }
  }
}

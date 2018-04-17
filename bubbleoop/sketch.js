let myBubble;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBubble = new Bubble();
}

function draw() {
  background(255);
  ellipse(myBubble.x, myBubble.y, myBubble.radius);
  myBubble.rise();
}

class Bubble {
  constructor() {
    this.y = height;
    this.x = random(width);
    this.radius = 100;
    this.ySpeed = -3;
    this.xSpeed = 4;
  }

  rise() {
    if (this.y > 0){
      this.y += this.ySpeed;
    }

    this.x += random(-this.xSpeed, this.xSpeed);
  }
}

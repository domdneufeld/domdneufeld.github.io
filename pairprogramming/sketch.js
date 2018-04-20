let myPaddle;
let myBall;

function setup() {
  createCanvas(windowHeight, windowHeight);
  myPaddle = new Paddle();
  myBall = new Ball();

}

function draw() {
  background(0);

  myPaddle.display();
  myPaddle.move();

  myBall.display();
  myBall.move();
}

class Paddle {
  constructor() {
    // Display variables
    this.x = width / 2;
    this.y = height - height / 8;
    this.width = width / 8;
    this.segments = [0,1,2,3,4,5,];
    this.height = width / 32;
    this.segmentx = [0,1,2,3,4,5,];

    // Movement variables
    this.speed = 5;
    this.direction = 0;
    this.left = false;
    this.right = false;
  }

  display() {
    fill(255);
    rectMode(CENTER);
    // Constantly checks where each segment of the paddle is
    for (let i = 0; i < this.segments.length; i++){
      this.segmentx[i] = this.x - this.width / 2 + this.width / 6 * (i + 0.5);
    }
    // Draws the paddle
    rect(this.x, this.y, this.width, this.height);
  }

  move() {
    if (this.left && this.right) {
      this.direction = 0;
    }
    // Checks if the left arrow key is down and if the paddle is going to collide with the edge
    else if (this.left && this.x - this.width / 2 - this.speed > 0) {
      this.direction = -1;
    }
    // Checks if the right arrow key is down and if the paddle is going to collide with the edge
    else if (this.right && this.x + this.width / 2 + this.speed < width) {
      this.direction = 1;
    }
    else {
      this.direction = 0;
    }

    // Moves the paddle
    this.x += this.speed * this.direction;
  }
}



class Ball {
  constructor(){
    // Display variables
    this.x = width / 2;
    this.y = 100;
    this.radius = 25;

    // Movement variables
    this.ySpeed = 4;
    this.xSpeed = 4;
    this.xDirection = 1;
    this.yDirection = 1;
  }

  display(){
    fill(255);
    noStroke();
    ellipseMode(CENTER);
    ellipse(this.x,this.y,this.radius,this.radius);
  }

  move(){
    // Collisions on edges
    if (this.x + this.xDirection * this.xSpeed <= 0 || this.x + this.xDirection * this.xSpeed >= width) {
      this.xDirection = -this.xDirection;
    }

    // Collisions on top
    if (this.y + this.yDirection * this.ySpeed <= 0) {
      this.yDirection = -this.yDirection;
    }

    // Checks to see if the paddle is about to hit the left most segment of the paddle
    if (this.y + this.radius + this.ySpeed >= myPaddle.y && this.x < myPaddle.segmentx[0] + myPaddle.width / 16
      && this.x > myPaddle.segmentx[0] - myPaddle.width / 16){
      // Checks to see if ball is currently touching the section of the paddle, and makes sure it isn't hitting on the way up
      if (this.y < myPaddle.y && this.yDirection > 0){
        this.yDirection = -this.yDirection;
        this.xDirection = -1;
      }
    }

    // Checks to see if the paddle is about to hit the second left most segment of the paddle
    if (this.y + this.radius + this.ySpeed >= myPaddle.y && this.x < myPaddle.segmentx[1] + myPaddle.width / 16
      && this.x > myPaddle.segmentx[1] - myPaddle.width / 16){
      // Checks to see if ball is currently touching the section of the paddle, and makes sure it isn't hitting on the way up
      if (this.y < myPaddle.y && this.yDirection > 0){
        this.yDirection = -this.yDirection;
        this.xDirection = -0.67;
      }
    }

    // Checks to see if the paddle is about to hit the left middle segment of the paddle
    if (this.y + this.radius + this.ySpeed >= myPaddle.y && this.x < myPaddle.segmentx[2] + myPaddle.width / 16
      && this.x > myPaddle.segmentx[2] - myPaddle.width / 16){
      // Checks to see if ball is currently touching the section of the paddle, and makes sure it isn't hitting on the way up
      if (this.y < myPaddle.y && this.yDirection > 0){
        this.yDirection = -this.yDirection;
        this.xDirection = -0.33;
      }
    }

    // Checks to see if the paddle is about to hit the right middle segment of the paddle
    if (this.y + this.radius + this.ySpeed >= myPaddle.y && this.x < myPaddle.segmentx[3] + myPaddle.width / 16
      && this.x > myPaddle.segmentx[3] - myPaddle.width / 16){
      // Checks to see if ball is currently touching the section of the paddle, and makes sure it isn't hitting on the way up
      if (this.y < myPaddle.y && this.yDirection > 0){
        this.yDirection = -this.yDirection;
        this.xDirection = 0.33;
      }
    }

    // Checks to see if the paddle is about to hit the second right most segment of the paddle
    if (this.y + this.radius + this.ySpeed >= myPaddle.y && this.x < myPaddle.segmentx[4] + myPaddle.width / 16
      && this.x > myPaddle.segmentx[4] - myPaddle.width / 16){
      // Checks to see if ball is currently touching the section of the paddle, and makes sure it isn't hitting on the way up
      if (this.y < myPaddle.y && this.yDirection > 0){
        this.yDirection = -this.yDirection;
        this.xDirection = 0.67;
      }
    }

    // Checks to see if the paddle is about to hit the right most segment of the paddle
    if (this.y + this.radius + this.ySpeed >= myPaddle.y && this.x < myPaddle.segmentx[5] + myPaddle.width / 16
      && this.x > myPaddle.segmentx[5] - myPaddle.width / 16){
      // Checks to see if ball is currently touching the section of the paddle, and makes sure it isn't hitting on the way up
      if (this.y < myPaddle.y && this.yDirection > 0){
        this.yDirection = -this.yDirection;
        this.xDirection = 1;
      }
    }

    // Moves the ball
    this.x += this.xDirection * this.xSpeed;
    this.y += this.yDirection * this.ySpeed;
  }
}

function keyPressed() {
  // Checks to see if left arrow is pressed or if right arrow is pressed
  if (keyCode === LEFT_ARROW) {
    myPaddle.left = true;
  }

  if (keyCode === RIGHT_ARROW) {
    myPaddle.right = true;
  }
}

function keyReleased() {
  // Checks to see if left arrow is released or if right arrow is released
  if (keyCode === LEFT_ARROW) {
    myPaddle.left = false;
  }

  if (keyCode === RIGHT_ARROW) {
    myPaddle.right = false;
  }
}

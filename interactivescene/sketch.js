// Interactive Scene
// Domenic Neufeld
// February 9th, 2018


// Global Variables
let xSpeed = 0;
let ySpeed = 0;
let x = 1000;
let y = 250;

function setup() {
  createCanvas(windowWidth - 20, windowHeight);
}

function draw() {
  background(255);

  x = x + xSpeed
  
  if (keyIsDown(RIGHT_ARROW)) {
    xSpeed = 5;
  } else if (keyIsDown(LEFT_ARROW)) {
    xSpeed = -5;
  } else {
    xSpeed = 0;
  }

  drawSphere(x, y);
}

function drawSphere(x, y) {
  fill(0, 0, 255);
  ellipse(x, y, 100, 100);
}

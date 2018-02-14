// Interactive Scene
// Domenic Neufeld
// February 9th, 2018


// Global Variables
let sphereX;
let sphereY;

let movingLeft;
let movingRight;

let colour;

let sphereSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sphereX = width / 2;
  sphereY = 650;
}

function draw() {
  background(255);
  // Constrains movement of the sphere
  sphereX = constrain(sphereX,175,1425);

  // Moves the sphere to left and right
  if (movingLeft) {
    sphereX -= 5;
  }
  if (movingRight) {
    sphereX += 5;
  }

  changeColour(sphereX);
  drawSphere(sphereX, sphereY, colour);
}

function drawSphere(x, y, colour) {
  // draws the sphere which displays the colour selected
  fill(abs(colour - 250), 0, colour);
  ellipse(x, y, sphereSize, sphereSize);
}

function keyPressed() {
  if (key === "a" || key === "A") {
    movingLeft = true;
  }
  if (key === "d" || key === "D") {
    movingRight = true;
  }
}

function keyReleased() {
  if (key === "a" || key === "A") {
    movingLeft = false;
  }
  if (key === "d" || key === "D") {
    movingRight = false;
  }
}



function changeColour(sphereX) {
  //middle of the screen is 800.
  // right max makes colour 0 and left max makes colour 250
  colour = (1425 - sphereX)/5
}

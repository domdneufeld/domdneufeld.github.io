// Interactive Scene
// Domenic Neufeld
// February 9th, 2018


// Global Variables
let sphereX;
let sphereY;

let movingLeft;
let movingRight;

let colour;

let shapeChoice;

let sphereSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sphereX = width / 2;
  sphereY = 700;
}

function draw() {
  // Constrains movement of the sphere
  sphereX = constrain(sphereX, 175, 1425);

  // Moves the sphere to left and right
  if (movingLeft) {
    sphereX -= 5;
  }
  if (movingRight) {
    sphereX += 5;
  }

  // makes background over colour slider black
  fill(0);
  rect(0, 620, width, 880)

  changeColour(sphereX);
  drawSphere(sphereX, sphereY, colour);
  if (mouseIsPressed) {
    drawRandomShape(mouseX, mouseY, colour);
  }
}

function drawSphere(x, y, colour) {
  // draws the sphere which displays the colour selected
  fill(abs(colour - 250), 0, colour);
  ellipse(x, y, sphereSize, sphereSize);
}

function keyPressed() {
  // recognizes when left or right arrows are down
  if (key === "a" || key === "A") {
    movingLeft = true;
  }
  if (key === "d" || key === "D") {
    movingRight = true;
  }
}

function keyReleased() {
  // recognizes when left or right arrows are released
  if (key === "a" || key === "A") {
    movingLeft = false;
  }
  if (key === "d" || key === "D") {
    movingRight = false;
  }
}



function changeColour(sphereX) {
  //middle of the screen is 800.
  //right max makes colour 0 and left max makes colour 250
  //divided by five because the ball moves in intervals of 5
  colour = (1425 - sphereX) / 5
}

function drawRandomShape(x, y, colour) {
  y = constrain(y, 0, 500)
  shapeChoice = random(2,5)

  if (shapeChoice === 3) {
  fill(abs(colour - 250), 0, colour);
  triangle(x, y, x + random(10, 100), y + random(0, 10), x + random(20, 120), y + random(20, 120));
  }
}

// Interactive Scene
// Domenic Neufeld
// February 9th, 2018

// Extra for experts: Used the random function to draw randomly created triangles and
// rectangles depending on which half of the screen you click


// Global Variables
let sphereX;
let sphereY;

let movingLeft;
let movingRight;

let colour;

let sphereSize = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sphereX = width / 2;
  sphereY = height - 100;
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
  rect(0, height - 200, width, height - 200)

  //colour slider
  changeColour(sphereX);
  drawSphere(sphereX, sphereY, colour);

  // draws random triangle
  if (mouseIsPressed) {
    drawRandomShape(mouseX, mouseY, colour);
  }

  //Instructions
  fill(0)
  textSize(16)
  text("Press 'a' and 'd' to control colour, and click to draw shapes.",5,15)
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
  colour = (1425 - sphereX) / 5;
}

function drawRandomShape(x, y, colour) {
  y = constrain(y, 0, height - 320);

  if (x < width / 2) {
    fill(abs(colour - 250), 0, colour);
    triangle(x, y, x + random(10, 100), y + random(0, 10), x + random(20, 120), y + random(20, 120));
  }
  else {
    fill(abs(colour - 250), 0, colour);
    rect(x, y, random(10, 120), random(10, 120))
  }
}

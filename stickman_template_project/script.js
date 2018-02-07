
//global variables
let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(255);

  drawStickman(mouseX + 75, mouseY - 50);
  drawStickman(x, y);
}

function keyPressed() {
  if (key === 'w' || key === 'W') {
    y = y - 10;
  }
  if (key === 's' || key === 'S') {
    y = y + 10;
  }
  if (key === 'a' || key === 'A') {
    x = x - 10;
  }
  if (key === 'd' || key === 'D') {
    x = x + 10;
  }
}

function drawStickman(x, y) {
  //Draw head
  noFill();
  ellipse(x - 75, y - 75, 100, 100);

  //Draw hat
  fill(0, 0, 255);
  rect(x - 100, y - 200, 50, 100);
  rect(x - 150, y - 150, 150, 50);

  //Draw body
  line(x - 75, y - 25, x - 75, y + 150);

  //Draw legs
  line(x - 75, y + 150, x - 125, y + 200);
  line(x - 75, y + 150, x - 25, y + 200);

  //Draw arms
  line(x - 135, y + 50, x - 15, y + 50);
}

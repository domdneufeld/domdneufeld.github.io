// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawSquares();
  drawCircles();
}

function drawSquares() {
  if (mouseX < width / 2) {
    fill(random(255));
    rect(random(width), random(height), random(40, 200), random(40, 200));
  }
}

function drawCircles() {
  if (mouseX > width / 2) {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), 100, 100);
  }
}

// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  displayDots();
}

function displayDots() {
  let pointSpacing = 100;
  for (let x = pointSpacing; x < width; x += pointSpacing) {
    for (let y = pointSpacing; y < height; y += pointSpacing) {
      fill(255);
      ellipse(x, y, 4, 4);
      stroke(255, 120);
      line(x, y, mouseX, mouseY);
    }
  }
}

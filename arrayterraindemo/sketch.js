let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
}

function generateInitialTerrain(numberOfRectangles) {
  for (let i = 0; i < numberOfRectangles; i++) {
    heights.push(random(100, 500));
  }
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);

  for(let i = 0; i < numberOfRectangles; i++){
    stroke(random(255),random(255),random(255));
    rect(i * rectWidth, height, (i+1) * rectWidth, height - heights[i]);
  }
}

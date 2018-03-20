let heights = [];
let numberOfRectangles;
let maxHeight;
let x;

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
  let time = 0;
  let dt = 0.002;
  maxHeight = 0;


  for (let i = 0; i < numberOfRectangles; i++) {
    let currentHeight = noise(time)*750;
    heights.push(currentHeight);
    time += dt;

    if (currentHeight > maxHeight){
      maxHeight = currentHeight;
      x = i;
    }
  }
}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);

  for (let i = 0; i < numberOfRectangles; i++) {
    stroke(0);
    rect(i * rectWidth, height, (i + 1) * rectWidth, height - heights[i]);
  }
  fill(255,0,0);
  ellipse(x,height - maxHeight,10);
}

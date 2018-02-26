// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
let x = 0;
let y = 0;
let speed = 0.1;

let squareSize = 50;

let right = true;
let down = false;
let left = false;
let up = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  findDir();
  moveRectangle();
  drawRectangle(x, y);

  print(x);
  print(y);
}

function drawRectangle(x, y) {
  fill(0);
  rect(x, y, squareSize, squareSize);
}

function moveRectangle() {
  if (right) {
    x = x + speed;
  }

  if (down) {
    y = y + speed;
  }

  if (left) {
    x = x - speed;
  }

  if (up) {
    y = y - speed;
  }
}

function findDir(){
  if (right && x + speed > windowWidth - squareSize){
    right = false;
    down = true;
    x = windowWidth - squareSize;
  }

  if (down && y + speed > windowHeight - squareSize){
    down = false;
    left = true;
    y = windowHeight - squareSize;
  }

  if (left && x + speed < 0){
    left = false;
    up = true;
    x = 0;
  }

  if (up && y + speed < 0){
    up = false;
    right = true;
    y = 0;
  }
}

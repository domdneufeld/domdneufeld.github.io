// Chessboard
// Dan Schellenberg
// Mar 2, 2018

let boxSize;
let isFilled;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  boxSize = width / 8;
  isFilled = false;
}

function draw() {
  background(255);
  drawBoard();
}

function drawBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (isFilled) {
        fill(210,180,140);
      }
      else {
        fill(255,222,173);
      }
      rect(boxSize * j, boxSize * i, boxSize, boxSize);
      isFilled = !isFilled;
    }
    isFilled = !isFilled; //fix for the next row
  }
}









function drawOutline() {
  fill(0);
  rect(0, 0, width, borderSize);
  rect(0, 0, borderSize, height);
  rect(width - borderSize, 0, width, height);
  rect(0, height - borderSize, width, height);
}

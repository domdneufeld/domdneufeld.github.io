let boxSize;
let grid; //0 = blank; 1 = red; 2 = yellow;
let boardWidth = 7;
let boardHeight = 6;

let redTurn = true;

let yellowWin = false;
let redWin = false;

let horizontal, vertical, diagonalPos, diagonalNeg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  boxSize = 100;
  grid = createEmpty2dArray();
}

function draw() {
  background(255);
  drawGrid();
  checkForWin();
}

function drawGrid() {
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      fill(0);
      rect(boxSize * j, boxSize * i, boxSize, boxSize);
      if (grid[i][j] === 0) {
        fill(255);
      }
      else if (grid[i][j] === 1) {
        fill(255, 0, 0);
      }
      else {
        fill(255, 255, 0);
      }
      ellipse(boxSize * j + boxSize / 2, boxSize * i + boxSize / 2, boxSize);
      checkForWin(i,j);
    }
  }
}

function createEmpty2dArray() {
  let emptyGrid = [];
  for (let x = 0; x < boardHeight; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < boardWidth; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function mousePressed() {
  let xcoord = floor(mouseX / boxSize);
  for (let i = 6; i > 0; i--) {
    if (grid[i - 1][xcoord] === 0) {
      if (redTurn) {
        grid[i - 1][xcoord] = 1;
      }
      else {
        grid[i - 1][xcoord] = 2;
      }
      redTurn = !redTurn;
      return grid;
    }
  }
}

function checkForWin(x,y) {

}

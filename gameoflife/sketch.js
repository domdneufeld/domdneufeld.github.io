// grid demo
// Dan Schellenberg
// Mar 26, 2018

let rows = 75;
let cols = 75;
let grid;
let cellSize;
let autoPlay;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
  autoPlay = false;
}

function draw() {
  background(255);
  autoPlayIfRequired();
  displayGrid();
}

function autoPlayIfRequired() {
  if (autoPlay && frameCount % 10 === 0) {
    nextTurn();
  }
}

function nextTurn() {
  let next = createEmpty2dArray(cols, rows);
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {

      let neighbors = 0;
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          // don't break on the edges
          if (x+i >= 0  && x+i < cols && y+j >= 0 && y+j < rows) {
            neighbors += grid[x+i][y+j];
          }
        }
      }
      neighbors -= grid[x][y];

      // apply the "rules" of the game
      if (grid[x][y] === 1) {  // currently alive
        if (neighbors === 2 || neighbors === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
      else {  // currently dead
        if (neighbors === 3) {
          next[x][y] = 1;
        }
        else {
          next[x][y] = 0;
        }
      }
    }
  }
  grid = next;
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  let xcoord = floor(mouseX / cellSize);
  let ycoord = floor(mouseY / cellSize);

  if (grid[xcoord][ycoord] === 1) {
    grid[xcoord][ycoord] = 0;
  }
  else {
    grid[xcoord][ycoord] = 1;
  }
}

function keyPressed() {
  if (key === "r" || key === "R") {
    grid = createRandom2dArray(cols, rows);
  }
  else if (key === " ") {
    nextTurn();
  }
  else if (key === "c" || key === "C") {
    grid = createEmpty2dArray(cols, rows);
  }
  else if (key === "a" || key === "A") {
    autoPlay = !autoPlay;
  }
}

function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      if (random(100) < 50) {
        randomGrid[x].push(0);
      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

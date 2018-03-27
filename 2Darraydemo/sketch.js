let rows = 50;
let columns = 50;
let cellSize;
let grid;

let mx;
let my;

function setup() {
  createCanvas(600, 600);
  cellSize = width / columns;
  grid = createRandom2dArray(columns, rows);
}

function draw() {
  background(255);
  displayGrid();
  createRandom2dArray();
}

function displayGrid() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function keyPressed(){
  grid = createRandom2dArray(columns, rows);
}

function createRandom2dArray(columns, rows) {
  let randomGrid = [];
  for (let x = 0; x < columns; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
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

function mousePressed(){
  // mx = (mouseX - mouseX % cellSize) / cellSize;
  // my = (mouseY - mouseY % cellSize) / cellSize;
  // or
  mx = floor(mouseX / cellSize);
  my = floor(mouseY / cellSize);
  if (grid[mx][my] === 1){
    grid[mx][my] = 0;
  }
  else{
    grid[mx][my] = 1;
  }
}

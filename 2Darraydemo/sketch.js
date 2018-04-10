let rows = 50;
let columns = 50;
let cellSize;
let grid;

let mx;
let my;

let autoPlay = false;

function setup() {
  createCanvas(windowHeight, windowHeight);
  cellSize = width / columns;
  grid = createRandom2dArray(columns, rows);
}

function draw() {
  background(255);
  displayGrid();
  // autoPlayIfRequired();
  createRandom2dArray();
}

// function autoPlayIfRequired(){
//   if (autoPlay && ){
//
//   }
//
// }

function nextTurn(){
  let next = createEmpty2Darray(columns,rows);
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {

      let neighbors = 0;
      for(let i = -1; i <= 1; i++){
        for(let j = -1; j <= 1; j++){
          // don't get hecked by the edges
          if (x + i >= 0 && x + i < columns && y + j >= 0 && y + j < rows){
            neighbors += grid[x + i][y + j];
          }
        }
      }
      neighbors -= grid[x][y];

      // Apply the rules of the game.
      if (grid[x][y] === 1){
        if (neighbors === 2 || neighbors === 3){
          next[x][y] = 1;
        }
        else{
          next[x][y] = 0;
        }
      }
      else{
        if (neighbors === 3){
          next[x][y] = 1;
        }
        else{
          next[x][y] = 0;
        }
      }
    }
  }
  grid = next;
}

function displayGrid() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function keyPressed(){
  if (key === "r"|| key === "R"){
    grid = createRandom2dArray(columns, rows);
  }
  if (key === "c"|| key === "C"){
    grid = createEmpty2Darray(columns,rows);
  }
  // if(key === "a")
  else if (key === " "){
    nextTurn();
  }
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

function createEmpty2Darray(columns, rows) {
  let randomGrid = [];
  for (let x = 0; x < columns; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
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

let boxSize;
let grid; //0 = blank; 1 = red; 2 = yellow;
let boardWidth = 7;
let boardHeight = 6;

let redTurn = true;

let yellowWin = false;
let redWin = false;

let horizontalTally, verticalTally, dnTally, dpTally; //dp = diagonal positive slope, dn = diagonal negative slope

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
    }
  }
}

function createEmpty2dArray() {
  let emptyGrid = [];
  for (let y = 0; y < boardHeight; y++) {
    emptyGrid.push([]);
    for (let x = 0; x < boardWidth; x++) {
      emptyGrid[y].push(0);
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

function horizontalWin() {
  let previousHorValue = 0;
  let currentHorValue = 0;
  horizontalTally = 1;
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      currentHorValue = grid[i][j];
      if (currentHorValue === previousHorValue && currentHorValue !== 0) {
        horizontalTally += 1;
      }
      else {
        horizontalTally = 1;
      }
      if (horizontalTally === 4 && previousHorValue === 2) {
        return yellowWin = true;
      }
      else if (horizontalTally === 4 && previousHorValue === 1) {
        return redWin = true;
      }
      previousHorValue = currentHorValue;
    }
  }
}

function verticalWin() {
  let previousVertValue = 0;
  let currentVertValue = 0;
  verticalTally = 1;
  for (let j = 0; j < boardWidth; j++) {
    for (let i = 0; i < boardHeight; i++) {
      currentVertValue = grid[i][j];
      if (currentVertValue === previousVertValue && currentVertValue !== 0) {
        verticalTally += 1;
      }
      else {
        verticalTally = 1;
      }
      if (verticalTally === 4 && previousVertValue === 2) {
        return yellowWin = true;
      }
      else if (verticalTally === 4 && previousVertValue === 1) {
        return redWin = true;
      }
      previousVertValue = currentVertValue;
    }
  }
}

function diagonalNegWin() {
  let previousDNValue = 0;
  let currentDNValue = 0;
  dnTally = 1;
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      previousDNValue = 0;
      for (let x = 0; x < 4; x++) {
        if (i + x < boardHeight && j + x < boardWidth){
          currentDNValue = grid[i + x][j + x];
        }
        else{
          currentDNValue = 0;
        }
        if (currentDNValue === previousDNValue && currentDNValue !== 0) {
          dnTally += 1;
        }
        else {
          dnTally = 1;
        }
        if (dnTally === 4 && previousDNValue === 2) {
          return yellowWin = true;
        }
        else if (dnTally === 4 && previousDNValue === 1) {
          return redWin = true;
        }
        previousDNValue = currentDNValue;
      }
    }
  }
}

function diagonalPosWin(){
  let previousDPValue = 0;
  let currentDPValue = 0;
  dpTally = 1;
  for (let i = boardHeight; i > 0; i--) {
    for (let j = 0; j < boardWidth; j++) {
      previousDPValue = 0;
      for (let x = 0; x < 4; x++) {
        if (i + x < boardHeight && j - x < boardWidth){
          currentDPValue = grid[i + x][j - x];
        }
        else{
          currentDPValue = 0;
        }
        if (currentDPValue === previousDPValue && currentDPValue !== 0) {
          dpTally += 1;
        }
        else {
          dpTally = 1;
        }
        if (dpTally === 4 && previousDPValue === 2) {
          return yellowWin = true;
        }
        else if (dpTally === 4 && previousDPValue === 1) {
          return redWin = true;
        }
        previousDPValue = currentDPValue;
      }
    }
  }
}

function checkForWin() {
  horizontalWin();
  verticalWin();
  diagonalNegWin();
  diagonalPosWin();
  if (redWin) {
    console.log("Red Wins");
  }
  if (yellowWin) {
    console.log("Yellow Wins");
  }
}

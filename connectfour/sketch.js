// Connect 4
// Domenic Neufeld
// April 16th, 2018

let boxSize;
let grid; //0 = blank; 1 = red; 2 = yellow;
let boardWidth = 7;
let boardHeight = 6;

let redTurn = true;

let yellowWin = false;
let redWin = false;

let state = 1; // 1 = menu, 2 = game, 3 = red win, 4 = yellow win

let horizontalTally, verticalTally, dnTally, dpTally; //dp = diagonal positive slope, dn = diagonal negative slope

function setup() {
  createCanvas(windowWidth, windowHeight);
  boxSize = 100;
  grid = createEmpty2dArray();
}

function draw() {
  background(255);
  if (state === 1) {
    startMenu();
  }

  if (state === 2) {
    drawGrid();
    checkForWin();
  }

  if (state === 3){
    drawGrid();
    displayRedWin();
  }

  if (state === 4){
    drawGrid();
    displayYellowWin();
  }
}

function drawGrid() {
  // Nested loop that goes through each value in the grid
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      // Fills in each circle depending on the value of that section of the grid.
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
  // Creates a 2d array filled with zero. Starting state of the game.
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
  // If mouse is within the button and you click it will change it to the game state.
  if (state === 1 || state === 3 || state === 4){
    if (mouseX < 450 && mouseX > 250 && mouseY > 250 && mouseY < 350){
      // Creates blank board
      grid = createEmpty2dArray();
      state = 2;
    }
  }

  else if (state === 2) {
    //Checks which column your mouse is when clicked and drops a piece there.
    let xcoord = floor(mouseX / boxSize);
    for (let i = 6; i > 0; i--) {
      if (grid[i - 1][xcoord] === 0) {
        if (redTurn) {
          grid[i - 1][xcoord] = 1;
        }
        else {
          grid[i - 1][xcoord] = 2;
        }
        // Switches color after each turn.
        redTurn = !redTurn;
        return grid;
      }
    }
  }
}

function horizontalWin() {
  let previousHorValue = 0;
  let currentHorValue = 0;
  horizontalTally = 1;
  // Nested loop that goes through the grid from left to right, then top to bottom.
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      currentHorValue = grid[i][j];

      // If the current point in the grid is the same color as the last one it adds one to a tally
      if (currentHorValue === previousHorValue && currentHorValue !== 0) {
        horizontalTally += 1;
      }
      // If the current point in the grid is different from the last one it returns the count to one
      else {
        horizontalTally = 1;

      }
      // If the tally reaches 4 either red or yellow wins
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
  // Nested loop that goes through the grid from top to bottom, then left to right.
  for (let j = 0; j < boardWidth; j++) {
    for (let i = 0; i < boardHeight; i++) {
      currentVertValue = grid[i][j];

      // If the current point in the grid is the same color as the last one it adds one to a tally
      if (currentVertValue === previousVertValue && currentVertValue !== 0) {
        verticalTally += 1;
      }
      // If the current point in the grid is different from the last one it returns the count to one
      else {
        verticalTally = 1;
      }

      // If the tally reaches 4 either red or yellow wins
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
  // Checks for four in a row in a diagonal line with a negative slope
  let previousDNValue = 0;
  let currentDNValue = 0;
  dnTally = 1; //dn = diagonal negative
  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      previousDNValue = 0;
      // At each point on the grid it checks the four points below and to the right of it
      for (let x = 0; x < 4; x++) {
        // Makes sure the count doesn't extend off the grid
        if (i + x < boardHeight && j + x < boardWidth) {
          currentDNValue = grid[i + x][j + x];
        }
        else {
          currentDNValue = 0;
        }

        // If the current point in the grid is the same color as the last one it adds one to a tally
        if (currentDNValue === previousDNValue && currentDNValue !== 0) {
          dnTally += 1;
        }
        // If the current point in the grid is different from the last one it returns the count to one
        else {
          dnTally = 1;
        }

        // If the tally reaches 4 either red or yellow wins
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

function diagonalPosWin() {
  // Checks for four in a row in a diagonal line with a positive slope
  let previousDPValue = 0;
  let currentDPValue = 0;
  dpTally = 1; //dp = diagonal positive
  for (let i = boardHeight; i > 0; i--) {
    for (let j = 0; j < boardWidth; j++) {
      previousDPValue = 0;
      // At each point on the grid it checks the four points above and to the right of it
      for (let x = 0; x < 4; x++) {
        // Makes sure the count doesn't extend off the grid
        if (i + x < boardHeight && j - x < boardWidth) {
          currentDPValue = grid[i + x][j - x];
        }
        else {
          currentDPValue = 0;
        }

        // If the current point in the grid is the same color as the last one it adds one to a tally
        if (currentDPValue === previousDPValue && currentDPValue !== 0) {
          dpTally += 1;
        }
        // If the current point in the grid is different from the last one it returns the count to one
        else {
          dpTally = 1;
        }

        // If the tally reaches 4 either red or yellow wins
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
    state = 3;
  }
  if (yellowWin) {
    state = 4;
  }
}

function startMenu() {
  // Displays the start menu
  textSize(64);
  text("Connect Four", 160, 200);

  strokeWeight(4);
  // Checks to see if your mouse is within the button and changes the colour.
  if (mouseX < 450 && mouseX > 250 && mouseY > 250 && mouseY < 350) {
    fill(255, 100, 100);
  }
  else {
    fill(255, 0, 0);
  }
  rect(250, 250, 200, 100);

  fill(0);
  textSize(48);
  text("Play", 302.5, 315);
}

function displayRedWin(){
  textSize(64);
  fill(0, 150, 0);
  text("Red Wins", 210, 200);

  strokeWeight(4);
  // Checks to see if your mouse is within the button and changes the colour.
  if (mouseX < 450 && mouseX > 250 && mouseY > 250 && mouseY < 350) {
    fill(50, 50, 50);
  }
  else {
    fill(100, 100, 100);
  }
  rect(250, 250, 200, 100);

  fill(0);
  textSize(48);
  text("Play", 302.5, 315);

  // resets game
  redWin = false;
}

function displayYellowWin(){
  textSize(64);
  fill(0, 150, 0);
  text("Yellow Wins", 175, 200);

  strokeWeight(4);
  // Checks to see if your mouse is within the button and changes the colour.
  if (mouseX < 450 && mouseX > 250 && mouseY > 250 && mouseY < 350) {
    fill(50, 50, 50);
  }
  else {
    fill(100, 100, 100);
  }
  rect(250, 250, 200, 100);

  fill(0);
  textSize(48);
  text("Play", 302.5, 315);

  // resets game
  yellowWin = false;
}

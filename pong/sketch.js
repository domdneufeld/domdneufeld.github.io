// Pong
// Domenic Neufeld
// March 15th, 2018

// Uses a state variable with 4 states for: the menu screen, the game screen, the win screen and the lose screen.

// I split the game into separate folders to improve the readability, but it seemed to mess up the linter.

// Extra for experts:
// I made an ai player that you will play against. The ai calculates where the ball will be at the time that the ball hits the
// paddle, and if the paddle is below that or above that it will move towards that position. The ai will move to the center
// after hitting the ball and will only start moving once the ball reaches the halfway point. The ai plays the game perfectly,
// and the only thing that gives the player a chance is the fact that the ai waits until the midway point to start moving.
function draw() {
  background(0);

  // Pong menu screen
  if (state === 0) {
    displayMenu();

    checkIfMouseIsOverButton();
    displayStartButton();
  }
  // Pong game screen
  else if (state === 1) {
    drawBackgroundLines();

    addScore();
    displayScore();
    endGame();

    determineAiMovement();

    moveAiPaddle();
    moveBall();
    movePlayerPaddle();


    displayBall();
    displayPlayerPaddle();
    displayAiPaddle();
  }

  // Win screen
  else if (state === 2){
    displayWin();
    checkIfMouseIsOverButton();
    displayStartButton();
  }

  // Loss screen
  else{
    displayLoss();
    checkIfMouseIsOverButton();
    displayStartButton();
  }
}

function drawBackgroundLines() {
  // Draws the lines running on the top and bottom
  fill(255);
  rectMode(CORNER);
  rect(20, 10, 860, 10);
  rect(20, 560, 860, 10);

  // Draws the dotted line running through the middle
  for (let y = 20; y < 580; y += 40) {
    stroke(255);
    rect(445, y, 10, 20);
  }
}

function displayScore() {
  textFont("Helvetica");
  textSize(100);
  fill(255);
  text(playerScore, 345, 110);
  text(aiScore, 500, 110);
}



function addScore() {
  if (ball.x <= 0) {
    aiScore += 1;
    // Resets the ball and paddles after adding the score
    ball.x = 450;
    ball.y = 290;
    ball.ySpeed = 3;
    ball.xSpeed = 3;
    playerPaddle.y = 290;
    aiPaddle.y = 290;
  }

  if (ball.x >= 900) {
    playerScore += 1;
    // Resets the ball and paddle after adding the score
    ball.x = 450;
    ball.y = 290;
    ball.ySpeed = 3;
    ball.xSpeed = 3;
    playerPaddle.y = 290;
    aiPaddle.y = 290;
  }
}

function displayMenu() {
  // Writes "PONG" in a large white font when the game loads
  fill(255);
  textFont("Helvetica");
  textSize(100);
  text("PONG", 300, 100, 600, 200);

  textSize(32);
  text("Use the arrow keys to move", 250, 550);
}

function displayStartButton() {
  rectMode(CORNER);
  if (state === 0){
    if (mouseOverButton) {
      // Makes button a lighter color if the mouse is over the button
      stroke(255);
      fill(200);
      rect(350, 300, 200, 100);

      fill(0);
      textSize(48);
      text("PLAY", 390, 322.5, 550, 400);
    }
    else {
      // Returns the button to its default color when the mouse is not over the button
      stroke(255);
      fill(50);
      rect(350, 300, 200, 100);

      fill(255);
      textSize(48);
      text("PLAY", 390, 322.5, 550, 400);
    }
  }
  else{
    if (mouseOverButton) {
      // Makes button a lighter color if the mouse is over the button
      stroke(255);
      fill(200);
      rect(350, 300, 200, 100);

      fill(0);
      textSize(48);
      text("PLAY", 390, 322.5, 550, 400);
    }
    else {
      // Returns the button to its default color when the mouse is not over the button
      stroke(255);
      fill(50);
      rect(350, 300, 200, 100);

      fill(255);
      textSize(48);
      text("PLAY", 390, 322.5, 550, 400);
    }
  }
}

function checkIfMouseIsOverButton() {
  if (mouseX <= 550 && mouseX >= 350 && mouseY >= 300 && mouseY <= 400) {
    mouseOverButton = true;
  }
  else {
    mouseOverButton = false;
  }
}

function mouseClicked() {
  if (mouseOverButton) {
    // changes from the menu screen to the game screen when the play button is pressed
    state = 1;
  }
}

function endGame() {
  if (playerScore === 5) {
    // changes from game screen to win screen and resets scores
    state = 2;
    aiScore = 0;
    playerScore = 0;
  }
  if (aiScore === 5){
    // changes from game screen to loss screen and resets scores
    state = 3;
    aiScore = 0;
    playerScore = 0;
  }
}

function displayWin(){
  // Writes you win if you win
  fill(255);
  textFont("Helvetica");
  textSize(80);
  text("You Win", 300, 200);

}

function displayLoss(){
  // Writes you lose if you Lose
  fill(255);
  textFont("Helvetica");
  textSize(75);
  text("You Lose", 300, 200);
}

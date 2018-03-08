// Pong
// Domenic Neufeld
// March 6th, 2018

let playerScore = 0;
let aiScore = 0;
let state = 0;

let mouseOverButton;

let playerPaddle = {
  width: 10,
  height: 60,
  x: 25,
  y: 290,
  yDirection: 0,
  up: false,
  down: false,
  speed: 4,
};

let aiPaddle = {
  width: 10,
  height: 60,
  x: 875,
  y: 290,
  yDirection: 0,
  up: false,
  down: false,
  speed: 4,
};

let ball = {
  x: 450,
  y: 290,
  xDirection: -1,
  yDirection: -1,
  xSpeed: 3,
  ySpeed: 3,
  size: 15,
};

function setup() {
  createCanvas(900, 580);
}

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

    determineAiMovement();

    moveAiPaddle();
    moveBall();
    movePlayerPaddle();


    displayBall();
    displayPlayerPaddle();
    displayAiPaddle();
  }
}

function displayPlayerPaddle() {
  // Draws the player's paddle
  fill(255);
  rectMode(CENTER);
  rect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height);
}

function displayAiPaddle() {
  // Draws the ai's paddle
  fill(255);
  rectMode(CENTER);
  rect(aiPaddle.x, aiPaddle.y, aiPaddle.width, aiPaddle.height);
}

function movePlayerPaddle() {
  // Moves the paddle up or down if depending on if the keys are pressed
  if (aiPaddle.up) {
    aiPaddle.yDirection = -aiPaddle.speed;
  }
  else if (aiPaddle.down) {
    aiPaddle.yDirection = aiPaddle.speed;
  }
  else {
    aiPaddle.yDirection = 0;
  }

  // Moves the paddle
  if (aiPaddle.y + aiPaddle.yDirection > 60 && aiPaddle.y + aiPaddle.yDirection < 520) {
    aiPaddle.y += aiPaddle.yDirection;
  }
}

function moveAiPaddle() {
  // Moves the paddle up or down if depending on if the keys are pressed
  if (playerPaddle.up) {
    playerPaddle.yDirection = -playerPaddle.speed;
  }
  else if (playerPaddle.down) {
    playerPaddle.yDirection = playerPaddle.speed;
  }
  else {
    playerPaddle.yDirection = 0;
  }

  // Moves the paddle
  if (playerPaddle.y + playerPaddle.yDirection > 60 && playerPaddle.y + playerPaddle.yDirection < 520) {
    playerPaddle.y += playerPaddle.yDirection;
  }
}

function keyPressed() {
  // Checks to see if up arrow is pressed or if down arrow is pressed
  if (keyCode === UP_ARROW) {
    playerPaddle.up = true;
  }

  if (keyCode === DOWN_ARROW) {
    playerPaddle.down = true;
  }
}

function keyReleased() {
  // Checks to see if up arrow is released or if down arrow is released
  if (keyCode === UP_ARROW) {
    playerPaddle.up = false;
  }

  if (keyCode === DOWN_ARROW) {
    playerPaddle.down = false;
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

function displayBall() {
  fill(255);
  rectMode(CENTER);
  rect(ball.x, ball.y, ball.size, ball.size);
}

function moveBall() {
  // Determines if the ball hits the top or bottom of the screen
  if (ball.y + ball.size / 2 >= 560 || ball.y - ball.size <= 20) {
    ball.yDirection = ball.yDirection * -1;
  }

  // Determines if the ball is going to reach the same x-value as the player paddle's x-value
  if (ball.x - ball.size / 2 - ball.xSpeed <= playerPaddle.x + playerPaddle.width / 2 && ball.x >= playerPaddle.x && ball.xDirection < 0) {
    // Determines if the ball is hitting within the the paddle and not above or below the paddle
    if (ball.y >= playerPaddle.y - playerPaddle.height / 2 && ball.y <= playerPaddle.y + playerPaddle.height / 2) {
      ball.xDirection = ball.xDirection * -1;
      // Adds a random increment of speed to the ball after each hit
      ball.ySpeed += random(0, 0.5);
      ball.xSpeed += random(0, 0.5);
    }
  }

  // Determines if the ball hits the ai's paddle
  if (ball.x + ball.xSpeed >= aiPaddle.x - playerPaddle.width / 2 && ball.x <= aiPaddle.x && ball.xDirection > 0) {
    // Determines if the ball is hitting within the the paddle and not above or below the paddle
    if (ball.y >= aiPaddle.y - aiPaddle.height / 2 && ball.y <= aiPaddle.y + aiPaddle.height / 2) {
      ball.xDirection = ball.xDirection * -1;
      // Adds a random increment of speed to the ball after each hit
      ball.ySpeed += random(0, 0.5);
      ball.xSpeed += random(0, 0.5);
    }
  }


  // Moves the ball by the x and y speeds
  ball.x += ball.xDirection * ball.xSpeed;
  ball.y += ball.yDirection * ball.ySpeed;
}

function determineAiMovement() {
  // Checks to see if the ball is going to bounce off the top before reaching the paddle
  if (ball.xDirection > 0 && ball.x > 450 && ball.x < 900 && 450 / ball.xSpeed * ball.ySpeed * ball.yDirection + ball.y < 0 && ball.x < 700) {
    // Sets the ai paddle's height to 180 until the ball gets close to the paddle
    if (aiPaddle.y > 180) {
      // Moves up
      aiPaddle.up = true;
      aiPaddle.down = false;
    }
    else if (aiPaddle.y < 180) {
      // Moves down
      aiPaddle.down = true;
      aiPaddle.up = false;
    }
    else {
      // No movement
      aiPaddle.down = false;
      aiPaddle.up = false;
    }
  }
  // Checks to see if the ball is going to bounce off the bottom before reaching the paddle
  else if (ball.xDirection > 0 && ball.x > 450 && ball.x < 900 && 450 / ball.xSpeed * ball.ySpeed + ball.y > 550 && ball.x < 700) {
    // Sets the ai paddle's height to 420 until the ball gets close to the paddle
    if (aiPaddle.y > 420) {
      // Moves up
      aiPaddle.up = true;
      aiPaddle.down = false;
    }
    else if (aiPaddle.y < 420) {
      // Moves down
      aiPaddle.down = true;
      aiPaddle.up = false;
    }
    else {
      // No movement
      aiPaddle.down = false;
      aiPaddle.up = false;
    }
  }

  // Makes the paddle move towards the ball when the ball is coming towards the ai
  else if (ball.xDirection > 0 && ball.x > 450 && ball.x < 900) {
    if (ball.y > aiPaddle.y) {
      aiPaddle.down = true;
    }
    else {
      aiPaddle.down = false;
    }

    if (ball.y < aiPaddle.y) {
      aiPaddle.up = true;
    }
    else {
      aiPaddle.up = false;
    }
  }

  // Moves the ai paddle to the middle if the ball is moving towards the player
  else {
    if (aiPaddle.y > 290) {
      aiPaddle.up = true;
      aiPaddle.down = false;
    }
    else if (aiPaddle.y < 290) {
      aiPaddle.down = true;
      aiPaddle.up = false;
    }
    else {
      aiPaddle.down = false;
      aiPaddle.up = false;
    }
  }
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
}

function displayStartButton() {
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
  if (playerScore === 10) {
    // changes from game screen to win screen and resets scores
    state === 3;
    aiScore = 0;
    playerScore = 0;
  }
  if (aiScore === 10){
    // changes from game screen to loss screen and resets scores
    state === 4;
    aiScore = 0;
    playerScore = 0;
  }
}

// Pong
// Domenic Neufeld
// March 6th, 2018

let playerScore = 0;
let aiScore = 0;

let playerPaddle = {
  width: 10,
  height: 60,
  x: 25,
  y: 300,
  dy: 0,
  up: false,
  down: false,
  speed: 4,
};

let aiPaddle = {
  width: 10,
  height: 60,
  x: 875,
  y: 300,
  dy: 0,
  up: false,
  down: false,
  speed: 4,
};

let ball = {
  x: 450,
  y: 300,
  dx: -1,
  dy: -1,
  xSpeed: 3,
  ySpeed: 3,
  size: 15,
};

function setup() {
  createCanvas(900, 580);
}

function draw() {
  background(0);
  drawBackgroundLines();
  displayScore();

  determineAiMovement();

  moveAiPaddle();
  moveBall();
  movePlayerPaddle();


  displayBall();
  displayPlayerPaddle();
  displayAiPaddle();
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
    aiPaddle.dy = -aiPaddle.speed;
  }
  else if (aiPaddle.down) {
    aiPaddle.dy = aiPaddle.speed;
  }
  else {
    aiPaddle.dy = 0;
  }

  // Moves the paddle
  if (aiPaddle.y + aiPaddle.dy > 60 && aiPaddle.y + aiPaddle.dy < 520) {
    aiPaddle.y += aiPaddle.dy;
  }
}

function moveAiPaddle() {
  // Moves the paddle up or down if depending on if the keys are pressed
  if (playerPaddle.up) {
    playerPaddle.dy = -playerPaddle.speed;
  }
  else if (playerPaddle.down) {
    playerPaddle.dy = playerPaddle.speed;
  }
  else {
    playerPaddle.dy = 0;
  }

  // Moves the paddle
  if (playerPaddle.y + playerPaddle.dy > 60 && playerPaddle.y + playerPaddle.dy < 520) {
    playerPaddle.y += playerPaddle.dy;
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

function displayScore(){
  textFont("Helvetica");
  textSize(100);
  fill(255);
  text(playerScore,345,110);
  text(playerScore,500,110);
}

function displayBall() {
  fill(255);
  rectMode(CENTER);
  rect(ball.x, ball.y, ball.size, ball.size);
}

function moveBall() {
  // Determines if the ball hits the top or bottom of the screen
  if (ball.y + ball.size / 2 >= 560 || ball.y - ball.size <= 20) {
    ball.dy = ball.dy * -1;
  }

  // Determines if the ball hits the player's paddle
  if (ball.x - ball.xSpeed <= playerPaddle.x + playerPaddle.width / 2 && ball.x > 20) {
    if (ball.y >= playerPaddle.y - playerPaddle.height / 2 && ball.y <= playerPaddle.y + playerPaddle.height / 2) {
      ball.dx = ball.dx * -1;
      ball.ySpeed += 0.25;
    }
  }

  // Determines if the ball hits the ai's paddle
  if (ball.x + ball.xSpeed >= aiPaddle.x - playerPaddle.width / 2 && ball.x < 880) {
    if (ball.y >= aiPaddle.y - aiPaddle.height / 2 && ball.y <= aiPaddle.y + aiPaddle.height / 2) {
      ball.dx = ball.dx * -1;
      ball.ySpeed += 0.25;
    }
  }


  // Moves the ball by the x and y speeds
  ball.x += ball.dx * ball.xSpeed;
  ball.y += ball.dy * ball.ySpeed;
}

function determineAiMovement() {
  // Makes the paddle move towards the ball when the ball is coming towards the ai
  if (ball.dx > 0 && ball.x > 450 && ball.x < 900) {
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
    if (aiPaddle.y > 300) {
      aiPaddle.up = true;
      aiPaddle.down = false;
    }
    else if (aiPaddle.y < 300) {
      aiPaddle.down = true;
      aiPaddle.up = false;
    }
    else {
      aiPaddle.down = false;
      aiPaddle.up = false;
    }
  }
}

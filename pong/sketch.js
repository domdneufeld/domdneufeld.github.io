// Pong
// Domenic Neufeld
// March 6th, 2018

let playerPaddle = {
  width: 10,
  height: 60,
  x: 20,
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
  xSpeed: 2,
  ySpeed: 3,
  size: 15,
};

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(0);
  drawTopAndBottomLines();

  moveBall();
  movePlayerPaddle();


  displayBall();
  displayPlayerPaddle();
}

function displayPlayerPaddle() {
  // Draws the player's paddle
  fill(255);
  rectMode(CORNER);
  rect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height);
}

function movePlayerPaddle() {
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
  if (playerPaddle.y + playerPaddle.dy > 30 && playerPaddle.y + playerPaddle.dy < 570 - playerPaddle.height) {
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

function drawTopAndBottomLines() {
  // Draws the lines running on the top and bottom
  fill(255);
  rectMode(CORNER);
  rect(20, 10, 860, 10);
  rect(20, 580, 860, 10);
}

function displayBall() {
  fill(255);
  rectMode(CENTER);
  rect(ball.x, ball.y, ball.size, ball.size);
}

function moveBall(){
  if (ball.y + ball.size / 2 >= 580 || ball.y - ball.size <= 20){
    ball.dy = ball.dy * -1;
  }


  // Moves the ball by the x and y speeds
  ball.x += ball.dx * ball.xSpeed;
  ball.y += ball.dy * ball.ySpeed;
}

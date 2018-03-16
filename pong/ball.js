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
    if (ball.y + ball.size / 2>= playerPaddle.y - playerPaddle.height / 2 && ball.y - ball.size / 2 <= playerPaddle.y + playerPaddle.height / 2) {
      ball.xDirection = ball.xDirection * -1;
      // Adds a random increment of speed to the ball after each hit
      ball.ySpeed += random(0.25, 0.85);
      ball.xSpeed += random(0.25, 0.85);
    }
  }

  // Determines if the ball hits the ai's paddle
  if (ball.x + ball.xSpeed >= aiPaddle.x - playerPaddle.width / 2 && ball.x <= aiPaddle.x && ball.xDirection > 0) {
    // Determines if the ball is hitting within the the paddle and not above or below the paddle
    if (ball.y + ball.size / 2 >= aiPaddle.y - aiPaddle.height / 2 && ball.y - ball.size / 2 <= aiPaddle.y + aiPaddle.height / 2) {
      ball.xDirection = ball.xDirection * -1;
      // Adds a random increment of speed to the ball after each hit
      ball.ySpeed += random(0.25, 0.85);
      ball.xSpeed += random(0.25, 0.85);
    }
  }


  // Moves the ball by the x and y speeds
  ball.x += ball.xDirection * ball.xSpeed;
  ball.y += ball.yDirection * ball.ySpeed;
}

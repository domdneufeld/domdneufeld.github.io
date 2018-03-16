function displayPlayerPaddle() {
  // Draws the player's paddle
  fill(255);
  rectMode(CENTER);
  rect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height);
}

function movePlayerPaddle() {
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

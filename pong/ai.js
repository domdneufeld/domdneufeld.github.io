function displayAiPaddle() {
  // Draws the ai's paddle
  fill(255);
  rectMode(CENTER);
  rect(aiPaddle.x, aiPaddle.y, aiPaddle.width, aiPaddle.height);
}

function moveAiPaddle() {
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

function determineAiMovement() {
  if (ball.x <= 450){
    // Calculates what the y position of the ball will when the x position of the ball = 0 and if it didn't reflect off of any walls
    finalYPosition = 450 / ball.xSpeed * ball.ySpeed * ball.yDirection + ball.y;
  }
  // Checks to see if the ball is going to bounce off the top before reaching the paddle
  if (ball.xDirection > 0 && ball.x > 450 && ball.x < 900 && finalYPosition < 0) {

    // Calculates and sets the ai paddle's height to the location of the reflection
    if (aiPaddle.y > -finalYPosition + 20 + (290 + finalYPosition) % aiPaddle.speed) {
      // Moves up
      aiPaddle.up = true;
      aiPaddle.down = false;
    }
    else if (aiPaddle.y < -finalYPosition + 20 + (290 + finalYPosition) % aiPaddle.speed) {
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
  else if (ball.xDirection > 0 && ball.x > 450 && ball.x < 900 && finalYPosition > 580) {
    // Sets the ai paddle's height to 410 until the ball gets close to the paddle
    if (aiPaddle.y > 560 - (finalYPosition - 580) + (finalYPosition - 290) % aiPaddle.speed) {
      // Moves up
      aiPaddle.up = true;
      aiPaddle.down = false;
    }
    else if (aiPaddle.y < 560 - (finalYPosition - 580) + (finalYPosition - 290) % aiPaddle.speed) {
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
  else if (ball.xDirection > 0 && ball.x > 450) {
    if (aiPaddle.y < finalYPosition + (finalYPosition + 290) % aiPaddle.speed) {
      aiPaddle.down = true;
    }
    else {
      aiPaddle.down = false;
    }

    if (aiPaddle.y > finalYPosition + (finalYPosition + 290) % aiPaddle.speed) {
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

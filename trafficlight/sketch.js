//Traffic Light
//Dom Neufeld
//Feb 28, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let state;
let timer = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  determineState();

  // Runs the timer, and resets it back to zero once it reaches the end.
  // timer goes up 60 per second
  if (timer < 600) {
    timer = timer + 1;
  }
  else {
    timer = 0;
  }

  displayCorrectLight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}

function determineState() {
  // Changes state based on how long the timer has been running
  if (timer < 240) {
    state = 3;
  }
  else if (timer < 360) {
    state = 2;
  }
  else {
    state = 1;
  }
}

function displayCorrectLight() {
  if (state === 1) {
    fill(255, 0, 0);
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (state === 2) {
    fill(255, 255, 0);
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  else {
    fill(0, 255, 0);
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
}

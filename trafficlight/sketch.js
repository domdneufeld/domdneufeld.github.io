//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

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
  

  if (timer < 300) {
    timer = timer + 1;
  }
  else {
    timer = 0;
  }
  print(timer);

  light();
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
  if (timer < 120) {
    state = 1;
  }
  else if (timer < 180) {
    state = 2;
  }
  else {
    state = 3;
  }
}

function light() {
  if (state === 1) {
    fill(0, 255, 0);
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (state === 2) {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  else if (state === 3) {
    fill(255, 0, 0);
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
}

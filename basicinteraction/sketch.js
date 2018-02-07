// basic interaction
// Dom Neufeld
// February 7, 2018

// global variables
let click;
let keyPress;
// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}

function keyPressed() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(width), random(height), random(40, 100), random(40, 100));

  textSize(32);
  text('word', random(width), random(height));
}

function mouseClicked() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX, mouseY, random(40, 100), random(40, 100));
}

function deviceShaken() {
  textSize(32);
  text('word', random(width), random(height));
}

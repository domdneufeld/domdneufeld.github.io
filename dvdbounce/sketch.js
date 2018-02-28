// DVD Bounce - The Office Shoutout
// Dan Schellenberg
// Feb 15, 2018

// global variables
let x, y, radius;
let dx, dy;
let dvd, dvdColor;
let state;

function preload() {
  dvd = loadImage("images/logo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  dvdColor = color(0);
  state = 1;
}

function draw() {
  background(255);

  if (state === 1) {
    displayButton();
  }

  if (state === 2) {
    moveThing();
    displayThing();
  }
}

function moveThing() {
  x += dx;
  y += dy;

  //check if bounce required
  if (y + dvd.height / 2 >= height || y - dvd.height / 2 <= 0) {
    dy = dy * -1;
    dvdColor = color(random(255), random(255));
  }

  if (x + dvd.width / 2 >= width || x - dvd.width / 2 <= 0) {
    dx = dx * -1;
    dvdColor = color(random(255), random(255));
  }
}

function displayThing() {
  fill(0);
  // ellipse(x, y, radius * 2, radius * 2);
  imageMode(CENTER);
  tint(dvdColor);
  image(dvd, x, y);
}

function displayButton() {
  fill(255, 0, 0);
  rect(width / 2 - 100, height / 2 - 50, 200, 100);

  textSize(24);
  fill(0);
  text("Play", width / 2 - 25, height / 2 + 10);
}

function mouseClicked(){
  checkButton();
}

function checkButton() {
  if (width / 2 - 100 <= mouseX <= width / 2 + 100 && height / 2 - 50 <= mouseY <= height / 2 + 50) {
    state = 2;
  }
}

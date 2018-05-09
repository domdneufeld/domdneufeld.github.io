let theta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);

  theta = 30;
  let branchSize = 150;

  translate(width / 2, height);
  line(0, 0, 0, -branchSize);

  translate(0, -branchSize);
  recursiveTree(branchSize);
}

function recursiveTree(length) {
  length = length * 4/5;

  if (length > 3) {
    // RIGHT
    push();
    rotate(theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    recursiveTree(length);

    pop();

    // LEFT
    push();
    rotate(-theta);
    line(0, 0, 0, -length);
    translate(0, -length);
    recursiveTree(length);

    pop();
  }
}

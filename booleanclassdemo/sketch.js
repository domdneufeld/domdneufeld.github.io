function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed && keyIsPressed && (key === "t" || key === "T")) {
    drawTriangle();
  }

  if (keyIsPressed && (key === "Z" || key === "z" || key === "x" || key === "X")) {
    drawEllipse();
  }
}

function drawTriangle() {
  let x = random(windowWidth);
  let y = random(windowHeight);
  fill(random(255),random(255),random(255));
  triangle(x, y, x + 50, y + 50, x + 50, y);
}

function drawEllipse() {
  let x = random(windowWidth);
  let y = random(windowHeight);
  fill(random(255),random(255),random(255));
  ellipse(x, y, 50);
}

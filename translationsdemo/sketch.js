function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(255);
  //
  // push();
  // rectMode(CENTER);
  // fill(0);
  // angleMode(DEGREES);
  // translate(width/2,height/2);
  // rotate(x);
  // rect(0, 0, 300, 50);
  // x += 10;
  //
  // pop();
  // fill(0);
  // rect(100,100,200,200);
  strokeWeight(3);
  strokeCap(SQUARE);
  noFill();
  angleMode(DEGREES);
  ellipseMode(CENTER);
  translate(width/2,height/2);
  ellipse(0,0,500);
  fill(0);
  ellipse(0,0,2);

  for (let i = 0; i < 12; i++) {
    rectMode(CENTER);
    rect(0,-215,3,50);
    rotate(6);
    for (let j = 0; j < 4; j++) {
      line(0,-205,0,-240);
      rotate(6);
    }
  }
}

let a = 80;

function setup() {
  createCanvas(700, 400);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  line(a, 0, a, height);

  // for (let a = 120; a < 200; a += 2) {
  //   line(a, 0, a, height);
  // }

  let b = 120;
  while (b < 200) {
    line(b, 0, b, height);
    b += 2;
  }

  drawAnotherline();

  drawYetAnotherLine();

}

function drawAnotherline() {
  let a = 320;
  line(a, 0, a, height);
}

function drawYetAnotherLine() {
  line(a + 5, 0, a + 5, height);
}

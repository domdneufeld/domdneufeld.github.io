function setup() {
  createCanvas(windowWidth, windowHeight);
  print(factorial(10));
}

function draw() {

}

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
}

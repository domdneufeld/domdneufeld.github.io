// arrays demo
// let xballCoords = [50,];
// let yballCoords = [200,];
let ballCoords = [[50,200,],];



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  for (let i = 0; i<ballCoords.length; i++){
    // ellipse(xballCoords[i],yballCoords[i],50,50);
    ellipse(ballCoords[i][0],ballCoords[i][1],50,50);
  }
}

function mousePressed() {
  // xballCoords.push(mouseX);
  // yballCoords.push(mouseY);
  ballCoords.push([mouseX][mouseY]);
}

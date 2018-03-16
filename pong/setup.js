let playerScore = 0;
let aiScore = 0;
let state = 0;

let mouseOverButton;

let finalYPosition;

let playerPaddle = {
  width: 10,
  height: 60,
  x: 25,
  y: 290,
  yDirection: 0,
  up: false,
  down: false,
  speed: 4,
};

let aiPaddle = {
  width: 10,
  height: 60,
  x: 875,
  y: 290,
  yDirection: 0,
  up: false,
  down: false,
  speed: 4,
};

let ball = {
  x: 450,
  y: 290,
  xDirection: 1,
  yDirection: 1,
  xSpeed: 3,
  ySpeed: 3,
  size: 15,
};

function setup() {
  createCanvas(900, 580);
}

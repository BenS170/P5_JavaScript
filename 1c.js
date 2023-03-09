const { arch } = require("os");

function setup() {
  createCanvas(1900, 960);
  button = createButton('Draw a Robot');
  button.position(50, 150);
  button.mousePressed(loadRobot);
  background(255);
}

function loadRobot(){
  fill('#F0706A');
  rect(775, 100, 50, 150);
  rect(1075, 100, 50, 150);
  fill('#000080');
  ellipse(800, 100, 100, 100);
  ellipse(1100, 100, 100, 100);
  fill('#FFA500');
  rect(700, 225, 500, 350);
  fill('#37C6FF');
  ellipse(825, 350, 50, 50);
  ellipse(1075, 350, 50, 50);
  fill('#FFC0CB');
  arc(950, 450, 200, 150, 0, PI, PIE);
}
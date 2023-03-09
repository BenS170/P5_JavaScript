

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let c1 = color(0);
  let c2 = color(255);
  let c3 = color('magenta');

  push();
  fill(c1);
  rotate(-PI/4);
  translate(-120, 100);
  ellipse(width/4, height/4, 80, 50);
  rotate(PI/2);
  translate(0, -300);
  ellipse(width/4*2, height/4, 80, 50);
  pop();

  fill(c2);
  ellipse(width/2, height/2+15, 200, 160);
}

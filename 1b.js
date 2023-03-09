function setup() {
  createCanvas(1900, 960);
}

function keyPressed(){
  if(keyCode == 82){
    fill(color(255, 0, 0));
  } else if (keyCode == 71){
    fill(color(0, 255, 0));
  } else if (keyCode == 66){
    fill(color(0, 0, 255));
  }
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
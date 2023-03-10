
function setup() {
  createCanvas(1400, 600);
  background(220);
}

var a = 0;
var a_bool = true;
var b = 0;
var b_bool = true;
var x = 0;

function draw() {
  background(220);

  //Animations
  if(x > width){
    x = 0;
  }

  x = x + 10;
  
  if(a > PI/4){
    a_bool = false;
  }else if (a <= -0.2){
    a_bool = true;
  }

  if(a_bool){
    a = a + 0.1;
  }else{
    a = a - 0.1;
  }

  if(b < -PI/4){
    b_bool = false;
  }else if (b >= 0.2){
    b_bool = true;
  }

  if(b_bool){
    b = b - 0.1;
  }else{
    b = b + 0.1;
  }
  
  //Left Leg
  push();
  translate(x+75, 350);
  rotate(a);
  fill('#6495ED');
  rect(-10, 0, 20, 100);
  pop();

  //Right Leg
  push();
  translate(x+95, 350);
  rotate(b);
  fill('#6495ED');
  rect(-10, 0, 20, 100);
  pop();

  //Body
  push();
  translate(x+50, 200);
  fill('#E82B19');
  rect(0, 0, 75, 160);
  pop();

  //Head
  push();
  translate(x+60, 150);
  fill('#E82B19');
  rect(0, 0, 55, 50);
  pop();

  //Arm
  push();
  translate(x+90, 225);
  fill('#FFD700');
  rect(0, 0, 100, 20);
  translate(100, 10);
  fill('#32CD32');
  arc(0, 0, 30, 30, PI/4, 7*PI/4);
  pop();

  //Eyes
  push();
  translate(x+100, 165);
  fill('#0000FF');
  rect(0, 0, 10, 10);
  pop();
}

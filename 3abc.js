

function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    //3a
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
  
    //3b
    translate(0, 40);
    fill(c1);
  
    push();
    rotate(-PI/4);
    translate(-120, 130);
    ellipse(width/4, height/4, 60, 45);
    rotate(PI/2);
    translate(-30, -270);
    ellipse(width/4*2, height/4, 60, 45);
    pop();
  
    translate(30, 45);
  
    push();
    fill(c2);
    noStroke();
    translate(35, 20);
    ellipse(width/4, height/4, 15, 15);
    translate(65, 0);
    ellipse(width/4, height/4, 15, 15);
    pop();
  
    translate(20, 65);
    
    push();
    fill(c3);
    noStroke();
    ellipse(width/4, width/4, 30, 17);
    ellipse(width/4*2, width/4, 30, 17);
    pop();
  
    translate(50, 60);
    noFill();
    rotate(-PI/12*2);
    arc(50, 55, 60, 60, PI/4, PI/2);
    rotate(PI/12*5+PI/12);
    translate(-25, 30);
    arc(100, -130, 60, 60, PI/8, PI/2);
    fill(c1);
    rotate(-PI/3);
    translate(40, -65);
    ellipse(width/4, height/4, 15, 7);
    
  }
  
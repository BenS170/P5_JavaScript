function setup() {
  createCanvas(1400, 600);
  background(220);
}

var guess = 'a';
var wrong_guesses = 0;
var word = "testing";


function keyPressed(){
  if(keyCode >= 65 && keyCode <= 90){
    guess = key;
    wrong_guesses++;
  }else if(keyCode == 13){
    guessing();
  }
}

function guessing(){

}

function getWord(){
  
}



function draw(){
  background(220);
  textSize(30);
  text('Your guess is: ' + guess, 100, 100);

  getWord();

  push();
  translate(width/3, 400);
  rect(0, 0, 300, 20);      //base
  translate(120, -300);
  rect(0, 0, 20, 300);      //height
  rect(0, 0, 150, 20);      //top edge
  translate(140, 20);
  line(0, 0, 0, 50);

  if(wrong_guesses>=1){     //head
    translate(0, 50);
    ellipse(0, 0, 40, 40);
  }
  if(wrong_guesses>=2){     //body
     translate(0, 20);
    line(0, 0, 0, 70);
  }
  if(wrong_guesses>=3){     //Left Arm
    line(0, 0, -30, 50);
  }
  if(wrong_guesses>=4){      //Right Arm
    line(0, 0, 30, 50);
  }
  if(wrong_guesses>=5){      //Left Leg
    translate(0, 70);
    line(0, 0, -30, 50);
  }
  if(wrong_guesses>=6){       //Right Leg
    line(0, 0, 30, 50);
  }
  pop();


}
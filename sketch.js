

var guess = 'a';
var wrong_guesses = 0;
var wrong_letters = "";
var word_arr = ["apple", "apricot", "blueberry", "cherry", "grapefruit", "honeydew", "kiwi", "lemon", "mandarin", "pineapple", "strawberry", "tangerine", "orange", "banana", "grape", "pear", "watermelon"];
var overall_word = "";
var current_word = "";

var victory_sound;
var loser_sound;
var play_sound = false;

function preload(){
  soundFormats('mp3', 'ogg');
  victory_sound = loadSound('/assets/crowd-cheer');
  loser_sound = loadSound('/assets/negative_beeps');
}

function setup() {
  createCanvas(1400, 600);
  background(220);
  getWord();
}

function keyPressed(){
  if(keyCode == 27){
    setup();
  }
  if(checkGameOver()){
    return;
  }
  if(keyCode >= 65 && keyCode <= 90){
    guess = key;
  }else if(keyCode == 13){
    guessing();
  }
}

function guessing(){
  var correct_guess = false;
  for(var i = 0; i<overall_word.length; i++){
    if(guess == overall_word[i]){
      let firstPart = current_word.substr(0, i*2);
      let secondPart = current_word.substr(i*2+1);
      current_word = firstPart + guess + secondPart;
      correct_guess = true;
    }
  }
  if(!correct_guess){
    wrong_guesses++;
    wrong_letters = wrong_letters + guess + " ";
  }
}

function getWord(){
  overall_word = "";
  current_word = "";
  wrong_guesses = 0;
  wrong_letters = "";
  play_sound = false;
  overall_word = random(word_arr);
  for(var i = 0; i<overall_word.length; i++){
    current_word = current_word + "_ ";
  }
}

function checkGameOver(){
  if(wrong_guesses >=6){
    return true;
  }
  for(var i = 0; i<current_word.length; i++){
    if(current_word[i] == '_'){
      return false;
    }
  }
  return true;
}



function draw(){
  background('#ADD8E6');

  if(checkGameOver()){
    textSize(50);
    if(wrong_guesses>= 6){
      text('You Lose D:', 1000, 200);
      textSize(30);
      text('Try Again?', 1000, 250);
      if(!play_sound){
        loser_sound.play();
        play_sound = true;
      }
    }else{
      text('You Win!!!', 1000, 200);
      if(!play_sound){
        victory_sound.play();
        play_sound = true;
      }
    }
  }

  textSize(30);
  text('Your guess is: ' + guess, 100, 100);

  push();
  translate(100, 200);
  textSize(30);
  text(current_word, 0, 0);
  pop();

  push();
  translate(100, 300);
  textSize(30);
  text("Wrong Guesses: \n" + wrong_letters, 0, 0);
  pop();
  
  push();
  fill('#964B00');
  translate(width/3, 400);
  rect(0, 0, 300, 20);      //base
  translate(120, -300);
  rect(0, 0, 20, 300);      //height
  rect(0, 0, 150, 20);      //top edge
  translate(140, 20);
  line(0, 0, 0, 50);

  fill(255)
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

  push();
  translate(width/2, height-100);
  textSize(20);
  text("Press ENTER to guess", 0, 0);
  text("Press ESC to Restart with a new word", 0, 30);

  pop();



}
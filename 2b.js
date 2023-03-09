let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('/assets/blaster-2');
}

function setup() {
  let cnv = createCanvas(1900, 960);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('tap here to play', 10, 20);
}

function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  mySound.play();
}
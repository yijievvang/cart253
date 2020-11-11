"use strict";

let mic;

let synth;


let keyNotes = [`F3`, `G3`, `Ab3`, `Bb3`, `C3`, `Db3`, `Eb3`, `F4`]; //f-minor

let currentkeyNote = 0;

let balls = [];

let notes = [];

function setup() {
  createCanvas(500, 500);

  //set up mic
  mic = new p5.AudioIn();
  mic.start();
  //when key pressed
  synth = new p5.PolySynth();

  userStartAudio();
}

function draw() {
  background(0);
  displayText();
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }

  jumpingCircle();
}

// circle moves up and down based on volume
function jumpingCircle() {
  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);
  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
}

function keyPressed() {
  //start the chaser music
  setInterval(playKeyNote, 400);
}

function playKeyNote() {
  let keyNote = keyNotes[currentkeyNote];
  synth.play(keyNote, 1, 0, 0.2);
  currentkeyNote = currentkeyNote + 1;
  if (currentkeyNote === keyNotes.length) {
    currentkeyNote = 0;
  }
}

function displayText() {
  fill(255, 0, 0);
  text("open your mic. tap to play ", width / 2, height / 2);
}

function createBall(x, y) {
  let note = random(notes);
  let ball = new Ball(x, y, note);
  balls.push(ball);
}

function mousePressed() {
  createBall(mouseX, mouseY);
}

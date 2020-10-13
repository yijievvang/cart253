"use strict";
let r = 0;
let g = 0;
let b = 0;
let titleString = "building Block";
let nextTitleString = "are you ready?";
let f;
let square1 = {
  x: 0,
  y: 0,
  gravity: 1,
  moveX: 1,
}

function preload() {
  letterA = loadImage('assets/images/a.jpg');
  f = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf");
}

let state = `title`;

function setup() {
  createCanvas(1000, 800);
  r = random(255);
  g = random(255);
  b = random(255);
}


function draw() {
  background(0);


  if (state === `title`) {
    title();
  } else if (state === `title2`) {
    title2();
  } else if (state === `drawBox`) {
    simulation();
  }


}

function title() {

  fill(r, g, b);
  textFont(f, 20);
  textSize(60);
  textAlign(CENTER);
  text(titleString, width / 2, height / 2);

}

function title2() {
  push();
  fill(r, g, b);
  textFont(f, 100);
  textSize(60);
  text(nextTitleString, width / 2, height / 2);
  pop();
}

function drawBox() {
  push();
  fill(r, g, b);
  square1.x = random(0 + 100, windowWidth);

  square(square1.x, -100, 100);
  pop();

}

function simulation() {
  dropBox();
}

function dropBox() {
  square1.y += square.gravity;
  square(mouseX, -100, 100);
}

function moveSquareX() {
  square1.x += square1.moveX;
}

function mouseClicked() {
  if (state === `title`) {
    state = `title2`;
  } else if (state === `title2`) {
    state = `drawBox`;
  } else if (state === `drawBox`) {
    state = `dropBox`;
  }

}

function keyPressed() {
  if (state === `simulation`) {
    state = `moveSquareX`;
  }

}

let backgroundColor = 0;
let r = 41;
let b = 100;
let g = 94;

let starX = {
  xposition: 0,
  yposition: 50,
  size: 50,
  speed: 20
}
let circleY = 300;
let circleSpeed = 2;
//
// property value. note: cannot have no values
// let ellipse1 = {
//   x: 0,
//   y: 250,
//   size: 200,
//   speed: 2

// setup()
//noStroke noFill
// Description of setup() goes here.function

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(41, 0, 60);
  //
  // shooting star
  fill(247, 241, 188);
  starX.xposition += starX.speed;

  if (starX.xposition > width || starX.xposition < 0) {
    starX.speed = -starX.speed
}
  circle(starX.xposition, starX.yposition, starX.size)
  //
  // Head
  stroke(74, 74, 68);
  strokeWeight(5);
  fill(255, 244, 99);
  ellipse(250, 250, 270, 300);
  //
  // Eyeball
  stroke(0, 0, 0)
  strokeWeight(3)
  fill(255, 255, 255);
  constrainedMouseX = constrain(mouseX, 230, 260)
  constrainedMouseY = constrain(mouseY, 190, 210)
  circle(constrainedMouseX, constrainedMouseY, 100);
  //
  // iris
  fill(60, 194, 244);
  constrainedMouseX = constrain(mouseX, 215, 275)
  constrainedMouseY = constrain(mouseY, 170, 230)
  circle(constrainedMouseX, constrainedMouseY, 50, 50)

  fill(0, 0, 0);
  ellipse(constrainedMouseX, constrainedMouseY, 20, 35)
  //
  // cheeks
  stroke(255, 0, 0)
  fill(255, 244, 99);
// sorry this is a big mass
  if (mouseX > 3 * width / 10 && mouseX < 7 * width / 10 && mouseY > 3 * width / 8 && mouseY < 6 * width / 8) {
    // "||" means either, or, and !() means not true
    fill(80, 244, 99);

  } else if (mouseX > width / 3 && mouseX < 2 * width / 3 && mouseY > width / 3 && mouseY < 3 * width / 4) {

      fill(140, 244, 99);

} else if (mouseX > width / 5) {
    if (mouseX < 4 * width / 5) {
      // b = map(mouseX, 50, 250, 385, 100, 250);
      fill(255, 244, 99);
    }
  } else {
    fill(255, 244, 99);
  }
  arc(180, 255, 50, 50, 3, 7, PI + QUARTER_PI, CHORD);
  point(175, 245);
  point(190, 240);
  point(184, 255);
  // mouth
  stroke(0, 0, 0)
  strokeWeight(4)
  noFill();
  arc(250, 260, 140, 40, 0, PI);
  //
  // Teeth
  stroke(0, 0, 0)
  strokeWeight(3)
  fill(255, 255, 255);
  rectMode(250, 250)
  rect(210, 280, 30, 30);
  rect(260, 280, 30, 30);

}

function mousePressed() {
  function draw() {
    circle(circle)
  }
  console.log(mouseX, mouseY);
}

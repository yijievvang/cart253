/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let backgroundColor = 0;
let  r = 41
let  b = 100
let  g = 94


let circleSize = 100;
let circleX = 1
let circleY = 250
let circleSpeed = 2

// property value. note: cannot have no values
let circle1 = {
  // x: 0,
  // y: 250,
  // size: 200,
  // speed: 2

}

let circle2 = {

}

// setup()
//noStroke noFill
// Description of setup() goes here.function

function setup() {
  createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {

background(r, g= 0, b);


  // Head
  stroke(74, 74, 68)
  strokeWeight(5)
  fill(255, 244, 99);
  ellipse(250, 250, 270, 300);



// holes

  // Eyeball

  stroke(0, 0, 0)
  strokeWeight(3)
  fill(255, 255, 255);
  // circleSize = circleSize -1;
circleX = circleX * 1
constrainedMouseX = constrain(mouseX, 230, 260)
constrainedMouseY = constrain(mouseY, 190, 210)
    // ellipse(250, 210, 100, 100);
circle(constrainedMouseX, constrainedMouseY, circleSize);

  // iris
    fill(60, 194, 244);
    // ellipse(250, 210, 50, 50)
    constrainedMouseX = constrain(mouseX, 215, 275)
    constrainedMouseY = constrain(mouseY, 170, 230)
    circle(constrainedMouseX, constrainedMouseY, 50, 50)

  fill(0, 0, 0);
ellipse(constrainedMouseX, constrainedMouseY, 20, 35)

    stroke(255, 0, 0)
    fill(255, 244, 99);
    arc(205, 260, 50, 50, 3, 7, PI + QUARTER_PI, CHORD);
    point(197,245);
    point(220,250);
    point(208,255);
  // mouth
  stroke(0, 0, 0)
  strokeWeight(4)
  noFill();
  arc(250, 260, 160, 40, 0, PI);
  // Teeth
  stroke(0, 0, 0)
  strokeWeight(3)
    fill(255, 255, 255);
    rectMode(250, 250)
    rect(210, 280, 30, 30);
    rect(260, 280, 30, 30);



}
function mousePressed() {
  function draw() { circle(circle)}
  console.log(mouseX,mouseY);
}

/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let backgroundColor = {
 r: 0,
 g: 0,
 b: 0,

}
// let circleSize = 200;
// let circleX = 50
// let circleY = 50
// let circleSpeed = 2

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
  background(196, 205, 255);
// +=







}

// draw()
//
// Description of draw() goes here.
function draw() {
// circle.x += circle.speed;



  // Head
  stroke(74, 74, 68)
  strokeWeight(5)
  fill(255, 244, 99);
  ellipse(250, 220, 270, 250);
    ellipse(250, 250, 250, 300);


// holes

  // Eyeball
  stroke(0, 0, 0)
  strokeWeight(3)
  fill(255, 255, 255);
    // ellipse(250, 210, 100, 100);
ellipse(mouseX, mouseY, 100, 100);
  // iris
    fill(60, 194, 244);
    // ellipse(250, 210, 50, 50)
    ellipse(mouseX, mouseY, 50, 50)

  fill(0, 0, 0);
    //ellipse(250, 210, 20, 35)
ellipse(mouseX, mouseY, 20, 35)
  // lashes
  rect(245,140, 10, 20)

    //cheeks
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
  beginShape();
    curveVertex(170, 255);

  curveVertex(207, 275);
    curveVertex(180, 260);
    curveVertex(222, 276);
    curveVertex(290, 276);

    curveVertex(350, 250);
    endShape();
  // Teeth
  stroke(0, 0, 0)
  strokeWeight(3)
    fill(255, 255, 255);
    rectMode(250, 250)
    rect(210, 280, 30, 30);
    rect(260, 280, 30, 30);

// text REMEMBER CSS LATER
// textSize(50)
// text('spoooooonge', 100, 200)


line(250, 0, 250, 500);

}
function mousePressed() {
  console.log(mouseX,mouseY);
}

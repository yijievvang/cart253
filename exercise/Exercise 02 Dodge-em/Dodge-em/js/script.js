let nose;

function preload() {
 nose = loadImage('assets\images\nose.png');
}
let covid19 = {
  x: 0,
  y: 200,
  size: 150,
  rad: 0,
  vx: 0,
  vy: 0,
  speed: 20,
  fill: 82,
  xDirection: 1,
  yDirection: 1,
}

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255,
}

let rectScale = {
  x: 0,
  xv: 0.03,
}

let angle = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
  image(img, 0, 0);
  covid19.x = random(1, width);
  covid19.y = random(1, height);
  covid19.vx += covid19.speed;
  covid19.vy += covid19.speed;
  // this is the property of the text which displays when user lost the game
  textFont('Helvetica');
  textSize(width / 3);
  textAlign(CENTER, CENTER);

}

function draw() {
  background(0);

  // display static. the variable is only needed once so the code is written here.
  for (let i = 0; i < 100; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }
  // this is the user's input, which is the x and y position of the mouse movement
  user.x = mouseX;
  user.y = mouseY;

  covid19.x = covid19.x + covid19.vx * covid19.xDirection;
  covid19.y = covid19.y + covid19.vy * covid19.yDirection;
  // push();
  //   fill(0);
  //   rectMode(CENTER);
  //   translate(width / 2, height / 2);
  //   rotate(angle);
  //   scale(rectScale.x);
  //   rect(0, 0, 100, 100);
  //
  //   fill(255);
  //   rotate(angle + 0.01);
  //   scale(rectScale.x * 0.05);
  //   rect(0, 0, 100, 100);
  //   fill(0);
  //   rotate(angle+0.01);
  //   scale(rectScale.x * 0.03);
  //   rect(0, 0, 100, 100);
  // pop();
  //
  // angle = angle + 0.05;
  // rectScale.x = rectScale.x + rectScale.xv;

  // this is the user's mouse identified as a circle object, which will be replace by an image
  push()
  fill(user.fill);
  image(nose, user.x - 50, user.y, user.size);
  pop()

  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < user.size / 2 + covid19.size / 2) {
    noloop();
    fill(255);
  }

  covid19.rad = covid19.size / 2;


  if (covid19.x > width - covid19.size || covid19.x < covid19.rad) {
    covid19.xDirection *= -1;
  }
  if (covid19.y > height - covid19.size || covid19.y < covid19.rad) {
    covid19.yDirection *= -1;
  }
  push()
  stroke(255, 0, 0);
  strokeWeight(8)
  fill(covid19.fill);
  ellipse(covid19.x, covid19.y, covid19.size);
  pop()


}

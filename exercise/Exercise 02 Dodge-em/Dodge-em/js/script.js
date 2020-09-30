let nose;

let covid19 = {
  x: 0,
  y: 200,
  size: 150,
  rad: 0, // radius
  vx: 0,
  vy: 0,
  speed: 15,
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

function preload() {
  nose = loadImage('assets/images/nose.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();

  covid19.x = width / 2;
  covid19.y = height / 2;
  covid19.vx += covid19.speed;
  covid19.vy += covid19.speed;
}

function draw() {
  background(0);

  // display other things in air. the let variables are only needed once so they are written here.
  for (let i = 0; i < 10; i++) {
    let x = random(0, width);
    let y = random(0, height);

    strokeWeight(80);
    stroke(255);
    point(x, y);
  }


  covid19.x = covid19.x + covid19.vx * covid19.xDirection;
  covid19.y = covid19.y + covid19.vy * covid19.yDirection;

  // place an image on where the mouse is
  push();
  fill(user.fill);
  image(nose, user.x, user.y, 300, 200);
  pop();

  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < user.size / 2 + covid19.size / 2) {
    noloop();
  }
  else {
      fill(255);
  }
// bounce ball effect
  covid19.rad = covid19.size / 2;


  if (covid19.x > width - covid19.size || covid19.x < covid19.rad) {
    covid19.xDirection *= -1;
  }
  if (covid19.y > height - covid19.size || covid19.y < covid19.rad) {
    covid19.yDirection *= -1;
  }
  push();
  stroke(255, 0, 0);
  strokeWeight(8);
  fill(covid19.fill);
  ellipse(covid19.x, covid19.y, covid19.size);
  pop();


}
function mouseMoved() {
  // When the mouse button is pressed, move the circle to the mouse position
  user.x = mouseX;
  user.y = mouseY;
}

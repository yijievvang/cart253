let r = 0;
let g = 0;
let b = 0;
let sphere1 = {
  x: 0,
  y: 0,
  z: 0,
  size: 250,
  vx: 0,
  vy: 0,
  speed: 5,
}
let stone = {
  x: 0,
  y: 0,
  z: 0,
  size: 50,
  vx: 0,
  vy: 0,
  vz: 0,
  speed: 50,
  detailX: 0,
  detailY: 0,
}
let titleString = "Planet";
let nextTitleString = "press any key to start";
let f;


function preload() {
  earthImage = loadImage('assets/images/earth.png');
  f = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf");
}

let state = `title`;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  r = random(255);
  g = random(255);
  b = random(255);
stone.y= random(0, windowHeight);

}

function draw() {
  console.log(state)
  background(0);
  orbitControl(10, 10, 0.5);
  earth();

stone.x += stone.speed;

  if (state === `title`) {
    title();
  } else if (state === `title2`) {
    title2();
  } else if (state === `drawMeteorite`) {
    drawMeteorite();
    checkOverlap();
  } else if (state ===  `desaster`) {
    desaster();
  }
  if (keyIsDown(UP_ARROW)) {
      stone.y -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
        stone.y += 5;
      }


  //   checkoffscreen();
  //   function checkoffscreen(){
  //   // check if sphere1 has gone offscreen
  //   if (sphere1.x < 0 || sphere1.x > windowWidth || sphere1.y < 0 || sphere1.y> height){
  //     sphere1.x = sphere1.x * -1;
  //     sphere1.y = sphere1.y * -1;
  //   }
  // }
}

function title() {
  translate(0, 0, 300);
  fill(r, g, b);
  textFont(f, 20);
  textSize(100);
  textAlign(CENTER);
  text(titleString, 0, 0);

}

function title2() {
  push();
  translate(0, 0, 300);
  fill(r, g, b);

  textFont(f, 100);
  textSize(100);
  text(nextTitleString, 0, 0);
  pop();
}

function earth() {
  push();
  translate(0, sphere1.y, 0)
  rotateY(frameCount * 0.008);

  noStroke();
  fill(255, 102, 0);
  texture(earthImage);
  sphere(sphere1.size);
  pop();
}

function drawMeteorite() {
  push();
  translate(stone.x- width / 2, stone.y - height / 2, 0);
  ellipsoid(stone.size);
  rotateY(1);
  pop();
}
function checkOverlap(){
  let d = dist(sphere1.x, sphere1.y, sphere1.z, stone.x, stone.y, stone.z);
  if (d < sphere1.size / 2 + stone.size / 2) {
    state = `desaster`;
}
}
function desaster() {

    circle(20, 20, 400);

}

function keyPressed() {
  if (state === `title`) {
    state = `title2`;
  } else if (state === `title2`) {
    state = `drawMeteorite`;
}

}

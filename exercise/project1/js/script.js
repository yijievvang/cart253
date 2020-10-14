let r = 0;
let g = 0;
let b = 0;
let bc = {
  red:200,
  green:0,
  blue: 0,
}
let sphere1 = {
  x: 500,
  y: 0,
  z: 0,
  r: 100,
  vx: 0,
  vy: 0,
  speed: 1,

};
let meteorite = {
  x: 0,
  y: 0,
  z: 0,
  r: 80,
  vx: 0,
  vy: 0,
  vz: 0,
  speed: 5,
  detailX: 0,
  detailY: 0,
  userSpeed:5,
};
let st={
  x:500,
  y:0,
  z:-3000,
  r:0,
}
let titleString = "La Planète Bleue";
let nextTitleString = "press any key to start";
let happyEndingString = "love the planet";

let beginFont;

let button;
function preload() {
  earthImage = loadImage("assets/images/earth.png");
  meteoriteImage = loadImage("assets/images/meteorites.jpg");
  saturnImage = loadImage("assets/images/saturn.jpg");
  saturnRingImage= loadImage("assets/images/saturnRing.jpg");

  explosionImage = loadImage("assets/images/explosion.gif");
  beginFont = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
  );
}

let state = `openPhrase`;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  r = random(200,255);
  g = random(200,255);
  b = random(200,255);
  sphere1.x -=500
  meteorite.x = 0- width/2;
  meteorite.y = random(-height/2, height/2);
  st.r = sphere1.r*9.5
}

function draw() {

  background(bc.red,bc.green,bc.blue);
orbitControl();


  if (state === `openPhrase`) {
    openPhrase();
  } else if (state === `secondPhrase`) {
    secondPhrase();
  } else if (state === `drawEarth&Meteorite`) {
    earth();
    saturn();
    moveMeteorite();
    drawMeteorite();
    checkOverlap();
  } else if (state === `desaster`) {
    desaster();
  }else if (state === `happyEnding`) {
    happyEnding();
    earth();
  }
  if (keyIsDown(UP_ARROW)) {
    meteorite.y -= meteorite.userSpeed;
  }
  if (keyIsDown(DOWN_ARROW)) {
    meteorite.y += meteorite.userSpeed;
  }

}

function openPhrase() {
  push();
  translate(0, 0, 300);
  fill(r, g, b);
  textFont(beginFont, 20);
  textSize(100);
  textAlign(CENTER);
  text(titleString, 0, 0);
  pop();
}

function secondPhrase() {
  push();
  translate(0, 0, 300);
  fill(r, g, b);
  textAlign(CENTER);
  textFont(beginFont, 100);
  textSize(80);
  text(nextTitleString, 0, 0);
  pop();
}
function happyEnding(){

  happyEndingPhrase();

}
function happyEndingPhrase(){
  push();
  // translate(0, 0, 300);
  fill(0);
  textAlign(CENTER);
  textFont(beginFont, 100);
  textSize(80);
  text(happyEndingString, 0, 0,300);
  pop();
}
function earth() {
  push();
  translate(sphere1.x, sphere1.y, sphere1.z);
  rotateY(frameCount * 0.008)
  noStroke();
  fill(255, 102, 0);
  texture(earthImage);
  sphere(sphere1.r);
  updatebc();
  pop();
}
function saturn(){
  push();
  translate(900,0,st.z);
  noStroke();
  rotateY(frameCount * 0.008)
  texture(saturnImage);
  sphere(st.r);
  rotateX(80);
  // translate();
  texture(saturnRingImage);
  ellipse(0,0,st.r*5,st.r*3);
  pop();
}
function updatebc(){
  bc.red= map(meteorite.x,0,10000,130,0);
  bc.green= map(meteorite.y,0,10000,150,0);
  bc.blue= map(meteorite.x,0,10000,160,0);
  background(bc.red,bc.green,bc.blue);
  sphere(sphere1.r);
}
function moveMeteorite(){
  meteorite.x += meteorite.speed;

}
function drawMeteorite() {
  push();
  noStroke();
  translate(meteorite.x, meteorite.y, meteorite.z);
  texture(meteoriteImage);
  ellipsoid(meteorite.r);
  pop();
}

function checkOverlap() {
  let d = dist(sphere1.x, sphere1.y, sphere1.z, meteorite.x, meteorite.y, meteorite.z);
  if (d < sphere1.r + meteorite.r) {
  state = `desaster`;
} else if (meteorite.x > windowWidth/2){
  state = `happyEnding`;
}
}

function desaster() {
  image(explosionImage,0-2*width/5,0-height/2, 1500,1000);
}
function keyPressed() {
  if (state === `openPhrase`) {
    state = `secondPhrase`;
  } else if (state === `secondPhrase`) {
  state = `drawEarth&Meteorite`;
}
}
// function mousePressed(){
//   if (state === `happyending`) {
//   state = `earth`;
// }
// }

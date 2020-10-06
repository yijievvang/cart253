let circle1 = {
  x: undefined,
  y: 250,
  vx: 0,
  vy: 0,
  speed: 3,
  size: 100,
};
let circle2 = {
  x: undefined,
  y: 250,
  vx: 0,
  vy: 0,
  speed: 3,
  size: 100,
};
let state = `title`; // can be title, simulation,love,sadness



function setup() {
  createCanvas(500, 500);

  setupCircle()
}
function setupCircle() {
    //separate circles
      circle1.x = width / 3;
      circle2.x = 2 * width / 3;
      // Start circles moving in a random direction
      circle1.vx = random(-circle1.speed, circle1.speed);
      circle1.vy = random(-circle1.speed, circle1.speed);
      circle2.vx = random(-circle2.speed, circle2.speed);
      circle2.vy = random(-circle2.speed, circle2.speed);
}

function draw() {
  background(0);
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`){
    simulation();
  }
  else if (state === `love`){
    love();
  }
  else if (state === `sadness`){
    sadness();
  }

}
function title() {
  push();
  textSize(64);
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  text(`love??????`, width/2, height/2);
  pop();
}

function simulation() {
   move();
   checkoffscreen();
   checkoverlap();
   displaycircles();
 }

 function love() {
   push();
   textSize(64);
   fill(255, 0, 0);
   textAlign(CENTER, CENTER);
   text(`༼♥ل͜♥༽`, width/2, height/2);
   pop();
}
   function sadness() {
     push();
     textSize(64);
     fill(0, 0, 255);
     textAlign(CENTER, CENTER);
     text(`（；´д｀）ゞ `, width/2, height/2);
     pop();
}
function move() {
// move the circle
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}
function checkoffscreen(){
  // check if the circle has gone offscreen
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y> width || circle2.x < 0 || circle2.x > height || circle2.y < 0 || circle2.y> height){
    // sad ending
    state = `sadness`;
  }
}
function checkoverlap(){
  // check if the circles overlap
    let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
    if (d < circle1.size/2 + circle2.size/2){
      state = `love`;
      // happy ending
    }
  // check if the circle has gone offscreen
  if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y> width || circle2.x < 0 || circle2.x > height || circle2.y < 0 || circle2.y> height){
    // sad ending
  }
}
function displaycircles() {
  // display the circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed(){
 if (state === `title`){
     state = `simulation`;
 }

}

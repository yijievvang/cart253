let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();

  }

  class Bubble {
    constructor(tempx, tempy) {
      this.x = tempx;
      this.y = tempy;
      this.r = tempr;
      this.size = random(40, 80);
      this.color = color(255);
    }
    move() {
      this.x += random(-1, 1);
      this.y += random(-1, 1);
    }

    show() {
      noStroke();
      fill(this.color);
      ellipse(this.x, this.y, this.size);
    }
  }

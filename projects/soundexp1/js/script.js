"use strict";
let balls = [];

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}
  function createBall(x, y) {
    let ball = new Ball(x, y);
    balls.push(ball);
  }

  function mousePressed() {
    createBall(mouseX, mouseY);
  }

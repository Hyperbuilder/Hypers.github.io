// Array of Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.3-array-of-objects.html
// https://youtu.be/fBqaA7zRO58
// https://editor.p5js.org/codingtrain/sketches/1y_xfueO

let bubbles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}


function mouseDragged() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}
function draw() {
  background(random(0, 255), random(0, 255), random(0, 255));
  // textAlign(CENTER);
  // fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  // textSize(75);
  // text("DONT DO DRUGS KIDDOS", window.innerWidth / 2, window.innerHeight / 2);
  
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

  textAlign(CENTER);
  fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  textSize(random(70, 80));
  textStyle(BOLD)
  text("DO DRUGS LEAVE SCHOOL", window.innerWidth / random(1.5, 2.5), window.innerHeight / random(1.5, 2.5));

}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() { 
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(random(0, 255), random(0, 255),random(0, 255), random(0, 100));
    strokeWeight(20);
    fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    ellipse(this.x, this.y, this.r * 2);
  }


}
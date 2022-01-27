var width;
var height;

// Setup code goes here
function setup() {
  width = 450;
  height = 450;
  createCanvas(width, height);
}

var xpos = -100;
var xSpeed = 25;
// Draw code goes here
function draw() {
  background('#344354');
  fill('white');
  textAlign(CENTER);
  textSize(30);
  text("Hello World!", xpos, height/2);
  if(xpos < 225) {
    xpos += xSpeed;
    if(xSpeed != 2) {
      xSpeed-=1;
    }
  } 
  
}
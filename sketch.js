let img;

function setup() {
  img = loadImage("source.png");
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, 1280, 720);
  
  noStroke();
  
  fill(255,0,0);
  triangle(592, 209, 652, 230, 609, 275);
    
  fill(0,255,0);
  triangle(653, 231, 672, 309, 610, 274);
    
  fill(0,0,255);
  triangle(610, 274, 671, 308, 617, 334);
    

  
  
  
  if (mouseIsPressed === true) {
    console.log(mouseX, mouseY);
    
    
  }
}
let img;

function setup() {
  img = loadImage("source.png");
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, 1280, 720);
  
  noStroke();
  
  fill(255,0,0);
  triangle(584, 149, 673, 118, 676, 164);
    
  fill(0,255,0);
  triangle(673, 118, 676, 164, 738, 127);
    
  fill(0,0,255);
  triangle(738, 127, 676, 164, 757, 229);
  
  fill(225,0,0);
  triangle(676, 164, 757, 229, 654, 229);
  
  fill(0,255,0);
  triangle(591, 209, 676, 164, 654, 229);
  
  fill(0,0,255);
  triangle(584, 149, 676, 164, 591, 209);
    

  
  
  
  if (mouseIsPressed === true) {
    console.log(mouseX, mouseY);
    
    
  }
}
let img;

function setup() {
  img = loadImage("source.png");
  createCanvas(1280, 720);
}

function draw() {
  image(img, 0, 0, 1280, 720);
}
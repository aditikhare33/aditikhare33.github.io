let w = 1080;
let h = 1080; 
let t1 = 0;
let t2 = 0;
let t3 = 0;

function setup() {
  w = windowWidth;
  createCanvas(w, h);
  background(0);
  colorMode(HSB);

  t1 = random(0, 10);
  tt2 = random(0, 10);
}

function windowResized() {
  w = windowWidth
  resizeCanvas(w, h);
}

function draw() { 
  fill(color(t3, 255, 255));
  x = map(noise(t1), 0, 1, -0.5*w, 1.5*w);
  y = map(noise(t2), 0, 1, -0.5*h, 1.5*h);
  ellipse(x, y, width/15, width/15,  50);
          
  t1 +=  0.008;
  t2 += 0.008;
  if (t3 > 255) {
    t3 = 0;
  } else {
    t3++;
  }
}

let w = 2000;
let h = 800; 
let t1 = 0;
let t2 = 0;
let t3 = 0;
let size_slider;
let speed_slider;

function setup() {
  w = windowWidth;
  console.log(windowWidth);
  let cnv = createCanvas(w, h);
  cnv.parent("slinkie-container");
  cnv.style("aspect-ratio", "3/1");  
  background(255);
  colorMode(HSB);

  t1 = random(0, 10);
  t2 = random(0, 10);

  size_slider = createSlider(0.5, 5, 1.5, 0.01);
  size_slider.position(700, 310);

  speed_slider = createSlider(0.5, 3, 1, 0.01);
  speed_slider.position(700, 350);
}

function draw() { 
  fill(color(t3, 255, 255));
  x = map(noise(t1), 0, 1, 0, w);
  y = map(noise(t2), 0, 1, 0, h);
  let c = size_slider.value()*width/15;
  ellipse(x, y, c, c,  50);
          
  let speed = 0.008 * speed_slider.value();
  t1 +=  speed;
  t2 += speed;
  if (t3 > 359) {
    t3 = 0;
  } else {
    t3++;
  }
}

delete(w, h);
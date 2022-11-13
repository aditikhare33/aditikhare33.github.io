let  w = 400;
let h = 400;
let board;

class Board { 
    constructor(w, h) {
      this.w = w;
      this.h = h;
      this.smg_to_dry = false; // so don't do through dry loop if canvas empty 
    }

    mark_pixel(px, py, x, y) {
      this.smg_to_dry = true;
      if (px !== 0 && py !== 0) {
          strokeWeight(15);
          stroke(50);
          line(px, py, x, y);
      }
    }
            
    dry() {
      if (this.smg_to_dry === true) {
        let temp_smg_to_dry = false;
        loadPixels();
        let incr = 2.5;
        let pixel_len = 4*this.w*this.h;
        for (let i = 3; i < pixel_len; i+=4) {
          if (pixels[i] - incr >= 0) {
            pixels[i] -= incr;
          }
          if (pixels[i] - incr >= 0) {
            temp_smg_to_dry = true;
          }
        }
        this.smg_to_dry = temp_smg_to_dry;
        updatePixels();
      }
    }
}

function setup() {
  createCanvas(w, h);
  board = new Board(w, h);
  background(255);
  pixelDensity(1);
}

function draw() {
  // cursor(HAND);
  filter(BLUR, 1.5);
  board.dry();
}

function mousePressed(){ //dots
    board.mark_pixel(pmouseX, pmouseY, mouseX, mouseY);
}

function mouseDragged() { // #lines
    board.mark_pixel(pmouseX, pmouseY, mouseX, mouseY);
}
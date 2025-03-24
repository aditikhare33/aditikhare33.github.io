let w;
let h;

let blue = "#b3f3fb"// "#1380FF";
let yellow = "#FFFA66"; //"#F8E500"
let dark_yellow = "#F1E83C";
let red = "#feb036"// "#F40000";
let green = "#b1f695"// "#49d93d";
let white = 255;
let black = 0;
let colors = [blue, red, green, dark_yellow]; // white]; // #yellow]
//let curr_color = colors[int(random(0, len(colors)))]
let curr_color = 255;
let incr = 0.1;
let recent_window = 2.0/incr;
let bgColor = black;
let t_x = 0;
let t_y = 0;
let scl_x = 5.0;
let scl_y = 5.0;
let paused = false;

function setup() {
    t_x = random(0, 100);
    t_y = random(0, 100);
    let useSide;
    if (windowWidth < windowHeight) {
      useSide = windowWidth / 1.2;
    } else {
      useSide = windowHeight / 1.7;
    }

    w = useSide;
    h = useSide; 
    cnv = createCanvas(w , h * 1.1);
    cnv.parent("object-container");
    background(bgColor);
}

let recents = [];

function draw() {
    if (!paused) {
      let thickness = map(noise(t_x, t_y), 0, 1, 10, 10);
      strokeWeight(thickness);

      let x = map(noise(t_x), 0, 1, 0, w);
      let y = map(noise(t_y), 0, 1, 0, h);

      recents.push({'x': x, 'y':y, 'th': thickness, 'col': curr_color})

      if (recents.length == 1){
          point(x, y);
          point(y, x);
      } else {
          if (recents.length > recent_window*scl_x*scl_y) {
              recents.shift();
          }
          else {
              show_recents();
          }
      }

      t_x += incr;
      t_y += incr;
      //change_color()
    }
}

    
function change_color() {
    let chance = int(random(0, 100));
    if (chance == 1) {
        curr_color = colors[int(random(0, len(colors)))];
    }
}

function mousePressed() {
  paused = !paused;
}

function show_recents() {
    background(bgColor);
    let scl = scl_x;
    for(let row = 0; row < int(scl_y); row++) {
        for(let col = 0; col < int(scl_x); col++) {
            push();
            translate(w/scl_x*col, h/scl_y*row);
            rotate(PI/4.0);
            translate(w/18, -h/10);
            stroke(colors[int(row*scl+col)%colors.length]);
            
            let shift_upper = (row*scl_x + col + 1) * recent_window;
            let shift_lower = (row*scl_x + col) * recent_window;
            
            for (let i = 0; i < recents.length; i++) {
                if (i >= 4 && i <= shift_upper && i >= shift_lower) {
                    //stroke(item['col'])
                    
                    let item = recents[i];
                    let p_item = recents[i-1];
                    let p2_item = recents[i-4];
                    
                    strokeWeight(item['th']/(10));
                    
                    noFill();
                    curve(p2_item.x/scl, p2_item.y/scl, p_item.y/scl, p_item.x/scl, p_item.x/scl, p_item.y/scl, item.y/scl, item.x/scl);
                    // line(item.x/scl, item.y/scl, item.y/scl, item.x/scl);
                    // line(p_item.x/scl, p_item.y/scl, item.y/scl, item.x/scl);
                    
                    line(p_item.x/scl, p_item.y/scl, item.x/scl, item.y/scl);
                    line(p_item.y/scl, p_item.x/scl, item.y/scl, item.x/scl);
                }
            }
            pop();
        }
    }   
    if (recents.length >=recent_window*scl_x*scl_y) {
        setTimeout(show_recents, 100);
        fill(green);
        textStyle(BOLD);
        textSize(20 * h/800);
        text("p.s. you can click to pause / unpause the code ", w * 0.24, h * 1.02);
    } 
}
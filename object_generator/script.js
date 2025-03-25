const object_generator = function (p) {
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

    p.setup = function () {
        t_x = p.random(0, 100);
        t_y = p.random(0, 100);
        let useSide;
        if (p.windowWidth < p.windowHeight) {
          useSide = p.windowWidth / 2;
        } else {
          useSide = p.windowHeight / 1.7;
        }

        w = useSide;
        h = useSide; 
        cnv = p.createCanvas(w , h * 1.1);
        cnv.parent("object-container");
        cnv.style("border-radius", "5px");
        p.background(bgColor);
    }

    let recents = [];

    p.draw = function () {
        if (!paused) {
        let thickness = p.map(p.noise(t_x, t_y), 0, 1, 10, 10);
        p.strokeWeight(thickness);

        let x = p.map(p.noise(t_x), 0, 1, 0, w);
        let y = p.map(p.noise(t_y), 0, 1, 0, h);

        recents.push({'x': x, 'y':y, 'th': thickness, 'col': curr_color})

        if (recents.length == 1){
            p.point(x, y);
            p.point(y, x);
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
        let chance = p.int(p.random(0, 100));
        if (chance == 1) {
            curr_color = colors[p.int(p.random(0, p.len(colors)))];
        }
    }

    p.mousePressed = function () {
      paused = !paused;
    }

    function show_recents() {
        p.background(bgColor);
        let scl = scl_x;
        for(let row = 0; row < p.int(scl_y); row++) {
            for(let col = 0; col < p.int(scl_x); col++) {
                p.push();
                p.translate(w/scl_x*col, h/scl_y*row);
                p.rotate(p.PI/4.0);
                p.translate(w/18, -h/10);
                p.stroke(colors[p.int(row*scl+col)%colors.length]);
                
                let shift_upper = (row*scl_x + col + 1) * recent_window;
                let shift_lower = (row*scl_x + col) * recent_window;
                
                for (let i = 0; i < recents.length; i++) {
                    if (i >= 4 && i <= shift_upper && i >= shift_lower) {
                        //stroke(item['col'])
                        
                        let item = recents[i];
                        let p_item = recents[i-1];
                        let p2_item = recents[i-4];
                        
                        p.strokeWeight(item['th']/(10));
                        
                        p.noFill();
                        p.curve(p2_item.x/scl, p2_item.y/scl, p_item.y/scl, p_item.x/scl, p_item.x/scl, p_item.y/scl, item.y/scl, item.x/scl);
                        // line(item.x/scl, item.y/scl, item.y/scl, item.x/scl);
                        // line(p_item.x/scl, p_item.y/scl, item.y/scl, item.x/scl);
                        
                        p.line(p_item.x/scl, p_item.y/scl, item.x/scl, item.y/scl);
                        p.line(p_item.y/scl, p_item.x/scl, item.y/scl, item.x/scl);
                    }
                }
                p.pop();
            }
        }   
        if (recents.length >= recent_window*scl_x*scl_y) {
            console.log('refresh');
            setTimeout(show_recents, 100);
            p.fill(green);
            p.textStyle(p.BOLD);
            p.textSize(20 * h/800);
            p.text("p.s. you can click to pause / unpause the code ", w * 0.24, h * 1.02);
        } 
    }
}

const object_canvas = new p5(object_generator);

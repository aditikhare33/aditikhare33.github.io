let w = 1300;
let h = 1000;

let blue = "#1380FF";
let yellow = "#FFFA66"; //"#F8E500"
let red = "#F40000";
let green = "#49d93d";
let white = 255;
let colors = [blue, red, green]; // white]; // #yellow]
//let curr_color = colors[int(random(0, len(colors)))]
let curr_color = 255;
let incr = 0.1;
let recent_window = 3.0/incr;
let bgColor = yellow; //#255;
let t_x = 0;
let t_y = 0;

function setup() {
    t_x = random(0, 100);
    t_y = random(0, 100);  
    w = windowHeight; 
    h = windowHeight;      
    createCanvas(w, h);
    background(bgColor);
}

let recents = [];

function draw() {

    let thickness = map(noise(t_x, t_y), 0, 1, 6, 6);
    strokeWeight(thickness);
    
    let x = map(noise(t_x), 0, 1, 0, w);
    let y = map(noise(t_y), 0, 1, 0, h);
    
    recents.push({'x': x, 'y':y, 'th': thickness, 'col': curr_color})
    
    if (recents.length == 1){
        point(x, y);
        point(y, x);
    } else {
        if (recents.length > recent_window*25) {
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

function keyPressed() {
    if (keyCode == 32) {
        show_recents();
    }
}
    
function change_color() {
    let chance = int(random(0, 100));
    if (chance == 1) {
        curr_color = colors[int(random(0, len(colors)))];
    }
}

function show_recents() {
    background(bgColor);
    let scl = 5.0;
    for(let row = 0; row < int(scl); row++) {
        for(let col = 0; col < int(scl); col++) {
            push();
            translate(w/scl*col, h/scl*row);
            rotate(PI/4.0);
            translate(w/18, -h/10);
            stroke(colors[int(row*scl+col)%colors.length]);
            
            let shift_upper = (row*scl + col + 1) * recent_window;
            let shift_lower = (row*scl + col) * recent_window;
            
            for (let i = 0; i < recents.length; i++) {
                if (i >= 4 && i <= shift_upper && i >= shift_lower) {
                    //stroke(item['col'])
                    
                    let item = recents[i];
                    let p_item = recents[i-1];
                    let p2_item = recents[i-4];
                    
                    strokeWeight(item['th']/scl);
                    
                    noFill();
                    curve(p2_item.x/scl, p2_item.y/scl, p_item.y/scl, p_item.x/scl, p_item.x/scl, p_item.y/scl, item.y/scl, item.x/scl);
                    //line(item.x/scl, item.y/scl, item.y/scl, item.x/scl);
                    //line(p_item.x/scl, p_item.y/scl, item.y/scl, item.x/scl);
                    line(p_item.x/scl, p_item.y/scl, item.x/scl, item.y/scl);
                    line(p_item.y/scl, p_item.x/scl, item.y/scl, item.x/scl);
                }
            }
            pop();
        }
    }   
    if (recents.length >=recent_window*25) {
        fill(blue);
        text("PRESS SPACE FOR NEW OBJECTS", w/2.5 , h/20);
    } 
}
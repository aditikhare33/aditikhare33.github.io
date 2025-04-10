const slinkie = function (p) {
    let slinkie_w = 2000;
    let slinkie_h = 800; 
    let t1 = 0;
    let t2 = 0;
    let t3 = 0;
    //let size_slider;
    //let speed_slider;
    let useSide;

    p.setup = function () {
        slinkie_w = p.windowWidth;
        slinkie_h =  p.windowHeight;

        let cnv = p.createCanvas(slinkie_w, slinkie_h);
        cnv.parent("slinkie-container");
        cnv.style("border-radius", "5px"); 
        // cnv.style("aspect-ratio", "3/1");  
        // p.background(0);
        p.colorMode(p.HSB);

        t1 = p.random(0, 10);
        t2 = p.random(0, 10);

        size_slider = p.createSlider(0.5, 5, 1.5, 0.01);
        size_slider.parent("slinkie-container-size-slider");
        size_slider.position(10, 10, 'sticky');
        size_slider.attribute('id', 'size-slider');

        speed_slider = p.createSlider(0.5, 3, 1, 0.01);
        speed_slider.parent("slinkie-container-speed-slider");
        speed_slider.position(10, 30, 'sticky');
        speed_slider.attribute('id', 'speed-slider');
    }

    p.draw = function () { 
        p.fill(p.color(t3, 100, 100));
        x = p.map(p.noise(t1), 0, 1, 0, slinkie_w * 1.3);
        y = p.map(p.noise(t2), 0, 1, 0, slinkie_h * 1.3);
        c = size_slider.value() * slinkie_h/15;/* slinkie_h/8; */
        p.ellipse(x, y, c, c,  50);
                
        speed = 0.007 * speed_slider.value();
        t1 += speed;
        t2 += speed;
        if (t3 > 359) {
            t3 = 0;
        } else {
            t3++;
        }
    }

    delete(slinkie_w, slinkie_h);
}

const slinkieCanvas = new p5(slinkie);
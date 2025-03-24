const items = [
    { name: "take back bikes (2024-2025)",
      images: ['tbb-mobile-nav.png', 'tbb-mobile.png', 'tbb-desktop.png'], 
      description: `<a href='https://www.takebackbikes.org'>takebackbikes.org</a> is a bike share project based in Washtenaw County, Michigan that is committed to fighting for Palestinian liberation.`,
      imageStyling: 'short'
    },
    { name: 'object generator (2021)',
      images: [],
      description: `
            <div class="p5" id="object-container">
                <script language="javascript" type="text/javascript" src="/object_generator/script.js"></script>
            </div> 
            <p>
            modern ai image generation relies on the following: 
               <li> very large datasets (often <a href="https://www.universityofcalifornia.edu/news/how-ai-discriminates-and-what-means-your-google-habit-conversation-internet-studies-scholar">biased</a> and <a href="https://www.technologyreview.com/2023/05/02/1072556/we-need-to-bring-consent-to-ai/">taken without consent</a>) </li>
              <li> <a href="https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/">resource consuming</a> algorithms </li>
            </p>
            <p>
              this generator has no dataset. it takes output from a <a href="https://p5js.org/reference/p5/noise/">perlin noise function</a>, 
              adds horizontal symmetry, and then draws lines between the coordinates.
            </p>
            <p>
              it's like digital cloud watching; i often find myself seeing vases, lamps, or UFOs.
              i wonder what you will see
            </p>`,
      imageStyling: 'long'
    },
    {
      name: 'coming soon: secret diary (2025)',
      images: ['secret-diary.gif'],
      description: 'dissapearing lemon diary...',
      imageStyling: 'short'
    },
    /* { name: 'pacziczi-strology',
      images: [],
      description: 'before entering into the world of pacziczi, read this <a href="https://www.pacziczi.glitch.me"> required reading</a>. Then, once finished delve into <a href="https://www.blueberry-rising.glitch.me">my website</a>',
      imageStyling: 'short'
    } */
]

let div = ``;
for (const item of items) {
    let images = ``;
    if (item.images) {
        for (const image of item.images) {
            images +=`<img class="${item.imageStyling}" src="/static/coding/${image}">`;
        }
    }

    div += `
    <div class="noise-item">
        <h3>${item.name}</h3>
        <div class="noise-item-img">
          ${images}
        </div>
        <div class="noise-item-description translucent text">
            ${item.description}
        </div>
    </div>`;
}

document.querySelector('#noiseContainer').innerHTML = div;
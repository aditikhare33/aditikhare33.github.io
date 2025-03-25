const items = [
    { name: "take back bikes (2024-2025)",
      images: ['tbb-mobile-nav.png', 'tbb-mobile.png', 'tbb-desktop-smaller.png'], 
      description: `<a href='https://www.takebackbikes.org'>takebackbikes.org</a> is a bike share project based in Washtenaw County, Michigan that is committed to fighting for Palestinian liberation.`,
      imageStyling: 'codingImg'
    },
    { name: 'object generator (2021)',
      images: [],
      script: `
            <div class="p5 long" id="object-container">
                <script language="javascript" type="text/javascript" src="/object_generator/script.js"></script>
            </div> `,
      description:`
            <p>
            modern ai image generation relies on the following: 
               <li> very large datasets (often <a href="https://www.universityofcalifornia.edu/news/how-ai-discriminates-and-what-means-your-google-habit-conversation-internet-studies-scholar">biased</a> and <a href="https://www.technologyreview.com/2023/05/02/1072556/we-need-to-bring-consent-to-ai/">taken without consent</a>) </li>
              <li> <a href="https://www.washingtonpost.com/technology/2024/09/18/energy-ai-use-electricity-water-data-centers/">resource consuming</a> algorithms </li>
            </p>
            <p>
              this generator has no dataset. it takes output from a <a href="https://p5js.org/reference/p5/display/">perlin display function</a>, 
              adds horizontal symmetry, and then draws lines between the coordinates.
            </p>
            <p>
              it's like digital cloud watching; i often find myself seeing vases, lamps, or UFOs.
              i wonder what you will see
            </p>`,
      imageStyling: 'long'
    },
    { name: 'sentient slinkie (2021)',
      images: [],
      script: `
            <div class="p5 long" id="slinkie-container">
                <script language="javascript" type="text/javascript" src="/object_generator/sentient_slinkie.js"></script>
            </div> `,
      description:`A rainbow line that draws itself.`,
      imageStyling: 'short'
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
            images +=`<img class=${item.imageStyling} src="/static/coding/${image}">`;
        }
    }

    let script = item.script ? item.script : '';
    div += `
    <div class="display-item hidden1">
        <h3>${item.name}</h3>
        <div class="display-item-img">
          ${images}
        </div>
        ${script}
        <div class="display-item-description translucent text">
            ${item.description}
        </div>
    </div>`;
}

document.querySelector('#displayContainer').innerHTML = div;


$(function () {
  const { top, left } = $('#slinkie-container').offset();
  console.log(top, left);
  setTimeout(() => {
    const inputs = $("input");
    console.log(inputs[0]);
    inputs[0].style.top = top;
    inputs[0].style.left = left;
  }, 2000);
  //document.querySelector('input').style.top = top;
  //document.querySelector('input').style.left = left;
});
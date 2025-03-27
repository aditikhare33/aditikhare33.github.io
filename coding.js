
function displayCoding() {
  const items = [
    { name: "take back bikes (2024-2025)",
      images: ['tbb-mobile-how.png', 'tbb-desktop-smaller.png'], 
      description: `<a href='https://www.takebackbikes.org'>takebackbikes.org</a> is a bike share project based in Washtenaw County, Michigan that is committed to free bikes for all.`,
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
              this generator has no dataset. it takes output from a <a href="https://p5js.org/reference/p5/display/">perlin display function</a>, 
              adds horizontal symmetry, and then draws lines between the coordinates.
            </p>
            <p>
              it's like digital cloud watching; i often find myself seeing vases, lamps, or UFOs.
              i wonder what you will see.
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
      name: 'coming soon: secret diary',
      images: ['secret-diary.gif'],
      description: `this project is inspired by using lemon juice to write a diary entry! i'm working on optimizing it for web.`,
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
      <div class="display-item hidden2">
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
}

displayCoding();
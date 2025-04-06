
function displayCoding() {
  const items = [
    { name: "take back bikes",
      images: ['tbb-mobile-how2.png', 'tbb-desktop-smaller-pro.png'], 
      description: `<span class=""><a href="/websites/">Take Back Bikes</a> is a bike share project based in Washtenaw County, Michigan that is committed to Palestinian liberation. </span>`,
      imageStyling: 'codingImg'
    },
    { name: "conversations for every dinner table",
      images: ['repro-convos.png', 'manifesto.png'], 
      description: `<span class=""><a href="https://reproconvos.glitch.me">Conversations for Every Dinner Table</a> is a card game centered around reproductive health. This is a collaborative project: I implemented the mobile responsiveness. </span>`,
      imageStyling: 'codingImg'
    }
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
          ${script}
          <div class="display-item-img">
            ${images}
          </div>
          <div class="display-item-img display-item-description translucent text">
                ${item.description}
          </div>
          </div>
      </div>`;
  }

  document.querySelector('#displayContainer').innerHTML = div;
}

displayCoding();
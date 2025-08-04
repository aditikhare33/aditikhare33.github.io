const rootFolder = '/static/coding/';

function displayCoding() {
  const items = [
    { name: "ealopia",
      images: ['ealopia.png'],
      description: `<a href="ealopia.com">Ealopia</a> is a portfolio website for a protest photographer based in NYC. Made in collaboration with <a href="https://julz.mmm.page/">Julie Lam</a>.`,
      imageStyling: 'codingImg glow'
    },
    { name: "bike share",
      images: ['tbb-less-png.png'], 
      description: `A website for bike share project based in Michigan that is committed to free bikes for all. </span>`,
      imageStyling: 'codingImg glow'
    },
    { name: "conversations for every dinner table",
      images: ['repro-convos.png', 'manifesto.png'], 
      description: `<span class="hidden1"><a href="https://reproconvos.glitch.me">Conversations for Every Dinner Table</a> is a card game centered around reproductive health. This is a collaborative project; my role was making sure you can play on your phone. </span>`,
      imageStyling: 'codingImg2 glow'
    }
    /* { name: 'pacziczi-strology',
      images: [],
      description: 'before entering into the world of pacziczi, read this <a href="https://www.pacziczi.glitch.me"> required reading</a>. Then, once finished delve into <a href="https://www.blueberry-rising.glitch.me">my website</a>',
      imageStyling: 'short'
    } */
  ]

  let div = ``;
  let imgFirst = false;
  for (const item of items) {
      let images = ``;
      for (const image of item.images) {
          images +=`<img class="${item.imageStyling}" src=${rootFolder}${image}>`;
      }
  
      const imageDiv = `<div class="display-item-img">
                  ${images}
                </div>`
      const descriptionDiv = `
      <div>
        <h3>${item.name}</h3>
        <div class="display-item-description translucent text">
          ${item.description}
        </div>
      </div>`;
      const displayBody = imgFirst ? `${imageDiv}${descriptionDiv}` : `${descriptionDiv}${imageDiv}`;
      div += `
      <div class="display-item hidden2">
        <div class="flex-container">
          ${displayBody}
        </div>
      </div>`;

      //imgFirst = !imgFirst;
  }
  
  document.querySelector('#displayContainer').innerHTML = div;  
}

displayCoding();
const rootFolder = '/coding-new/img/';

function display(title, items) {
  let div = ``;
  div += `<div><h2> ${title} </h2></div>`
  div+= `<div class="coding-container">`;
  for (const item of items) {
    let images = ``;
    if (item.images) {
        for (const image of item.images) {
            images +=`<img class="card-img-top" src="${rootFolder}${image}">`;
        }
    }
    const link = item.link ? item.link : '/';
    div += `
    <div href="${link}" class="card hidden1">
        ${images}
        <a href="${link}">
          <div class="overlay">
            <div class="text-coding">
              <div class="card-description">
                  <p class="hidden1">
                          <div class="card-title">${item.name}</div>
                  ${item.description}
                  </p>
              </div>
            </div>
          </div>
        </a>
    </div>
    </a>`;
  } 
  div+= `</div>`;
  return div;
}

function displayCoding() {
    const websites = [
      { name: "take back bikes",
        images: ['tbb-mobile.png'], 
        imageStyling: 'sketch-short',
        description: `a website for bike share project based in Washtenaw County, Michigan that is committed to Palestinian liberation. </span>`,
        link: 'https://www.takebackbikes.org'
      },

      { name: "conversations for every dinner table",
        images: ['repro-convos.png'], 
        imageStyling: 'sketch-short',
        description: `a website for a card game centered around reproductive health. a collaborative project: I implemented the mobile responsiveness. </span>`,
        link: 'https://reproconvos.glitch.me'
      }
      /*
      { name: 'pacziczi-strology',
        images: ['pacziczi.png'],
        imageStyling: 'sketch-short',
        description: `Unlock your secret powers...`
      } */
    ];

    const gen_art = [
      { name: 'object generator',
        images: ['obj.gif'],
        imageStyling: 'sketch-short',
        description:`
              this generator has no dataset. an experiment on symmetry and recognizability!`,
        link: '/object-generator-page/'
      },
      { name: 'sentient slinkie',
        images: ['slinkie.gif'],
        imageStyling: 'sketch-short',
        description:`<span class="hidden1"> a rainbow line that draws itself. </span>`,
        link: '/sentient-slinkie-page/'
      },
      {
        name: 'Lemon Swirl',
        images: ['secret-diary.gif'],
        imageStyling: 'sketch-short',
        description: `<span class="hidden1"> This project is inspired by using lemon juice to write a diary entry! I'm working on optimizing it for web. </span>`
      }
    ];

    const div1 = display(`websites`, websites);
    const div2 = display(`generative art`, gen_art);
    
  
    document.querySelector('#codingContainer').innerHTML = div1 + `<br>` + div2;
  }
  
displayCoding();

/*
              <div class="card-title">${item.name}</div>
              <div class="card-description">
                  <p class="hidden1">${item.description}</p>
              </div>
              */
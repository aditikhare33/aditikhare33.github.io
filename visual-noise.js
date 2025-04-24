const rootFolder = '/static/visual-noise-smaller/';
const items = [
    { name: "hide and seek; near a blue window",
      images: ['hide.png', 'seek.png'], 
      description: `<span class="hidden1"> digital work, <a href='https://www.ouch.studio/zine/luck'>featured in OUCH! magazine ed.10: Luck</a> </span>`,
      imageStyling: 'short'
    },
    { name: 'cryptid',
      images: ['bg-cryptid.png'],
      imageStyling: 'short'
    },
    { name: 'a winter tree in headlights; a toy rabbit i left on a stool in 2007',
      images: ['tree-headlight.png', 'rabbit.png'],
      imageStyling: 'tall'
    },
    /*
    { name: 'a winter tree in headlights',
      images: ['tree-headlight.png'],
      imageStyling: 'tall'
    },
    /*
    { name: 'untitled (2021)',
      images: ['hug.png'],
      description: 'digital work',
      imageStyling: 'short'
    },
    { name: 'swimming lesson (2022)',
      images: ['swimming-lesson.png'],
      description: 'digital work',
      imageStyling: 'tall'
    },
    { name: 'untitled (2021)',
      images: ['pollen.png', 'pollen2.png', 'pollen3.png'],
      description: 'digital work',
      imageStyling: 'tall'
    } */
]

let div = ``;

for (const item of items) {
    let images = ``;
    for (const image of item.images) {
        images +=`<img class=${item.imageStyling} src=${rootFolder}${image}>`;
    }

    const description = item.description ?? '';
    div += `
    <div class="display-item">
        <h3 style="text-transform: none !important;">${item.name}</h3>
        <div class="display-item-img">
          ${images}
        </div>
        <div class="display-item-description translucent text-visual-display">
            ${description}
        </div>
    </div>`;
}

document.querySelector('#displayContainer').innerHTML = div;
const rootFolder = '/static/visual-noise-smaller/';
const items = [
    { name: "hide and seek near a blue window (2022)",
      images: ['hide.png', 'seek.png'], 
      description: `digital work, <a href='https://www.ouch.studio/zine/luck'>featured in OUCH! magazine ed.10: Luck</a>`,
      imageStyling: 'short'
    },
    { name: 'cryptid (2023)',
      images: ['bg-cryptid.png'],
      description: 'digital work',
      imageStyling: 'short'
    },
    { name: 'my memories are overexposed and faraway (2021)',
      images: ['tree-headlight.png', 'rabbit.png'],
      description: 'digital work: tree in headlights, a toy rabbit i left on a stool in 2007',
      imageStyling: 'tall'
    },
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
    }
]

let div = ``;
for (const item of items) {
    let images = ``;
    for (const image of item.images) {
        images +=`<img class=${item.imageStyling} src=${rootFolder}${image}>`;
    }

    div += `
    <div class="display-item hidden2">
        <h3>${item.name}</h3>
        <div class="display-item-img">
          ${images}
        </div>
        <div class="display-item-description translucent text-visual-display">
            ${item.description}
        </div>
    </div>`;
}

document.querySelector('#displayContainer').innerHTML = div;

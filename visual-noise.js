const items = [
    { name: "hide and seek near a blue window (2022)",
      images: ['/static/img/hide.png', '/static/img/seek.png'], 
      description: `digital work, <a href='https://www.ouch.studio/zine/luck'>featured in OUCH! magazine ed.10: Luck</a>`,
      imageStyling: 'short'
    },
    { name: 'cryptid (2023)',
      images: ['/static/img/bg-cryptid.png'],
      description: 'digital work',
      imageStyling: 'short'
    },
    { name: 'my memories are overexposed and faraway (2021)',
      images: ['/static/img/tree-headlight.png', '/static/img/rabbit.png'],
      description: 'digital work: tree in headlights, a toy rabbit i left on a stool in 2007',
      imageStyling: 'tall'
    },
    { name: 'hug (2020)',
      images: ['/static/img/hug.png'],
      description: 'digital work',
      imageStyling: 'short'
    },
    { name: 'swimming lesson (2020)',
      images: ['/static/img/swimming-lesson.png'],
      description: 'digital work',
      imageStyling: 'tall'
    },
    { name: 'pollen (2020)',
      images: ['/static/img/Miss/pollen.png', '/static/img/Miss/pollen2.png', '/static/img/Miss/pollen3.png'],
      description: 'digital work',
      imageStyling: 'tall'
    }
]

let div = ``;
for (const item of items) {
    let images = ``;
    for (const image of item.images) {
        images +=`<img class="${item.imageStyling}" src=${image}>`;
    }

    div += `
    <div class="noise-item">
        <h3>${item.name}</h3>
        <div class="noise-item-img">
          ${images}
        </div>
        <div class="noise-item-description text-visual-noise">
            ${item.description}
        </div>
    </div>`;
}

document.querySelector('#noiseContainer').innerHTML = div;

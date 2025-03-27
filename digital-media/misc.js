const rootFolder = '/static/digital-media/';
const items = [
    { name: "Digital Content Creation (2022-2023)",
      images: ['uaao-dig-media2.png', 'uaao-dig-media3.png', 'mic-dig-media1.png'], 
      description: `Digital content creation for @unitedasianamericanorganizations and @michiganincolor`,
      imageStyling: 'sketch-short'
    },
    { name: 'Print Media Illustrations: Michigan in Color (2022-2023)',
      images: ['mic1.png', 'mic2.png', 'mic3.png'],
      imageStyling: 'sketch-short',
      description: 'Dgital illustrations for article graphics on tight weekly deadlines for the Michigan in Color newspaper.'
    },
    { name: 'Website Background: Queer in Color (2023)',
        images: ['queer-in-color.png'],
        imageStyling: 'sketch-short',
        description: 'Digital graphic for the Michigan in Color, <a href="https://mic.michigandaily.com/queer-in-color-2023/"> Queer in Color website </a> background.'
    },
    { name: 'Print Media Illustrations: Asian Amerian Zines (2022-2023)',
      images: ['uaao-zine1.png', 'uaao-zine2.png'],
      description: `Back cover for the <a href=https://issuu.com/uaaoumich'> UAAO Ed. 6 and Ed. 7 zines</a>`,
      imageStyling: 'short'
    }
]

let div = `<div class="display-item hidden2"> <h3> MISC: DIGITAL MEDIA SAMPLES </h3> </div>`;
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
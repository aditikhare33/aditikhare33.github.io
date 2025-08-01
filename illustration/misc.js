const rootFolder = '/static/digital-media/';
const items = [
    { name: 'the michigan daily (2022 - 2023)',
      images: ['mic1.png', 'mic2.png', 'mic3.png', 'mic4.png'],
      imageStyling: 'super-short',
      description: 'Below is a selection of illustrations from my tenure at <a href="https://www.michigandaily.com/michigan-in-color/where-are-you-from-a-reflection-on-residential-segregation"> The Michigan Daily</a>, an independent newspaper serving the broader Ann Arbor, MI community. Specifically, I worked in Michigan in Color section, which is run for and by people of color, collaborating with authors on article graphics.'
    },
    {
      name: 'animal ABCs (2022)',
      images: ['A-for-Apple-Project.jpg'],
      imageStyling: 'short',
      description: 'An Animal ABCs poster for a client.'
    },
    { name: "hide and seek; near a blue window (2022)",
      images: ['hide-n-seek.png'], 
      description: `<span class="hidden1"> Digital work, <a href='https://www.ouch.studio/zine/luck'>featured in OUCH! magazine ed.10: Luck</a> </span>`,
      imageStyling: 'tall'
    },

    { name: 'Something of You I Found in Me (2025)',
      images: ['something-of-me-i-found-in-you.png'],
      imageStyling: 'tall',
      description: 'Acrylic and colored pencil on canvas'
    },
    { name: 'queer in color (2023)',
        images: ['queer-in-color.png'],
        imageStyling: 'sketch-short',
        description: 'Digital graphic for the Michigan in Color, <a href="https://mic.michigandaily.com/queer-in-color-2023/"> Queer in Color</a> website background.'
    },
    { name: 'zine covers (2022-2023)',
      images: ['uaao-zine1.png', 'uaao-zine2.png'],
      description: `Designed zine covers for United Asian American Organizations, a racial advocacy collective.`,
      imageStyling: 'short'
    }
]


let divHeader = `,.-~*¨¯¨*·~-.¸-below is my illustration portfolio, thank you for stopping by.-,.-~*¨¯¨*·~-.¸`;
let div = `<div class="text base-margin" style="text-align: center;">${divHeader}</div>`
for (const item of items) {
    let images = ``;
    for (const image of item.images) {
        images +=`<img class=${item.imageStyling} src=${rootFolder}${image}>`;
    }

    div += `
    <div class="display-item hidden2">
        <h3 style="text-transform: none !important;">${item.name}</h3>
        <div class="display-item-description translucent text-visual-display" style='text-align: left;'>
            ${item.description}
        </div>
        <div class="display-item-img">
          ${images}
        </div>
    </div>`;
}

document.querySelector('#displayContainer').innerHTML = div;
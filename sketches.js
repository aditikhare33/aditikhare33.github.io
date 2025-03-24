const image_names = [
    'bus-comic.png',
    'handy.jpg',
    'sunshine.png',
    'wolfy.png',
    'dancing-monster.png',
    'home.png',
    'dance.png',
    'devil-with-wine-glass.jpg',
    'pinkjob.png',
    'egg-sperm.png',
    'pinkjob3.png',
    'chai-spot.png',
    'emo1.png',
    'emo2.png',			
    'sleepy-shirt.png',
    'emo3.png',
    'flushing.png',
    'drool.png',
    'yearn.png',
    'basketball.png'
]

let images = ``;
for (const image of image_names) {
    images +=`<img class="short" src="/static/sketches/${image}">`;
}

const div = `
<div class="noise-item">
    <div class="noise-item-img">
        ${images}
    </div>
</div>`;

document.querySelector('#noiseContainer').innerHTML = div;
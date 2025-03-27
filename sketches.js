const rootFolder = '/static/sketches-smaller/';
const imageNames = [
    'dancing-monster.png',
    'yearn.png',
    'handy.jpg',
    'sunshine.png',
    'wolfy.png',
    'bus-comic.png',
    'home.png',
    'dance.png',
    'devil-with-wine-glass.jpg',
    'pinkjob.png',
    'egg-sperm.png',
    'pinkjob3.png',
    'chai-spot.png',
    'emo1.png',
    // 'emo2.png',			
    'sleepy-shirt.png',
    'emo3.png',
    'flushing.png',
    'drool.png',
    'basketball.png'
]

let images = ``;
for (const image of imageNames) {
    images +=`<img class="sketch-short hidden2" src="${rootFolder}${image}">`;
}

let div = `
<div class="display-item">
    <div class="display-item-img">
        ${images}
    </div>
</div>`;

document.querySelector('#displayContainer').innerHTML = div;
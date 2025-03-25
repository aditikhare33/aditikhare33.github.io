const rootFolder = '/static/sketches-smaller/';
const imageNames = [
    'yearn.png',
    'handy.jpg',
    'sunshine.png',
    'wolfy.png',
    'bus-comic.png',
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
    'basketball.png'
]

let images = ``;
for (const image of imageNames) {
    images +=`<img class="short" src="${rootFolder}${image}">`;
}

const div = `
<div class="display-item">
    <div class="display-item-img">
        ${images}
    </div>
</div>`;

document.querySelector('#displayContainer').innerHTML = div;
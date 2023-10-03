// import { Player, Foreground, Obstacle } from './Objects.js';
// import Player from './Player.js';
import { setup, clear } from './setup.js';

document.querySelectorAll('.show').forEach(e => e.addEventListener('mouseover', () => {
    document.getElementById('arrow').style.opacity = 1;
    document.getElementById('paste_links').style.opacity = 1;
}));

document.querySelectorAll('.show').forEach(e => e.addEventListener('mouseout', () => {
    document.getElementById('arrow').style.opacity = 0;
    document.getElementById('paste_links').style.opacity = 0;
}));

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

let [dino, ground, cactus] = setup(canvas, context);
console.log(dino, ground, cactus);

function gameLoop() {
    dino.update();
    cactus.update();
    ground.update();
    clear(canvas);

    ground.draw();
    dino.draw();
    cactus.draw();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
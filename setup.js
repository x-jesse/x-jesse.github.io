import Player from './Player.js';
import Foreground from './Foreground.js';
import Obstacle from './Obstacle.js';

const PLAYER_START_POS = [20, 85];
const GROUND_POS = [0, 125];
const VIEWPORT_WIDTH = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const ASPECT_RATIO = window.devicePixelRatio || 1;
const DINO_ASPECT_RATIO = 94 / 88;

export const SPRITES = {'dino_still': [76, 97], 'dino_jump': [1675, 88, 97], 'dino_run1': [1855, 88, 97], 'dino_run2': [1943, 88, 97]}

export function setup(canvas, context) {
    canvas.width = VIEWPORT_WIDTH;
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    canvas.height *= ASPECT_RATIO;
    context.fillStyle = 'white';
    context.scale(ASPECT_RATIO, ASPECT_RATIO);

    let dino = new Image();
    let cactus = new Image();
    let ground = new Image();

    dino.src = "assets/standing_still.png";
    cactus.src = "assets/cactus_1.png";
    ground.src = "assets/ground.png";

    let player = new Player(context, PLAYER_START_POS[0], PLAYER_START_POS[1], dino);
    let foreground = new Foreground(context, GROUND_POS[0], GROUND_POS[1], ground);
    let obstacle = new Obstacle(context, 250, 30, cactus);

    return [player, foreground, obstacle]
}

export function clear(canvas) {
    canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
}

function getSprites() {


}
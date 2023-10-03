const BASE_GAME_SPEED = 15;

export default class Obstacle {
    obstacleQueue = 0;

    constructor(context, xPosition, yPosition, sprite) {
        this.context = context;
        this.xPos = xPosition;
        this.yPos = yPosition;
        this.sprite = sprite;

        this.width = 10;
        this.height = 40;
    }

    update() {
        this.xPos -= BASE_GAME_SPEED;
    }

    generate() {

    }

    draw() {
        this.context.drawImage(this.sprite, this.xPos, this.yPos, this.width, this.height);
    }
}
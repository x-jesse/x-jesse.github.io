const BASE_GAME_SPEED = 15;

export default class Obstacle {
    static obstacleQueue = [];

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
        let max = 200, min = 100;
        let queueXPos = Math.floor(Math.random() * (max - min + 1) + min);

        obstacleQueue.push(new Obstacle())
    }

    draw() {
        this.context.drawImage(this.sprite, this.xPos, this.yPos, this.width, this.height);
    }
}
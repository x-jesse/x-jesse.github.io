const BASE_GAME_SPEED = 15;

export default class Foreground {
    constructor(context, xPosition, yPosition, sprite) {
        this.context = context;
        this.xPos = xPosition;
        this.yPos = yPosition;
        this.sprite = sprite;

        this.width = 1000;
        this.height = 14;
    }

    update() {
        this.xPos -= BASE_GAME_SPEED;
    }

    draw() {
        this.context.drawImage(this.sprite, this.xPos, this.yPos, this.width, this.height);
        this.context.drawImage(this.sprite, this.xPos + this.width, this.yPos, this.width, this.height);
        if (this.xPos < -this.width) {
            this.xPos = 0;
        }
    }
}
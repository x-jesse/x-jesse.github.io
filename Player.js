const DINO_ASPECT_RATIO = 94 / 88;
const DINO_RUN = [new Image(), new Image()];
DINO_RUN[0].src = 'assets/dino_run1.png';
DINO_RUN[1].src = 'assets/dino_run2.png';

export default class Player {
    isFalling = false;
    isJumping = false;
    aspectRatio = window.devicePixelRatio || 1;
    runAnimationTimer = 0;
    runAnimationDuration = 10;

    constructor(context, xPosition, yPosition, sprite) {
        this.context = context;
        this.xPos = xPosition;
        this.yPos = yPosition;
        this.baseY = yPosition;
        this.sprite = sprite;

        // set height based on canvas height
        this.h = 60;

        // scale width based on height and canvas aspect ratio
        this.w = this.h / DINO_ASPECT_RATIO / this.aspectRatio; 
        // this.w = this.h / DINO_ASPECT_RATIO * context.canvas.height / context.canvas.width; 

        this.jumpSpeed = 5;
        this.fallSpeed = 5;
        this.maxJumpHeight = 70;
        this.maxDeltaY = this.yPos - this.maxJumpHeight;

        window.addEventListener('keydown', e => {
            if (!this.isFalling && (e.key == ' ' || e.key == 'ArrowUp')) {
                this.isJumping = true;
            }
        });
    }

    update() {
        if (this.isJumping) {
            // this.sprite = 
            if (this.maxDeltaY >= this.yPos) {
                this.isFalling = true;
                this.isJumping = false;
            } else {
                this.yPos -= this.jumpSpeed;
            }
        } else if (this.isFalling) {
            if (this.yPos < this.baseY) {
                this.yPos = Math.min(this.fallSpeed + this.yPos, this.baseY);
            } else {
                this.isFalling = false;
                this.isJumping = false;
            }
        } else {
            if (this.runAnimationTimer == this.runAnimationDuration / 2) {
                this.sprite = DINO_RUN[1];
                // this.runAnimationTimer = 0;
            } else if (this.runAnimationTimer == this.runAnimationDuration) {
                this.sprite = DINO_RUN[0];
            }
            if (this.runAnimationTimer < this.runAnimationDuration) {
                this.runAnimationTimer++;
            } else {
                this.runAnimationTimer = 0;
            }
        }
    }

    draw() {
        this.context.drawImage(this.sprite, this.xPos, this.yPos, this.w, this.h);
    }

}
// const DINO_ASPECT_RATIO = 94 / 88;
// const SCALE_FACTOR = 1;
// const GRAVITY = 1.3;
// const BASE_GAME_SPEED = 15;

// export class Player {
//     isFalling = false;
//     isJumping = false;
//     aspectRatio = window.devicePixelRatio || 1;

//     constructor(context, xPosition, yPosition, sprite, width=NaN) {
//         this.ctx = context;
//         this.x = xPosition;
//         this.y = yPosition;
//         this.baseY = yPosition;
//         this.spr = sprite;

//         // set height based on canvas height
//         this.h = 50;

//         // scale width based on height and canvas aspect ratio
//         this.w = this.h / DINO_ASPECT_RATIO / this.aspectRatio; 
//         // this.w = this.h / DINO_ASPECT_RATIO * context.canvas.height / context.canvas.width; 

//         this.jumpSpeed = 5;
//         this.fallSpeed = 10;
//         this.maxJumpHeight = 40;
//         this.maxDeltaY = this.y - this.maxJumpHeight;

//         window.addEventListener('keydown', e => {
//             if (!this.isFalling) {
//                 this.isJumping = true;
//             }
//         });
//     }

//     update() {
//         if (this.isJumping) {
//             if (this.maxDeltaY >= this.y) {
//                 this.isFalling = true;
//                 this.isJumping = false;
//             } else {
//                 this.y -= this.jumpSpeed;
//             }
//         } else if (this.isFalling) {
//             if (this.y < this.baseY) {
//                 this.y = Math.min(this.fallSpeed + this.y, this.baseY);
//             } else {
//                 this.isFalling = false;
//                 this.isJumping = false;
//             }
//         }
//     }

//     draw() {
//         this.ctx.drawImage(this.spr, this.x, this.y, this.w, this.h);
//     }

// }

// export class Foreground {
//     constructor(ctx, xPosition, yPosition, sprite) {
//         this.ctx = ctx;
//         this.x = xPosition;
//         this.y = yPosition;
//         this.spr = sprite;

//         this.w = 1000;
//         this.h = 14;
//     }

//     update() {
//         this.x -= BASE_GAME_SPEED;
//     }

//     draw() {
//         this.ctx.drawImage(this.spr, this.x, this.y, this.w, this.h);
//         this.ctx.drawImage(this.spr, this.x + this.w, this.y, this.w, this.h);
//         if (this.x < -this.w) {
//             this.x = 0;
//         }
//     }
// }

// export class Obstacle {
//     constructor(ctx, xPosition, yPosition, sprite) {
//         this.ctx = ctx;
//         this.x = xPosition;
//         this.y = yPosition;
//         this.spr = sprite;

//         this.w = 10;
//         this.h = 40;
//     }

//     update() {
//         this.x -= BASE_GAME_SPEED;
//     }

//     draw() {
//         this.ctx.drawImage(this.spr, this.x, this.y, this.w, this.h);
//     }
// }
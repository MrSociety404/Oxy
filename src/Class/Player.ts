import { GRAVITY } from "../Config";
import Scene from "./Scene";

/**
 * Player of the game
 */
export class Player {
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
  dy = 0;
  dx = 0;
  color: string;
  speed = 10;

  /**
   * Generate a new player
   * @param { number } x coordonate of the player
   * @param { number } y coordonate of the player
   */
  public constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) {
    this.xPosition = x;
    this.yPosition = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  /**
   * Draw the player on the Scene
   */
  private draw = () => {
    Scene.ctx.fillStyle = this.color;
    Scene.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  };

  /**
   * Update the Player propreties
   */
  public update = (): void => {
    this.draw();
    this.xPosition += this.dx;
    this.yPosition += this.dy;

    if (this.yPosition + this.height + this.dy <= Scene.canvas.height) {
      this.dy += GRAVITY;
    }
  };

  /**
   * Jump the player of 25
   */
  public jump = (): void => {
    if (this.dy === 1) this.dy -= 25;
  };

  public moveLeft = () => {
    this.dx = -this.speed;
  };

  public moveRight = () => {
    this.dx = this.speed;
  };

  public stopXMovement = () => {
    this.dx = 0;
  };

  public stopYMovement = () => {
    this.dy = 0;
  };
}

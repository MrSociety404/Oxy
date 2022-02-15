import Scene from "./Scene";

export class Platform {
  xPosition: number;
  yPosition: number;
  image: HTMLImageElement;
  width: number;
  height: number;

  public constructor(x: number, y: number, image: HTMLImageElement) {
    this.xPosition = x;
    this.yPosition = y;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  public draw = () => {
    Scene.ctx.drawImage(this.image, this.xPosition, this.yPosition);
  };
}

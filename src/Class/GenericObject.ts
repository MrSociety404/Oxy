import Scene from "./Scene";

export class GenericObject {
  xPosition: number;
  yPosition: number;
  image: HTMLImageElement;
  width: number;
  height: number;
  speedCut: number;

  public constructor(
    x: number,
    y: number,
    image: HTMLImageElement,
    speedCut: number
  ) {
    this.xPosition = x;
    this.yPosition = y;
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.speedCut = speedCut;
  }

  public draw = () => {
    Scene.ctx.drawImage(this.image, this.xPosition, this.yPosition);
  };
}

import { Platform } from "../Class/Platform";
import { Player } from "../Class/Player";

/**
 * Check if 2 box toutch each other
 * @param boxA
 * @param boxB
 * @returns
 */
export const boxYCollision = (player: Player, platform: Platform): boolean => {
  return (
    player.yPosition + player.height < platform.yPosition &&
    player.yPosition + player.height + player.dy >= platform.yPosition &&
    player.xPosition + player.width >= platform.xPosition &&
    player.xPosition <= platform.xPosition + platform.width
  );
};

export const createImage = (imageSrc: any) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

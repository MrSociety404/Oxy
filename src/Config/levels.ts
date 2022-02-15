import Scene from "../Class/Scene";
import { Platform } from "../Class/Platform";
import { GenericObject } from "../Class/GenericObject";
import { createImage } from "./utils";

// Platform
import PlatformSmall from "../assets/Platform/PlatformSmall.svg";
import PlatformSmallFly from "../assets/Platform/PlatformSmallFly.svg";
import PlatformSmallFlyLeft from "../assets/Platform/PlatformSmallFlyLeft.svg";
import PlatformSmallFlyRight from "../assets/Platform/PlatformSmallFlyRight.svg";

import PlatformMedium from "../assets/Platform/PlatformMedium.svg";
import PlatformMediumFly from "../assets/Platform/PlatformMediumFly.svg";

import PlatformLarge from "../assets/Platform/PlatformLarge.svg";
import PlatformLargeFly from "../assets/Platform/PlatformLargeFly.svg";

const smallPlatform = createImage(PlatformSmall); // 210 px width
const mediumPlatform = createImage(PlatformMedium); // 410 px width
const largePlatform = createImage(PlatformLarge); // 810 px width
const FlySmallPlatform = createImage(PlatformSmallFly); // 210 px width
const FlySmallPlatformLeft = createImage(PlatformSmallFlyLeft); // 210 px width
const FlySmallPlatformRight = createImage(PlatformSmallFlyRight); // 210 px width
const FlyMediumPlatform = createImage(PlatformMediumFly); // 410 px width
const FlyLargePlatform = createImage(PlatformLargeFly); // 810 px width

// Generic objects
import Background from "../assets/GenericObj/Background.svg";
import Background2 from "../assets/GenericObj/2Background.svg";

import Firstlayer from "../assets/GenericObj/Firstlayer.svg";
import Firstlayer2 from "../assets/GenericObj/2Firstlayer.svg";

import Secondlayer from "../assets/GenericObj/Secondlayer.svg";
import Secondlayer2 from "../assets/GenericObj/2Secondlayer.svg";

import Thirdlayer from "../assets/GenericObj/Thirdlayer.svg";
import Thirdlayer2 from "../assets/GenericObj/2Thirdlayer.svg";

import Sun from "../assets/GenericObj/Sun.svg";
import House from "../assets/GenericObj/House.svg";
import Tent from "../assets/GenericObj/Tent.svg";

/**
 * Generate the platform for a given level
 * @param { Number } level of the game to generate
 * @returns { Array } Platform
 */
export const generateLevels = (level: number) => {
  if (level === 1)
    return [
      new Platform(
        -20,
        Scene.canvas.height - largePlatform.height,
        largePlatform
      ),
      new Platform(
        1000,
        Scene.canvas.height - mediumPlatform.height,
        mediumPlatform
      ),
      new Platform(
        1200,
        Scene.canvas.height - mediumPlatform.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(1600, 400, FlyMediumPlatform),
      new Platform(
        2400,
        Scene.canvas.height - largePlatform.height,
        largePlatform
      ),
      new Platform(2800, 500, FlySmallPlatformLeft),
      new Platform(3000, 500, FlySmallPlatform),
      new Platform(3200, 500, FlySmallPlatformRight),
      new Platform(
        4000,
        Scene.canvas.height - mediumPlatform.height,
        mediumPlatform
      ),
      new Platform(4500, 600, FlyMediumPlatform),
      new Platform(5200, 500, FlyMediumPlatform),
      new Platform(5900, 380, FlyMediumPlatform),
      new Platform(6500, 600, FlyMediumPlatform),
      new Platform(
        7300,
        Scene.canvas.height - largePlatform.height,
        largePlatform
      ),
      new Platform(
        7900,
        Scene.canvas.height - largePlatform.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        8600,
        Scene.canvas.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        8900,
        Scene.canvas.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        9300,
        Scene.canvas.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        10000,
        Scene.canvas.height - mediumPlatform.height,
        mediumPlatform
      ),
      new Platform(10800, 650, FlyLargePlatform),
    ];
  else {
    return [
      new Platform(
        -20,
        Scene.canvas.height - largePlatform.height,
        largePlatform
      ),
      new Platform(
        1000,
        Scene.canvas.height - mediumPlatform.height,
        mediumPlatform
      ),
      new Platform(
        1200,
        Scene.canvas.height - mediumPlatform.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(1600, 400, FlyMediumPlatform),
      new Platform(
        2400,
        Scene.canvas.height - largePlatform.height,
        largePlatform
      ),
      new Platform(2800, 500, FlySmallPlatformLeft),
      new Platform(3000, 500, FlySmallPlatform),
      new Platform(3200, 500, FlySmallPlatformRight),
      new Platform(
        4000,
        Scene.canvas.height - mediumPlatform.height,
        mediumPlatform
      ),
      new Platform(4500, 600, FlyMediumPlatform),
      new Platform(5200, 500, FlyMediumPlatform),
      new Platform(5900, 380, FlyMediumPlatform),
      new Platform(6500, 600, FlyMediumPlatform),
      new Platform(
        7300,
        Scene.canvas.height - largePlatform.height,
        largePlatform
      ),
      new Platform(
        7900,
        Scene.canvas.height - largePlatform.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        8600,
        Scene.canvas.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        8900,
        Scene.canvas.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        9300,
        Scene.canvas.height - smallPlatform.height,
        smallPlatform
      ),
      new Platform(
        10000,
        Scene.canvas.height - mediumPlatform.height,
        mediumPlatform
      ),
      new Platform(10800, 650, FlyLargePlatform),
    ];
  }
};

/**
 * Generate the Generic Objects for a given level
 * @param { Number } level of the game to generate
 * @returns { Array } GenericObject
 */
export const generateGeneric = (level: number) => {
  if (level === 1) {
    return [
      new GenericObject(0, 0, createImage(Background), 0),
      new GenericObject(300, 150, createImage(Sun), 0),
      new GenericObject(0, 0, createImage(Firstlayer), 3),
      new GenericObject(0, 0, createImage(Secondlayer), 2.5),
      new GenericObject(1800, 0, createImage(House), 2.2),
      new GenericObject(4300, 645, createImage(Tent), 2.2),
      new GenericObject(6300, 0, createImage(House), 2.2),
      new GenericObject(7800, 645, createImage(Tent), 2.2),
      new GenericObject(0, 0, createImage(Thirdlayer), 2),
    ];
  } else {
    return [
      new GenericObject(0, 0, createImage(Background2), 0),
      new GenericObject(300, 150, createImage(Sun), 0),
      new GenericObject(0, 0, createImage(Firstlayer2), 3),
      new GenericObject(0, 0, createImage(Secondlayer2), 2.5),
      new GenericObject(1800, 0, createImage(House), 2.2),
      new GenericObject(4300, 645, createImage(Tent), 2.2),
      new GenericObject(6300, 0, createImage(House), 2.2),
      new GenericObject(7800, 645, createImage(Tent), 2.2),
      new GenericObject(0, 0, createImage(Thirdlayer2), 2),
    ];
  }
};

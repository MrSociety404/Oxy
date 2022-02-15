import Keys from "./Keys";
import Scene from "./Scene";
import Screen from "./Screen";

import { Player } from "./Player";
import { Platform } from "./Platform";
import { boxYCollision } from "../Config/utils";
import { generateGeneric, generateLevels } from "../Config/levels";
import { GenericObject } from "./GenericObject";

export class Game {
  player: Player;
  platforms: Platform[] = [];
  genericObjects: GenericObject[];
  scrollOffset: number;
  level = 1;
  score: number;
  bestScore = parseInt(localStorage.getItem("best")) || 0;

  /**
   * Generate the game
   */
  public generate = (): void => {
    this.player = new Player(50, 100, 100, 100, "#fca311");
    this.platforms = generateLevels(this.level);
    this.genericObjects = generateGeneric(this.level);
    this.scrollOffset = 0;
    if (this.score > this.bestScore) {
      this.bestScore = this.score;
      localStorage.setItem("best", this.bestScore.toString());
    }
    this.score = 0;

    Screen.setScore(0);
    Screen.setBestscore(this.bestScore);
  };

  /**
   * Update and draw element on the Scene
   */
  private drawElement = (): void => {
    // Draw element
    this.genericObjects.forEach((genericObject) => {
      genericObject.draw();
    });
    this.platforms.forEach((platform) => {
      platform.draw();
      if (boxYCollision(this.player, platform)) {
        this.player.stopYMovement();
      }
    });
    this.player.update();
  };

  /**
   * Start the game animation
   */
  private animate = (): void => {
    // Clear previous element
    requestAnimationFrame(this.animate);
    Scene.ctx.clearRect(0, 0, Scene.canvas.width, Scene.canvas.height);

    this.drawElement();

    // controls
    if (
      (Keys.left.pressed && this.player.xPosition > 200) ||
      (Keys.left.pressed &&
        this.scrollOffset === 0 &&
        this.player.xPosition > 0)
    ) {
      this.player.moveLeft();
    } else if (
      Keys.right.pressed &&
      this.player.xPosition < Scene.canvas.width / 2
    ) {
      this.player.moveRight();
    } else {
      this.player.stopXMovement();
      if (Keys.right.pressed) {
        this.scrollOffset += this.player.speed;
        this.score++;
        Screen.setScore(this.score);

        this.platforms.forEach((platform) => {
          platform.xPosition -= this.player.speed;
        });
        this.genericObjects.forEach((genericObject) => {
          if (genericObject.speedCut !== 0) {
            genericObject.xPosition -=
              this.player.speed / genericObject.speedCut;
          }
        });
      } else if (Keys.left.pressed && this.scrollOffset > 0) {
        this.scrollOffset -= this.player.speed;
        this.platforms.forEach((platform) => {
          platform.xPosition += this.player.speed;
        });
        this.genericObjects.forEach((genericObject) => {
          if (genericObject.speedCut !== 0) {
            genericObject.xPosition +=
              this.player.speed / genericObject.speedCut;
          }
        });
      }
    }

    this.checkGameStatus();
  };

  /**
   * Check the game status
   */
  private checkGameStatus = (): void => {
    // End game handle
    if (this.scrollOffset > 10600) {
      this.endGame(true);
    }

    if (this.player.yPosition > Scene.canvas.height) {
      this.endGame(false);
    }
  };

  /**
   * Start the game, generate and animate the game
   */
  public start = (): void => {
    this.generate();
    this.animate();
  };

  public refresh = (): void => {
    Scene.canvas.width = window.innerWidth;
    Scene.canvas.height = window.innerHeight;
    this.generate();
  };

  public endGame = (win: boolean) => {
    if (win) {
      this.level++;
    } else {
      Screen.endDisplay.classList.remove("hide");
      this.player.speed = 0;
    }
  };
}

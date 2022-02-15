import "./style.css";

import { Game } from "./Class/Game";
import Keys from "./Class/Keys";
import Screen from "./Class/Screen";

const game = new Game();

game.start();

Screen.startBtn.addEventListener("click", () => {
  Screen.toggleStart();
  addEventListener("keydown", ({ key }) => {
    if (key === " " || key === "ArrowUp") {
      game.player.jump();
    } else if (key === "q" || key === "Q" || key === "ArrowLeft") {
      Keys.left.pressed = true;
    } else if (key === "d" || key === "D" || key === "ArrowRight") {
      Keys.right.pressed = true;
    }
  });

  addEventListener("keyup", ({ key }) => {
    if (key === "q" || key === "Q" || key === "ArrowLeft") {
      Keys.left.pressed = false;
    } else if (key === "d" || key === "D" || key === "ArrowRight") {
      Keys.right.pressed = false;
    }
  });
});

Screen.gameOverBtn.addEventListener("click", () => {
  Screen.endDisplay.classList.add("hide");
  game.refresh();
});

addEventListener("resize", () => {
  game.refresh();
});

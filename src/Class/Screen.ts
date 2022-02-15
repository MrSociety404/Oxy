class ScreenInterface {
  score = document.querySelector(".score__score");
  bestScore = document.querySelector(".score__bestscore");
  startDisplay = document.querySelector("#start");
  endDisplay = document.querySelector("#gameOver");

  startBtn = document.querySelector("#start__btn");
  gameOverBtn = document.querySelector("#gameOver__btn");

  public setScore = (value: number) => {
    this.score.innerHTML = value.toString();
  };
  public setBestscore = (value: number) => {
    this.bestScore.innerHTML = value.toString();
  };
  public toggleStart = () => {
    this.startDisplay.classList.toggle("hide");
  };
  public toggleGameOver = () => {
    this.endDisplay.classList.toggle("hide");
  };
}

export default new ScreenInterface();

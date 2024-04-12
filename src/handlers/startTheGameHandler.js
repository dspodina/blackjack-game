import dom from "../dom.js";
import resetGame from "../utils/resetGame.js";
import startGame from "../utils/startGame.js";
import globalVars from "../globalVariables.js";

const startTheGameHandler = () => {
  if (!globalVars.isAlive || globalVars.hasBlackJack) {
    dom.startTheGameBtn.textContent = "New Game";
    dom.addCardBtn.style.display = "inline";
    dom.innerTextEl.style.display = "block";
    globalVars.isAlive = true;
    globalVars.hasBlackJack = false;
    startGame();
  } else {
    dom.startTheGameBtn.textContent = "Start the game";
    dom.addCardBtn.style.display = "none";
    dom.innerTextEl.style.display = "none";
    resetGame();
  }
};

export default startTheGameHandler;

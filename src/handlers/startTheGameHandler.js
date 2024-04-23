import resetGame from "../utils/resetGame.js";
import startGame from "../utils/startGame.js";
import globalVars from "../globalVariables.js";

const startTheGameHandler = () => {
  if (!globalVars.isAlive || globalVars.hasBlackJack) {
    globalVars.isAlive = true;
    globalVars.hasBlackJack = false;
    startGame();
  } else {
    resetGame();
  }
};

export default startTheGameHandler;

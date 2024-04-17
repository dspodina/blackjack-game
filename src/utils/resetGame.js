import dom from "../dom.js";
import globalVars from "../globalVariables.js";

function resetGame() {
  globalVars.isAlive = false;
  globalVars.sum = 0;
  globalVars.cards = [];
  globalVars.message = "";
  dom.totalSum.textContent = "";
  dom.cardsValue.textContent = "";
}

export default resetGame;

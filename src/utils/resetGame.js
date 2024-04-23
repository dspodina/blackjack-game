import globalVars from "../globalVariables.js";

function resetGame() {
  globalVars.isAlive = false;
  globalVars.personSum = 0;
  globalVars.computerSum = 0;
  globalVars.personCards = [];
  globalVars.computerCards = [];
  globalVars.message = "";
}

export default resetGame;

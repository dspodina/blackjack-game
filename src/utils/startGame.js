import getRandomCard from "../utils/getRandomCard.js";
import globalVars from "../globalVariables.js";
import renderGame from "../utils/renderGame.js";

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  globalVars.cards = [firstCard, secondCard];
  globalVars.sum = firstCard + secondCard;
  renderGame();
}

export default startGame;

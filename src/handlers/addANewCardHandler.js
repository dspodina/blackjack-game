import getRandomCard from "../utils/getRandomCard.js";
import globalVars from "../globalVariables.js";
import renderGame from "../utils/renderGame.js";

const addANewCardHandler = () => {
  if (globalVars.isAlive === true && globalVars.hasBlackJack === false) {
    let card = getRandomCard();
    globalVars.sum += card;
    globalVars.cards.push(card);
    renderGame();
  }
};

export default addANewCardHandler;

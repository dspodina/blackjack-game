import getRandomCard from "../utils/getRandomCard.js";
import globalVars from "../globalVariables.js";
import renderGamePerson from "../components/renderGamePerson.js";
import renderGameComputer from "../components/renderGameComputer.js";

const addANewCardHandler = () => {
  if (globalVars.isAlive === true && globalVars.hasBlackJack === false) {
    let cardPerson = getRandomCard();
    globalVars.personSum += cardPerson;
    globalVars.personCards.push(cardPerson);
    renderGamePerson();

    let cardComputer = getRandomCard();
    globalVars.computerSum += cardComputer;
    globalVars.computerCards.push(cardComputer);
    renderGameComputer();
  } else if (globalVars.computerSum >= 21 && globalVars.personSum < 20) {
    let cardPerson = getRandomCard();
    globalVars.personSum += cardPerson;
    globalVars.personCards.push(cardPerson);
    renderGamePerson();
  }
};

export default addANewCardHandler;

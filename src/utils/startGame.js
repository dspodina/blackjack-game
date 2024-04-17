import getRandomCard from "../utils/getRandomCard.js";
import globalVars from "../globalVariables.js";
import renderGamePerson from "./renderGamePerson.js";
import renderGameComputer from "./renderGameComputer.js";


function startGame() {
  let personFirstCard = getRandomCard();
  let computerFirstCard = getRandomCard();
  let personSecondCard = getRandomCard();
  let computerSecondCard = getRandomCard();
  
  globalVars.personCards = [personFirstCard, personSecondCard];
  globalVars.computerCards = [computerFirstCard, computerSecondCard];
  
  globalVars.personSum = personFirstCard + personSecondCard;
  globalVars.computerSum = computerFirstCard + computerSecondCard;
  
  renderGamePerson();
  renderGameComputer();
}

export default startGame;


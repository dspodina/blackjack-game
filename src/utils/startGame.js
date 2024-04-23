import getRandomCard from "../utils/getRandomCard.js";
import globalVars from "../globalVariables.js";
import renderGamePerson from "../components/renderGamePerson.js";
import renderGameComputer from "../components/renderGameComputer.js";


function startGame() {
  let personFirstCard = getRandomCard();
  let computerFirstCard = getRandomCard();
  let personSecondCard = getRandomCard();
  let computerSecondCard = getRandomCard();
  let computerThirdCard = getRandomCard();
  
  globalVars.personCards = [personFirstCard, personSecondCard];
  globalVars.computerCards = [computerFirstCard, computerSecondCard, computerThirdCard ];
  
  globalVars.personSum = personFirstCard + personSecondCard;
  globalVars.computerSum = computerFirstCard + computerSecondCard + computerThirdCard;
  
  renderGamePerson();
  renderGameComputer();
}

export default startGame;


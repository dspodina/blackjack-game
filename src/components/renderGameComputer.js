import dom from "../dom.js";
import globalVars from "../globalVariables.js";

function renderGameComputer() {
  dom.cardsValueComputer.innerText = "";
  for (let i = 0; i < globalVars.computerCards.length; i++) {
    dom.cardsValueComputer.innerHTML += `<img src=./public/${globalVars.computerCards[i]}.svg>`;
  }
  dom.computerHeader.style.display = "block";
  dom.totalSumComputer.textContent = "Sum: " + globalVars.computerSum;
  if (globalVars.computerSum <= 20) {
    dom.resultTextComputer.textContent = "Add one more card";
    dom.resultTextComputer.style.color = "black";
  } else if (globalVars.computerSum === 21) {
    dom.resultTextComputer.textContent = "You've got Blackjack!";
    globalVars.hasBlackJack = true;
    dom.resultTextComputer.style.color = "#5fe600";
  } else {
    dom.resultTextComputer.textContent = "You're out of the game!";
    globalVars.isAlive = false;
    dom.resultTextComputer.style.color = "#fe0b0f";
  }
}

export default renderGameComputer;

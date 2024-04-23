import dom from "../dom.js";
import globalVars from "../globalVariables.js";

function renderGamePerson() {
  dom.cardsValuePerson.innerText = "";
  for (let i = 0; i < globalVars.personCards.length; i++) {
    dom.cardsValuePerson.innerHTML += `<img src=./public/${globalVars.personCards[i]}.svg>`;
  }
  dom.personHeader.style.display = "block";
  dom.hiddenCard.style.display = "block";
  dom.totalSumPerson.textContent = "Sum: " + globalVars.personSum;
  if (globalVars.personSum <= 20) {
    dom.resultTextPerson.textContent = "Add one more card";
    dom.resultTextPerson.style.color = "black";
  } else if (globalVars.personSum === 21) {
    dom.resultTextPerson.textContent = "You've got Blackjack!";
    globalVars.hasBlackJack = true;
    dom.hiddenCard.style.display = "none";
    dom.resultTextPerson.style.color = "#5fe600";
  } else {
    dom.resultTextPerson.textContent = "You're out of the game!";
    globalVars.isAlive = false;
    dom.hiddenCard.style.display = "none";
    dom.resultTextPerson.style.color = "#fe0b0f";
  }
}

export default renderGamePerson;

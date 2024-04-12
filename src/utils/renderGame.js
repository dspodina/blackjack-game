import dom from "../dom.js";
import globalVars from "../globalVariables.js";

function renderGame() {
  dom.cardsValue.innerText = "";
  for (let i = 0; i < globalVars.cards.length; i++) {
    dom.cardsValue.innerHTML += `<img src=./public/${globalVars.cards[i]}.svg>`;
  }
  dom.h2Text.style.display = "block";
  dom.startTheGameBtn.style.display = "block";
  dom.totalSum.textContent = "Sum: " + globalVars.sum;
  if (globalVars.sum <= 20) {
    dom.h2Text.textContent = "Add one more card";
    dom.h2Text.style.color = "black";
    dom.startTheGameBtn.style.display = "none";
  } else if (globalVars.sum === 21) {
    dom.h2Text.textContent = "You've got Blackjack!";
    globalVars.hasBlackJack = true;
    dom.addCardBtn.style.display = "none";
    document.body.style.background = "#95D473";
  } else {
    dom.h2Text.textContent = "You're out of the game!";
    globalVars.isAlive = false;
    dom.addCardBtn.style.display = "none";
    dom.h2Text.style.color = "#fe0b0f";
  }
}

export default renderGame;

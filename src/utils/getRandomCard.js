function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 11) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

export default getRandomCard;

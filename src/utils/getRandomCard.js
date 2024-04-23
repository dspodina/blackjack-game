function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 2;
  } else {
    return randomNumber;
  }
}

export default getRandomCard;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 14) + 1;
  if (randomNumber > 13) {
    return 13;
  } else if (randomNumber === 1) {
    return 14;
  } else {
    return randomNumber;
  }
}

export default getRandomCard;

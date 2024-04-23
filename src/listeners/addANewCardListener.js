import addANewCardHandler from "../handlers/addANewCardHandler.js";
import dom from "../dom.js"

const addANewCardListener = () => {
  dom.hiddenCard.addEventListener("click", addANewCardHandler);
};

export default addANewCardListener;

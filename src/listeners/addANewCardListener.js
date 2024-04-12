import addANewCardHandler from "../handlers/addANewCardHandler.js";
import dom from "../dom.js"

const addANewCardListener = () => {
  dom.addCardBtn.addEventListener("click", addANewCardHandler);
};

export default addANewCardListener;

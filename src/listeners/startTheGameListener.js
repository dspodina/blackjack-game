import startTheGameHandler from "../handlers/startTheGameHandler.js";
import dom from "../dom.js"

const startTheGameListener = () => {
  dom.startTheGameBtn.addEventListener("click", startTheGameHandler);
};

export default startTheGameListener;

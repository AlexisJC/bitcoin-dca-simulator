import "./styles.css";
import { getData } from "./api.js";
import { generateViz } from "./dataviz";

const startInput = document.getElementById("start");
const endInput = document.getElementById("end");

const init = async () => {
  const dataObject = await getData(startInput.value, endInput.value);
  generateViz(dataObject);
};

init();

startInput.onchange = (e) => init();
endInput.onchange = (e) => init();

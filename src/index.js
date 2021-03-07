import "./styles.css";
import { getCurrent, getData } from "./lib/api.js";
import { visualize } from "./lib/visualizer";
import { simulate } from "./lib/simulator";
import { parseData, parseCurrency, formatResult } from "./lib/helpers";
import {
  startInput,
  endInput,
  frequencyInput,
  resultElement,
  amountInput,
  simulateBtn
} from "./lib/dom";

let viz = null;

const init = async () => {
  const amount = amountInput.value;
  const dataObject = await getData(startInput.value, endInput.value);
  const data = parseData(dataObject, frequencyInput.value);
  viz = visualize(data);
  const wallet = simulate(data, amount);
  const currentPrice = parseCurrency(await getCurrent());
  const total = (wallet * currentPrice).toFixed(2);
  resultElement.innerText = formatResult(amount, wallet, total, 10);
};

init();

simulateBtn.onclick = (e) => {
  e.preventDefault();
  viz.destroy();
  init();
};

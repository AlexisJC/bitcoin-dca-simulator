import "./styles.css";
import { getCurrent, getData } from "./lib/api";
import { visualize } from "./lib/visualizer";
import { simulate } from "./lib/simulator";
import {
  parseData,
  parseCurrency,
  formatResult,
  calculRate
} from "./lib/helpers";
import {
  startInput,
  endInput,
  frequencyInput,
  resultElement,
  amountInput,
  simulateBtn,
  formSection,
  resultSection,
  retryBtn,
  walletElement,
  valueElement,
  rateElement
} from "./lib/dom";

let viz = null;

const exec = async () => {
  const dataObject = await getData(startInput.value, endInput.value);
  const data = parseData(dataObject, frequencyInput.value);
  viz = visualize(data);
  const wallet = simulate(data, amountInput.value);
  const currentPrice = parseCurrency(await getCurrent());
  const total = (wallet * currentPrice).toFixed(2);
  walletElement.innerText = wallet + " BTC";
  valueElement.innerText = total + " $";
  rateElement.innerText = "+" + calculRate(amountInput.value, total) + " %";
};

simulateBtn.onclick = (e) => {
  e.preventDefault();
  resultSection.style.display = "block";
  formSection.style.display = "none";
  viz && viz.destroy();
  exec();
};

retryBtn.onclick = (e) => {
  e.preventDefault();
  resultSection.style.display = "none";
  formSection.style.display = "block";
  viz && viz.destroy();
  exec();
};

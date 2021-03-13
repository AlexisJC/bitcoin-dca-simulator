import "./styles.css";
import { getCurrentPrice, getDataByPeriod } from "./lib/api";
import { visualize } from "./lib/visualizer";
import { simulate } from "./lib/simulator";
import { parseData, parseCurrency, calculRate } from "./lib/helpers";
import DOM from "./lib/dom";

let viz = null;

const exec = async () => {
  // api calls
  const rawData = await getDataByPeriod(
    DOM.startInput.value,
    DOM.endInput.value
  );
  const rawPrice = await getCurrentPrice();

  // parse raw
  const data = parseData(rawData, DOM.frequencyInput.value);
  const currentPrice = parseCurrency(rawPrice);

  // load dataviz
  viz = visualize(data);

  // perform calculations
  const wallet = simulate(data, DOM.amountInput.value);
  const total = (wallet * currentPrice).toFixed(2);
  const rate = calculRate(DOM.amountInput.value, total);

  DOM.displayResult(wallet, total, rate);
};

DOM.simulateBtn.onclick = (e) => {
  e.preventDefault();
  DOM.resultSection.style.display = "block";
  DOM.formSection.style.display = "none";
  viz && viz.destroy();
  exec();
};

DOM.retryBtn.onclick = (e) => {
  e.preventDefault();
  DOM.resultSection.style.display = "none";
  DOM.formSection.style.display = "block";
  viz && viz.destroy();
  exec();
};

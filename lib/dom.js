export default {
  startInput: document.getElementById("start"),
  endInput: document.getElementById("end"),
  frequencyInput: document.getElementById("frequency"),
  amountInput: document.getElementById("amount"),
  simulateBtn: document.getElementById("simulate"),
  retryBtn: document.getElementById("retry"),
  resultElement: document.getElementById("result"),
  formSection: document.getElementById("form-section"),
  resultSection: document.getElementById("result-section"),
  walletElement: document.getElementById("result-wallet"),
  valueElement: document.getElementById("result-value"),
  rateElement: document.getElementById("result-rate"),
  displayResult(wallet, total, rate) {
    this.walletElement.innerText = wallet + " BTC";
    this.valueElement.innerText = total + " $";
    this.rateElement.innerText = rate + " %";
  }
};

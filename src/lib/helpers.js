import { isFirstDayOfMonth, isMonday, parseISO } from "date-fns";
import { freqOptions } from "./config";

export const parseData = (dataObject, frequency) => {
  const data = [];
  for (const key in dataObject) {
    const entry = { date: key, price: dataObject[key] };
    switch (frequency) {
      case freqOptions.DAILY:
        data.push(entry);
        break;
      case freqOptions.WEEKLY:
        if (isMonday(parseISO(entry.date))) data.push(entry);
        break;
      case freqOptions.MONTHLY:
        if (isFirstDayOfMonth(parseISO(entry.date))) data.push(entry);
        break;
      default:
        console.log("invalid frequency option");
        break;
    }
  }

  return data;
};

export const parseCurrency = (rate) =>
  rate.slice(0, rate.indexOf(".")).replace(",", "");

export const formatResult = (invest, wallet, value, rate) =>
  `Investing : ${invest} dollars; Wallet : ${wallet} BTC; Value : ${value} dollars; Rate : ${rate}%`;

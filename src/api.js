export const getData = async (start = "2021-01-01", end = "2021-03-01") => {
  const res = await fetch(
    `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`
  );
  const data = await res.json();
  return data.bpi;
};

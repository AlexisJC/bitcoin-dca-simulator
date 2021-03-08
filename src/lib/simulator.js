export const simulate = (data, investing = 10) => {
  const average = investing / data.length;
  let wallet = 0;

  for (const entry of data) {
    wallet += average / entry.price;
  }

  return wallet;
};

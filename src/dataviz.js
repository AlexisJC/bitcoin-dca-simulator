export const generateViz = (dataObject) => {
  // transformer en dataset en separant labal et données
  const dates = [];
  const prices = [];
  const colors = [];

  for (const key in dataObject) {
    const isUp = dataObject[key] > prices[prices.length - 1];
    dates.push(key);
    prices.push(dataObject[key]);
    colors.push(isUp ? "green" : "red");
  }
  console.log(prices);
  // coloriser en vert quand ça monte, en rouge quand ça descend

  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Bitcoin",
          data: prices,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
};

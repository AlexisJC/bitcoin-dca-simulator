import Chart from "chart.js";
const analyze = (data) => {
  return data.map((entry, index) => ({
    ...entry,
    isUp: index === 0 || entry.price > data[index - 1].price
  }));
};

export const visualize = (data) => {
  const analyzedData = analyze(data);

  const dates = analyzedData.map((entry) => entry.date);
  const prices = analyzedData.map((entry) => entry.price);
  const colors = analyzedData.map((entry) =>
    entry.isUp ? "#83E8BA" : "#504136"
  );

  const ctx = document.getElementById("myChart").getContext("2d");
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Bitcoin",
          data: prices,
          backgroundColor: "#F9B766",
          borderColor: "#F7931A",
          borderWidth: 1,
          pointStyle: "triangle",
          pointBackgroundColor: colors,
          pointBorderColor: colors
        }
      ]
    },
    options: {
      legend: { display: false },
      scales: {
        display: false,
        xAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: false
            }
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: false
            }
          }
        ]
      }
    }
  });
};

import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const RealTimeGraph = () => {
  const [data, setData] = useState([10, 20, 15, 25, 30]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => [...prevData.slice(1), Math.floor(Math.random() * 40)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Line
      data={{
        labels: ["1s", "2s", "3s", "4s", "5s"],
        datasets: [{ label: "Traffic", data, borderColor: "black", tension: 0.4 }],
      }}
      options={{ responsive: true, plugins: { legend: { display: false } } }}
    />
  );
};

export default RealTimeGraph;

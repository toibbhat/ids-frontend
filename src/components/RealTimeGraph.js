import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import { useTheme } from "../context/ThemeContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const RealTimeGraph = () => {
  const [data, setData] = useState([10, 20, 15, 25, 30]);
  const { darkMode } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => [...prevData.slice(1), Math.floor(Math.random() * 40)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="rounded-xl p-4 transition duration-300"
      style={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "0 4px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        className="text-xl font-semibold mb-2"
        style={{
          color: darkMode ? "#F8FAFC" : "#1E293B",
        }}
      >
        Real-Time Network Traffic
      </h2>

      <Line
        data={{
          labels: ["1s", "2s", "3s", "4s", "5s"],
          datasets: [
            {
              label: "Traffic",
              data,
              borderColor: darkMode ? "#93c5fd" : "#1e3a8a",
              backgroundColor: darkMode ? "#1e40af33" : "#93c5fd44",
              tension: 0.4,
              pointRadius: 3,
              fill: true,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              ticks: {
                color: darkMode ? "#e5e7eb" : "#1f2937",
              },
              grid: {
                color: darkMode ? "#33415544" : "#e5e7eb88",
              },
            },
            y: {
              ticks: {
                color: darkMode ? "#e5e7eb" : "#1f2937",
              },
              grid: {
                color: darkMode ? "#33415544" : "#e5e7eb88",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default RealTimeGraph;

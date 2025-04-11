import React from "react";
import { useTheme } from "../context/ThemeContext";

const TrafficChart = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className="rounded-xl p-6 flex justify-center items-center text-center h-[300px]"
      style={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      }}
    >
      <span className="text-xl font-semibold text-gray-300">
        ⚙️ Live Traffic Chart Coming Soon
      </span>
    </div>
  );
};

export default TrafficChart;

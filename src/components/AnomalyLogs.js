import React from "react";
import { useTheme } from "../context/ThemeContext";

const AnomalyLogs = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className="rounded-xl p-6 mt-8"
      style={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      }}
    >
      <h3 className="text-xl font-bold mb-2">📡 Anomalous Behavior:</h3>
      <ul className="list-disc ml-5 space-y-2 text-red-400">
        <li>
          <span className="font-semibold">✩ network 4</span>: too many requests
          from this IP
        </li>
      </ul>
    </div>
  );
};

export default AnomalyLogs;

import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThreatList = () => {
  const { darkMode } = useTheme();

  const connections = [
    "192.168.1.10",
    "192.168.1.15",
    "Device-23",
    "Laptop-Alpha",
    "Unknown-Host",
  ];

  return (
    <div
      className="mt-8 rounded-xl p-6 transition duration-300"
      style={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "0 4px 16px rgba(0, 0, 0, 0.1)",
        color: darkMode ? "#F8FAFC" : "#1E293B",
      }}
    >
      <h2 className="text-2xl font-bold mb-4">🕵️ Suspicious Network Connections</h2>
      <ul className="space-y-3">
        {connections.map((conn, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 border-b border-slate-300/30 pb-2 last:border-0"
            style={{ color: darkMode ? "#CBD5E1" : "#334155" }}
          >
            <span className="font-semibold">{index + 1}.</span>
            <span>{conn}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreatList;

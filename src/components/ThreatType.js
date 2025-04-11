import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThreatType = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className="rounded-xl pt-20 pb-20 pl-6 mt-6 transition duration-300"
      style={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)" // dark bluish translucent
          : "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "0 4px 16px rgba(0, 0, 0, 0.1)",
        color: darkMode ? "#F8FAFC" : "#1E293B",
      }}
    >
      <h2 className="text-2xl font-bold mb-2">🚨 Identify Threat Type</h2>
      <p className="text-red-500 font-semibold mt-2">⚠️ Detected: DDoS Attack</p>
    </div>
  );
};

export default ThreatType;

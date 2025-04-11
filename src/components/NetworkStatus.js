import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

// Import Heroicons
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

const NetworkStatus = ({ setStatus }) => {
  const [status, setLocalStatus] = useState("alert");
  const [isExpanding, setIsExpanding] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    fetch("http://localhost:8080/api/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setLocalStatus(data.status);
          setStatus && setStatus(data.status);
        }
      })
      .catch((err) => console.error("Failed to fetch status:", err));
  }, []);

  let statusText = "";
  let IconComponent = null;
  let statusColor = "";
  let glowColor = "";

  switch (status) {
    case "safe":
      statusText = "Safe – No anomalies";
      IconComponent = ShieldCheckIcon;
      statusColor = "green";
      glowColor = "rgba(34, 197, 94, 0.5)";
      break;
    case "warning":
      statusText = "Warning – Suspicious activity";
      IconComponent = ExclamationTriangleIcon;
      statusColor = "yellow";
      glowColor = "rgba(180, 192, 7, 0.5)";
      break;
    default:
      statusText = "Alert – Anomalies detected";
      IconComponent = XCircleIcon;
      statusColor = "red";
      glowColor = "rgba(239, 68, 68, 0.5)";
      break;
  }

  const handleClear = () => {
    setIsExpanding(true);
    setTimeout(() => {
      setLocalStatus("safe");
      setStatus && setStatus("safe");
      setIsExpanding(false);
    }, 600);
  };

  const isSafe = status === "safe";

  return (
    <div
    className={`mt-6 rounded-xl p-0 flex flex-col ${
      isSafe || isExpanding ? "md:flex-row-reverse" : "md:flex-row"
    } justify-between items-center transition-all duration-500 ease-in-out`}
      style={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        color: darkMode ? "#F8FAFC" : "#1E293B",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(12px)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "0 4px 16px rgba(0, 0, 0, 0.1)",
        minHeight: "180px",
      }}
    >
      {/* Render Left Section ONLY if not safe */}
      {status !== "safe" && !isExpanding && (
        <div className="pl-6 flex flex-col justify-center w-full md:w-1/2">
          <h2 className="text-2xl font-bold">Network Status:</h2>
          <p
            className={`mt-2 flex items-center gap-2 text-${statusColor}-500 font-medium`}
          >
            <IconComponent className="h-6 w-6" />
            <span>{statusText}</span>
          </p>
          <button
            onClick={handleClear}
            className="mt-4 px-4 py-2 rounded-md font-semibold transition w-fit"
            style={{
              backgroundColor: darkMode ? "black" : "#000",
              color: "#fff",
            }}
          >
            Clear / Ignore alerts
          </button>
        </div>
      )}

      {/* Right Glow Icon - will expand to full width when safe */}
      <div
        className={`flex items-center justify-center text-white shadow-inner transition-all duration-700 ease-in-out ${
          isSafe || isExpanding ? "w-full" : "w-full md:w-1/2"
        } rounded-xl md:rounded-l-xl md:rounded-r-xl`}
        style={{
          backgroundColor:
            statusColor === "green"
              ? "rgba(34,197,94,0.8)"
              : statusColor === "yellow"
              ? "rgb(255, 251, 0)"
              : "rgba(239,68,68,0.8)",
          boxShadow: `0 0 25px 10px ${glowColor}`,
          height: "12rem",
        }}
      >
        <IconComponent className="h-20 w-20 text-white" />
      </div>
    </div>
  );
};

export default NetworkStatus;

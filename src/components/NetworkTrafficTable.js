import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NetworkTrafficTable = () => {
  const { darkMode } = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/traffic") // You can mock this for now
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Traffic fetch error:", err));
  }, []);

  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg"
      style={{
        backdropFilter: "blur(12px)",
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        color: darkMode ? "#F8FAFC" : "#1E293B",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <table className="w-full text-left text-sm table-auto">
        <thead>
          <tr className="bg-white/10 text-gray-300 uppercase">
            <th className="p-4">Network</th>
            <th className="p-4">IP Address</th>
            <th className="p-4">Port</th>
            <th className="p-4">Threat Level</th>
          </tr>
        </thead>
        <tbody>
          {data.map((net, idx) => (
            <tr
              key={idx}
              className={`transition ${
                net.threat === "alert"
                  ? "bg-red-500/20"
                  : net.threat === "warning"
                  ? "bg-yellow-400/20"
                  : "bg-transparent"
              }`}
            >
              <td className="p-4 font-semibold">{net.name}</td>
              <td className="p-4">{net.ip}</td>
              <td className="p-4">{net.port}</td>
              <td className="p-4 font-bold text-red-500">{net.threat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NetworkTrafficTable;

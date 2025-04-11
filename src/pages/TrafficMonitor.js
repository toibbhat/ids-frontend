import React from "react";
import { useTheme } from "../context/ThemeContext";

const TrafficMonitor = () => {
  const { darkMode } = useTheme();

  const statusStyle = (status) => {
    switch (status) {
      case "safe":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "alert":
        return "text-red-500 bg-yellow-300 bg-opacity-40";
      default:
        return "text-gray-500";
    }
  };

  const networks = [
    { name: "network 1", ip: "192.168.1.1", port: "-", status: "safe" },
    { name: "network 2", ip: "192.168.1.1", port: "-", status: "safe" },
    { name: "network 3", ip: "192.168.1.1", port: "-", status: "safe" },
    { name: "network 4", ip: "192.168.1.1", port: "-", status: "warning" },
    { name: "network 5", ip: "192.168.1.1", port: "-", status: "safe" },
  ];

  return (
    <div
      className={`min-h-screen p-10 transition duration-300`}
      style={{
        background: darkMode
          ? "rgba(15, 23, 42, 0.8)"
          : "rgba(255, 255, 255, 0.7)",
        color: darkMode ? "#F8FAFC" : "#1E293B",
      }}
    >
      {/* Title Section */}
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-center mb-2 drop-shadow">Traffic Monitor</h1>
        <p className=" text-center text-gray-400 text-xl mt-2">Project under Development</p>
      </div>

      {/* Network Table */}
      <div className="rounded-xl overflow-hidden shadow-xl backdrop-blur-md mb-10 border border-white/20">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-white/10 text-black-200">
              <th className="px-6 py-4">Network List</th>
              <th className="px-6 py-4">IP Address</th>
              <th className="px-6 py-4">Port</th>
              <th className="px-6 py-4">Threat Level</th>
            </tr>
          </thead>
          <tbody>
            {networks.map((net, index) => (
              <tr
                key={index}
                className={`${
                  net.status === "warning" ? "bg-yellow-200 bg-opacity-50" : ""
                } transition`}
              >
                <td className="px-6 py-4 font-semibold flex gap-2 items-center">
                  <span className="text-gray-500">{index + 1}.</span>
                  <span>{net.name}</span>
                  <span
                    className={`ml-2 text-sm font-normal ${statusStyle(
                      net.status
                    )}`}
                  >
                    {net.status === "safe"
                      ? "no anomaly detected"
                      : "anomaly detected (Warning)"}
                  </span>
                </td>
                <td className="px-6 py-4">{net.ip}</td>
                <td className="px-6 py-4">{net.port}</td>
                <td className={`px-6 py-4 font-semibold ${statusStyle(net.status)}`}>
                  {net.status === "warning" ? "Alert" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart + Info */}
      <div className="flex gap-6 flex-col md:flex-row items-start justify-between mb-12">
        <div
          className="h-60 md:w-1/2 w-full rounded-lg border border-white/10 flex items-center justify-center text-3xl font-bold text-gray-400"
          style={{
            background: darkMode
              ? "rgba(255,255,255,0.05)"
              : "rgba(0,0,0,0.05)",
          }}
        >
          [ Live Traffic Chart Placeholder ]
        </div>
        <p className="md:w-1/2 text-xl font-medium">
          Will show network of each traffic and transfer data rate and live packet logs.
        </p>
      </div>

      {/* Anomaly Logs */}
      <div className="text-lg">
        <h2 className="text-2xl font-bold mb-4">Anomalous behavior :</h2>
        <ul className="space-y-2">
          <li className="flex items-center gap-3">
            <span className="text-gray-500">4.</span>
            <span className="text-red-600 font-semibold">network 4</span>
            <span>: too many requests from this IP</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TrafficMonitor;

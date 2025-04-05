import React from "react";

const ThreatList = () => {
  const connections = [
    "192.168.1.10",
    "192.168.1.15",
    "Device-23",
    "Laptop-Alpha",
    "Unknown-Host",
  ];

  return (
    <div className="bg-white p-6 mt-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Suspicious Network Connections</h2>
      <ul className="space-y-3">
        {connections.map((conn, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 border-b pb-2 last:border-0 text-gray-700"
          >
            <span className="font-bold">{index + 1}.</span>
            <span>{conn}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreatList;

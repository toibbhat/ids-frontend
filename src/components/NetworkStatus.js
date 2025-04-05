import React, { useEffect, useState } from "react";

const NetworkStatus = ({ setStatus }) => {
  const [status, setLocalStatus] = useState("alert"); // default

  useEffect(() => {
    fetch("http://localhost:8080/api/status")
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setLocalStatus(data.status);
          setStatus && setStatus(data.status); // update global state
        }
      })
      .catch((err) => console.error("Failed to fetch status:", err));
  }, []);

  let statusText = "";
  let icon = "";
  let bgColor = "";
  let textColor = "";

  switch (status) {
    case "safe":
      statusText = "Safe - No anomalies";
      icon = "✅";
      bgColor = "bg-green-500";
      textColor = "text-green-500";
      break;
    case "warning":
      statusText = "Warning - Suspicious activity";
      icon = "⚠️";
      bgColor = "bg-yellow-400";
      textColor = "text-yellow-500";
      break;
    default:
      statusText = "Alert - Anomalies detected";
      icon = "❌";
      bgColor = "bg-red-500";
      textColor = "text-red-500";
      break;
  }

  const handleClear = () => {
    setLocalStatus("safe");
    setStatus && setStatus("safe");
  };

  return (
    <div className="bg-white p-6 mt-6 rounded-md shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold text-black">Network Status :</h2>
        <p className={`flex items-center space-x-2 mt-2 ${textColor}`}>
          <span>{icon}</span> <span>{statusText}</span>
        </p>
        {status !== "safe" && (
          <button
            onClick={handleClear}
            className="mt-4 bg-black text-white px-4 py-2 rounded-md"
          >
            Clear / Ignore alerts
          </button>
        )}
      </div>
      <div className={`${bgColor} text-white p-8 rounded-md`}>
        <span className="text-7xl font-bold">{icon}</span>
      </div>
    </div>
  );
};

export default NetworkStatus;

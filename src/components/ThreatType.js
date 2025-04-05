import React from "react";

const ThreatType = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-black">Identify Threat Type:</h2>
      <p className="mt-2 text-red-500">⚠️ Detected: DDoS Attack</p>
    </div>
  );
};

export default ThreatType;

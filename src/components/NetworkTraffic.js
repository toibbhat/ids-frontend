import React, { useState } from "react";

const NetworkTraffic = () => {
  const [packetsSent, setPacketsSent] = useState("??mbps");
  const [packetsReceived, setPacketsReceived] = useState("??mbps");

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold">Network Traffic</h2>
      <p className="mt-2">Packets Sent - {packetsSent}</p>
      <p>Packets Received - {packetsReceived}</p>
      <p className="text-gray-500 mt-2">Alert abnormal activity is detected.</p>
      <button className="mt-4 bg-black text-white px-4 py-2 rounded-md">Clear Graph Status</button>
    </div>
  );
};

export default NetworkTraffic;

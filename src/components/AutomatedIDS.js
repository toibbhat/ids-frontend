import React  , { useState }from "react";
import NetworkStatus from "./NetworkStatus";
import RealTimeGraph from "./RealTimeGraph";
import NetworkTraffic from "./NetworkTraffic";
import ThreatList from "./ThreatList";
import ThreatType from "./ThreatType";

const AutomatedIDS = () => {
  const [status, setStatus] = useState("alert"); // initial status can be "alert", "safe", or "warning"

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mt-4">Automated IDS</h1>
      <p className="text-center text-gray-500">Project under Development</p>
      <NetworkStatus status={status} setStatus={setStatus} />           
       {/* here you can change the status to "warning" or "alert" to see different states */}


      <div className="flex mt-6 space-x-6">
        <div className="w-1/2">
          <RealTimeGraph />
        </div>
        <div className="w-1/2">
          <NetworkTraffic />
        </div>
      </div>
      <ThreatType />
      <ThreatList />
    </div>
  );
};

export default AutomatedIDS;

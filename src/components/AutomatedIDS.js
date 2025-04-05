import React  , { useEffect, useState }from "react";
import NetworkStatus from "./NetworkStatus";
import RealTimeGraph from "./RealTimeGraph";
import NetworkTraffic from "./NetworkTraffic";
import ThreatList from "./ThreatList";
import ThreatType from "./ThreatType";
import axios from "axios";

const AutomatedIDS = () => {
  const [status, setStatus] = useState("alert"); // initial status can be "alert", "safe", or "warning"
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/status");
        setStatus(res.data.status); // assuming backend returns { status: "alert" }
      } catch (err) {
        console.error("Failed to fetch status", err);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // update every 5s
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      <h1 className="text-5xl font-extrabold text-center text-gray-800 drop-shadow-md">Automated IDS</h1>
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

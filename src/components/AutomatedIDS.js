import React, { useEffect, useState } from "react";
import NetworkStatus from "./NetworkStatus";
import RealTimeGraph from "./RealTimeGraph";
import NetworkTraffic from "./NetworkTraffic";
import ThreatList from "./ThreatList";
import ThreatType from "./ThreatType";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";


const AutomatedIDS = () => {
  const [status, setStatus] = useState("alert");
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/status");
        setStatus(res.data.status);
      } catch (err) {
        console.error("Failed to fetch status", err);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`p-6 rounded-xl transition duration-300`}
      style={{
        background: darkMode
          ? "linear-gradient(to bottom right, rgba(30,41,59,0.5), rgba(51,65,85,0.4))"
          : "linear-gradient(to bottom right, rgba(255,255,255,0.7), rgba(240,240,255,0.8))",
        backdropFilter: "blur(12px)",
        border: darkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "0 8px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 className="text-5xl font-extrabold text-center mb-2 drop-shadow">
        Automated IDS
      </h1>
      <p className="text-center mb-6 opacity-80">
        Project under Development
      </p>

      <NetworkStatus status={status} setStatus={setStatus} />

      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
          <RealTimeGraph />
        </div>
        <div className="lg:w-1/2 w-full">
          <NetworkTraffic />
          <ThreatType />
        </div>
      </div>

      <ThreatList />
    </div>
  );
};

export default AutomatedIDS;

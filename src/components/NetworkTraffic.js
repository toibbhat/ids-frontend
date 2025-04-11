import { useEffect, useState } from "react";
import axios from "axios";
import { useTheme } from "../context/ThemeContext";

const NetworkTraffic = () => {
  const [traffic, setTraffic] = useState({ sent: 0, received: 0 });
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchTraffic = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/traffic");
        setTraffic(res.data); // assume it returns { sent: 100, received: 200 }
      } catch (err) {
        console.error("Traffic fetch error", err);
      }
    };

    fetchTraffic();
    const interval = setInterval(fetchTraffic, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="rounded-xl p-6 mt-10 transition duration-300"
      style={{
        background: darkMode
          ? "rgba(30, 41, 59, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: darkMode
          ? "0 8px 32px rgba(0, 0, 0, 0.4)"
          : "0 4px 16px rgba(0, 0, 0, 0.1)",
        color: darkMode ? "#F8FAFC" : "#1E293B",
      }}
    >
      <h2 className="text-2xl font-bold mb-2">📊 Network Traffic</h2>
      <p className="text-sm mb-4 text-gray-500">
        Real-time network traffic data:
      </p>
      <div className="space-y-1">
        <p className="font-medium">
          <span className="text-indigo-500">⬆ Packets Sent:</span> {traffic.sent}
        </p>
        <p className="font-medium">
          <span className="text-green-500">⬇ Packets Received:</span> {traffic.received}
        </p>
      </div>
    </div>
  );
};

export default NetworkTraffic;

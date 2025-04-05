import { useEffect, useState } from "react";
import axios from "axios";

const NetworkTraffic = () => {
  const [traffic, setTraffic] = useState({ sent: 0, received: 0 });

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
    <div className="text-black bg-white p-10 mt-10 rounded-md shadow-md"> 
      <h2 className="text-2xl font-bold mb-4">Network Traffic</h2>
      <p className="text-gray-600">Real-time network traffic data:</p>
      <h3>Packets Sent: {traffic.sent}</h3>
      <h3>Packets Received: {traffic.received}</h3>
    </div>
  );
};

export default NetworkTraffic;

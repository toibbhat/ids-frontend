import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
import TrafficMonitor from "./components/TrafficMonitor";
import ThreatAlerts from "./components/ThreatAlerts";
import Settings from "./components/Settings";
import AutomatedIDS from "./components/AutomatedIDS"; // Your main dashboard
import "./styles.css";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>

    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<AutomatedIDS />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/traffic" element={<TrafficMonitor />} />
          <Route path="/threats" element={<ThreatAlerts />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;


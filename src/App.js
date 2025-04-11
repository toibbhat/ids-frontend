import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import TrafficMonitor from "./components/TrafficMonitor";
import ThreatAlerts from "./components/ThreatAlerts";
import Settings from "./components/Settings";
import AutomatedIDS from "./components/AutomatedIDS"; // Your main dashboard
import "./styles.css";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/ThemeContext";
import TrafficMonitor from "./pages/TrafficMonitor";
import NetworkMap from "./components/NetworkMap";

function AppContent() {
  const { darkMode } = useTheme();

  React.useEffect(() => {
    document.body.style.background = darkMode
      ? "#0d1117" // dark solid
      : "linear-gradient(135deg, rgb(157, 188, 245), rgb(243, 179, 154), rgb(243, 171, 227))";

    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);

  return (
     <div className="relative min-h-screen transition-colors duration-500 overflow-hidden"
      style={{
        background: darkMode
          ? "#0d1117"
          : "linear-gradient(135deg,rgb(157, 188, 245),rgb(243, 179, 154), rgb(243, 171, 227))",
        color: darkMode ? "white" : "black",
      }}
    >
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<AutomatedIDS />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/traffic" element={<TrafficMonitor />} />
          <Route path="/threats" element={<ThreatAlerts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/traffic-monitor" element={<TrafficMonitor />} />
          <Route path="/traffic-monitor" element={<TrafficMonitor />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;

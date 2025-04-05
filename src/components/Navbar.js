import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "Dashboard", route: "/" },
    { label: "Log-in (optional)", route: "/login" },
    { label: "Traffic Monitor", route: "/traffic" },
    { label: "Threat Alerts", route: "/threats" },
    { label: "Settings", route: "/settings" },
  ];

  return (
    <div className= "bg-gradient-to-r from-blue-200/30 to-purple-200/30 backdrop-blur-xl rounded-xl shadow-xl p-4 mx-6 mt-4 flex justify-center space-x-4">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={() => navigate(btn.route)}
          className="text-gray-900 px-4 py-2 rounded-lg bg-white/40 hover:bg-white/70 hover:shadow-lg hover:scale-105 transform transition-all duration-200 font-semibold"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;

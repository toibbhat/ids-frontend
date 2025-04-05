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
    <div className="flex justify-end space-x-4 p-4 bg-gray-200">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={() => navigate(btn.route)}
          className="border border-gray-500 px-4 py-2 rounded-md hover:bg-gray-300"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;

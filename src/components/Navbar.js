// src/components/Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // react-icons package

const Navbar = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const buttons = [
    { label: "Dashboard", route: "/" },
    { label: "Log-in (optional)", route: "/login" },
    { label: "Traffic Monitor", route: "/traffic" },
    { label: "Threat Alerts", route: "/threats" },
    { label: "Settings", route: "/settings" },
  ];

  return (
    <div
      className={`flex justify-between items-center p-4 mx-4 mt-4 rounded-xl shadow-md
        backdrop-blur-md border transition-all duration-300 
        ${darkMode 
          ? "bg-white/10 border-white/20" 
          : "bg-white/30 border-gray-200"}
      `}
    >
      {/* Navigation buttons in center */}
      <div className="flex flex-wrap justify-center gap-4 flex-1">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => navigate(btn.route)}
            className={`px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110
              ${darkMode 
                ? "bg-white/10 text-white hover:bg-white/20 hover:shadow-lg" 
                : "bg-white/70 text-gray-900 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:shadow-md"}
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Socials on the right */}
      <div className="flex gap-4 ml-4 scale-125">
        <a
          href="https://github.com/toibbhat/Automated-IDS" // 🔁 Replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-transform hover:scale-150"
        >
          <FaGithub className={`${darkMode ? "text-white" : "text-black"}`} />
        </a>
        <a
          href="https://www.linkedin.com/in/toib-bhat-123704242?originalSubdomain=in" // 🔁 Replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-transform hover:scale-150"
        >
          <FaLinkedin className={`${darkMode ? "text-white" : "text-blue-700"}`} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

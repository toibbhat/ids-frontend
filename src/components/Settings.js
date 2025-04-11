// src/components/Settings.js
import React from "react";
import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div
      className="max-w-xl mx-auto mt-12 p-8 rounded-xl shadow-lg transition duration-300"
      style={{
        backgroundColor: darkMode
          ? "rgba(30, 41, 59, 0.5)"
          : "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: darkMode ? "#F8FAFC" : "#1E293B",
      }}
    >
      <h2 className="text-3xl font-extrabold mb-6 text-center">
        ⚙️ Settings
      </h2>
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">Enable Dark Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
            className="sr-only peer"
          />
          <div
            className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600
              after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
              after:bg-white after:border-gray-300 after:border after:rounded-full 
              after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Settings;

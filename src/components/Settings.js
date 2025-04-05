import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="p-6 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl shadow-lg text-black dark:text-white transition">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <div className="flex items-center space-x-4">
        <span>Dark Mode:</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-md transition-colors ${
            darkMode
              ? "bg-yellow-500 hover:bg-yellow-600 text-black"
              : "bg-gray-800 hover:bg-gray-900 text-white"
          }`}
        >
          {darkMode ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
};

export default Settings;

"use client";

import React from "react";
import { useTheme } from "next-themes";

const ToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
    type="button"
      onClick={() => setTheme(theme === "dark"? "light" : "dark")}
      className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
    >
      {theme === "dark"? "Light" : "Dark"} 
    </button>
  );
};

export default ToggleButton;

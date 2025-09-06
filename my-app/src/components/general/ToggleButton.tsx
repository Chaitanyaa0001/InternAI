"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {FiSun, FiMoon} from 'react-icons/fi';

const ToggleButton: React.FC = () => {
  const { theme, setTheme ,resolvedTheme} = useTheme();
  const [Mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

    if(!Mounted) return null;

   const currentTheme = resolvedTheme || theme;

  return (
    <button
    type="button"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 ml-2  rounded-full hover:text-white  cursor-pointer dark:text-gray-100 hover:bg-blue-700 text-black  transition-colors"
    >
      {currentTheme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
};

export default ToggleButton;

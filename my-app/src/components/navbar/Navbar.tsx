import React from "react";
import Image from "next/image";
import ToggleButton from "../general/ToggleButton";

const Navbar = () => (
  <nav className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800 shadow-sm">
    <div className="flex justify-between items-center w-[90%] lg:w-[80%] mx-auto p-4">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={60} height={50} />
        <h1 className="text-black font-semibold text-xl dark:text-white text-[1rem]">
          Intern <span className="text-blue-700 text-[1rem]">AI</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4 text-[1em]">
        <button className="text-gray-800 cursor-pointer dark:text-gray-100">
          Featured
        </button>
        <button className="text-gray-800 cursor-pointer dark:text-gray-100">
          How it works
        </button>
        <ToggleButton />
        <button className="text-black hover:text-white dark:text-white font-semibold cursor-pointer hover:bg-blue-600 px-3 py-2 rounded-md transition">
          Sign in
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>

      {/* Mobile Menu (only Sign in + Theme Toggle) */}
      <div className="flex items-center gap-3 lg:hidden">
        <ToggleButton />
        <button className="text-black hover:text-white dark:text-white font-semibold cursor-pointer hover:bg-blue-600 px-3 py-2 rounded-md transition">
          Sign in
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;

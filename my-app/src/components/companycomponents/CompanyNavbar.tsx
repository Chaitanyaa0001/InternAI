"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import CompanySidebar from "./CompanySidebar";
import ToggleButton from "../general/ToggleButton";

const CompanyNavbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <CompanySidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 flex flex-col">
        <nav className="w-full z-50 fixed px-8 bg-white border-b dark:border-gray-500 dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234] dark:shadow-md py-5 flex items-center justify-between">
          <Image height={50} width={50} src="/logo.png" alt="logo" className="cursor-pointer"/>
          <h1 className="text-xl lg:text-2xl font-bold dark:text-white">
            Intern <span className="text-blue-700">AI</span>
          </h1>

          <div className="flex items-center gap-4 ml-auto lg:mr-10">
            <ToggleButton/>
            <Image src="/profile.jpg" alt="Profile" width={46} height={46} className="rounded-full cursor-pointer border-2 border-gray-500 dark:border-blue-600"/>
            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={26} className="text-gray-700" />s
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CompanyNavbar;

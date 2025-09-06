"use client";
import React from "react";
import Link from "next/link";
import { Home, Compass, Briefcase,  Upload, X, Headphones,LogOut,Brain } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <aside
        className={`fixed  left-0 h-[640px] lg:h-[645px] w-64 border-r bg-white dark:border-gray-500 dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234] shadow-md flex flex-col justify-between p-4 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0 top-0" : "-translate-x-full top-0"} 
        lg:translate-x-0 lg:top-21`}  // 👈 on large screens, start below navbar
      >
        <div>
          {/* Logo Section (only mobile shows close btn) */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h1 className="text-xl font-bold text-blue-700">InternAI</h1>
            <button onClick={onClose}>
              <X size={28} className="text-gray-700" />s
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link href="/student/dashboard" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Home size={20} /> Dashboard
            </Link>
            <Link href="/student/recommendation" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Compass size={20} /> AI Recommendations
            </Link>
            <Link href="/student/internships" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600  hover:text-white dark:text-white">
              <Briefcase size={20} /> Browse Internships
            </Link>
            <Link href="/student/uploadresume" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Upload size={20} /> Upload Resume
            </Link>
            <Link href="/student/aimentor" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Brain size={20} /> AI Mentor   
            </Link>
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="border-t pt-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-3 ">Quick Actions</h2>
          <div className="space-y-2">
            <button type="button" className="w-full flex items-center gap-3 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              <Headphones size={20} /> Help Center
            </button>
            <button type="button" className="w-full flex items-center gap-3 p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
                <LogOut size={20} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay (Mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;

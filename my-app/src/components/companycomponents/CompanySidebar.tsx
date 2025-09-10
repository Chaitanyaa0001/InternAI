"use client";

import React from "react";
import Link from "next/link";
import { Home, Briefcase, Upload, Users, X, LogOut, Headphones } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompanySidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <aside
        className={`fixed left-0 h-[640px] lg:h-[645px] w-64 border-r bg-white dark:border-gray-500 dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234] shadow-md flex flex-col justify-between p-4 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0 top-0" : "-translate-x-full top-0"} 
        lg:translate-x-0 lg:top-21`}
      >
        <div>
          {/* Logo Section (mobile only) */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h1 className="text-xl font-bold text-blue-700">InternAI</h1>
            <button onClick={onClose}>
              <X size={28} className="text-gray-700" />s
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <Link href="/company/dashboard" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Home size={20} /> Dashboard
            </Link>
            <Link href="/company/manageinternship" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Briefcase size={20} /> Manage Internships
            </Link>
            <Link href="/company/postinternship" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Upload size={20} /> Post Internship
            </Link>
            <Link href="/company/viewcandidates" className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-600 hover:text-white dark:text-white">
              <Users size={20} /> View Candidates
            </Link>
          </nav>
        </div>

        {/* Quick Actions */}
        <div className="border-t pt-4">
          <h2 className="text-sm font-semibold text-gray-500 mb-3">Quick Actions</h2>
          <div className="flex flex-col gap-2">
            <Link href="/helpcenter">
              <button type="button" className="w-full flex items-center gap-3 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                <Headphones size={20} /> Help Center
              </button>
            </Link>
            <Link href="/">
              <button type="button" className="w-full flex items-center gap-3 p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition">
                <LogOut size={20} /> Logout
              </button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default CompanySidebar;

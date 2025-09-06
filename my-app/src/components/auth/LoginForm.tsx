// components/LoginForm.tsx
"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";


export default function LoginForm() {
  const [role, setRole] = useState("student");

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">
          Email address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Role Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Select your role
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === "student"}
              onChange={(e) => setRole(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>Student</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              value="company"
              checked={role === "company"}
              onChange={(e) => setRole(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span>Company</span>
          </label>

          
        </div>
      </div>

      {/* Sign in button */}
      <button
        type="submit"
        className="w-full rounded-md bg-blue-900 dark:bg-blue-600 text-white py-2 font-medium hover:bg-blue-800 dark:hover:bg-blue-500 transition"
      >
        Sign in → ({role})
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
        <span className="text-sm text-gray-500 dark:text-gray-400">
          OR CONTINUE WITH
        </span>
        <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
      </div>

      {/* Google button */}
      <button className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition">
       <FcGoogle/> Continue with Google
      </button>

      {/* Sign up link */}
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Don&apos;t have an account?{" "}
        <a
          href="/signup"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}

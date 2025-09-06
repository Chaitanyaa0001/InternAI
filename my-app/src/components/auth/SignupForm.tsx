"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignupForm = () => {
  const [role, setRole] = useState("student");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    

    
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Full name
        </label>
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Email address
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          placeholder="Create a password"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-white">
          Confirm password
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Role selection */}
      <div>
        <label className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
          Select your role
        </label>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 cursor-pointer text-gray-900 dark:text-white">
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
          <label className="flex items-center gap-2 cursor-pointer text-gray-900 dark:text-white">
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

      <button
        type="submit"
        className="w-full rounded-md bg-blue-900 dark:bg-blue-600 text-white py-2 font-medium hover:bg-blue-800 dark:hover:bg-blue-500 transition"
      >
        Create account → ({role})
      </button>

      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
        <span className="text-sm text-gray-500 dark:text-gray-400">OR CONTINUE WITH</span>
        <div className="h-px flex-1 bg-gray-300 dark:bg-gray-700" />
      </div>

      <button
        type="button"
        className="w-full flex items-center justify-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white py-2 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <FcGoogle size={20} /> Continue with Google
      </button>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
        >
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignupForm;

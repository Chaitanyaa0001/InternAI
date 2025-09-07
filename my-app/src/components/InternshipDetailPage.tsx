"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import InternshipCardProps from "@/types/InternshipCardProps";

interface Props {
  internshipId: number;
  internshipState: InternshipCardProps; // data must come from parent / dynamic route
}

const InternshipDetailPage: React.FC<Props> = ({ internshipId, internshipState }) => {
  const router = useRouter();
  const [internship, setInternship] = useState<InternshipCardProps>(internshipState);

  const { position, company, location, duration, skills, description, status } = internship;

  const handleApply = () => {
    // Frontend-only apply
    setInternship(prev => prev ? { ...prev, status: "Applied" } : prev);

    // Backend API call commented out for now
    // fetch(`/api/internships/${internshipId}/apply`, { method: "POST" });
  };

  const statusStyles: Record<string, string> = {
    Applied: "bg-yellow-100 text-yellow-700",
    Accepted: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    "Not Applied": "bg-gray-100 text-gray-700",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0F1C] text-gray-800 dark:text-gray-200 p-6 lg:p-16 flex flex-col gap-10">
      <button
        className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-800 dark:hover:text-blue-300 transition"
        onClick={() => router.back()}
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white dark:bg-[#1A2234] rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl font-bold text-blue-600">{position}</h1>
          {status && (
            <span className={`px-4 py-2 rounded-full font-semibold ${statusStyles[status]}`}>
              {status}
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          <span className="font-semibold">{company}</span> • {location} • {duration}
        </p>

        <div>
          <h2 className="text-xl font-semibold dark:text-white">About this Internship</h2>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold dark:text-white">Skills Required</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {status !== "Applied" && status !== "Accepted" && status !== "Rejected" && (
          <button
            onClick={handleApply}
            className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
          >
            Apply Now
          </button>
        )}
      </div>
    </div>
  );
};

export default InternshipDetailPage;

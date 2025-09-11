"use client";
import React, { useState } from "react";
import { HiCheck, HiX } from "react-icons/hi";

interface CandidateCardProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  position: string;
  company: string;
  duration: string;
  skills: string[];
  description: string;
  status?: "Applied" | "Accepted" | "Rejected"; // initial status from parent
  onStatusChange?: (id: string, status: "Accepted" | "Rejected") => Promise<void> | void;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  id,
  name,
  email,
  phone,
  location,
  position,
  company,
  duration,
  skills,
  description,
  status = "Applied",
  onStatusChange,
}) => {
  const [currentStatus, setCurrentStatus] = useState(status);
  const [loading, setLoading] = useState(false);

  const handleClick = async (newStatus: "Accepted" | "Rejected") => {
    setLoading(true);
    try {
      if (onStatusChange) {
        await onStatusChange(id, newStatus);
      }
      setCurrentStatus(newStatus);
    } catch (err) {
      console.error(err);
      alert("Error updating status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white lg:w-[80vw] shadow-md dark:bg-[#182031] rounded-lg p-6 flex flex-col gap-2">
      <h2 className="text-lg font-semibold dark:text-white lg:text-2xl">{name}</h2>
      <p className="text-gray-600  dark:text-white">{email} | {phone}</p>
      <p className="text-blue-600 font-medium">{position}</p>
      <p className="text-gray-600">{company} • {location} • {duration}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 my-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 text-sm bg-gray-200 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm">{description}</p>

      {/* Actions */}
      <div className="flex flex-row gap-2 mt-4">
        {currentStatus === "Applied" ? (
          loading ? (
            <button
              type="button"
              disabled
              className="bg-gray-400 text-white px-4 py-2 rounded-md flex items-center justify-center cursor-not-allowed"
            >
              <svg
                className="mr-2 h-5 w-5 animate-spin text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Processing…
            </button>
          ) : (
            <>
              <button
                onClick={() => handleClick("Accepted")}
                className="flex items-center cursor-pointer bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                <HiCheck className="mr-1" />
                Accept
              </button>
              <button
                onClick={() => handleClick("Rejected")}
                className="flex items-center cursor-pointer bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                <HiX className="mr-1" />
                Reject
              </button>
            </>
          )
        ) : (
          <span
            className={`text-sm font-semibold px-4 py-2 rounded-md ${
              currentStatus === "Accepted"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {currentStatus}
          </span>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;

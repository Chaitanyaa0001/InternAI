"use client";
import React from "react";
import Link from "next/link";

interface RecommendationCardProps {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  skills: string[];
  description: string;
  applicants?: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  id,
  position,
  company,
  location,
  duration,
  skills,
  description,
  applicants = "0 applicants",
}) => {
  return (
    <div className="p-5 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-[#0A0F1C] shadow flex flex-col justify-between">
      {/* Header */}
      <h3 className="text-lg font-semibold text-blue-600">{position}</h3>

      {/* Company Info */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {company} • {location} • {duration}
      </p>

      

      {/* Description */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-5 line-clamp-2">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-5">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {applicants}
        </p>
        <Link
          href={`/studentdashboard/${id}`}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;

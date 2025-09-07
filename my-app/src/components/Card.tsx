"use client";
import React from "react";
import Link from "next/link";
import InternshipCardProps from "@/types/InternshipCardProps";

const Card: React.FC<InternshipCardProps> = ({
  id,
  position,
  company,
  location,
  duration,
  skills,
  description,
  status,
  showApplyButton = true,
  clickable = false, 

}) => {
  const CardContent = (
    <div className="p-5 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-[#0A0F1C] shadow flex flex-col justify-between hover:shadow-lg transition">
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

      {/* Skills */}
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
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {status && <span>Status: {status}</span>}
        </div>

        {showApplyButton && (
          <Link
            href={`/student/dashboard/${id}`}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
          >
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );

  return clickable ? (
    <Link href={`/student/dashboard/${id}`} className="block">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
};

export default Card;

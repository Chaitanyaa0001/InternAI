"use client";
import React from "react";
import Link from "next/link";
import InternshipCardProps, {  } from "@/types/InternshipCardProps";

interface CardProps extends InternshipCardProps {
  onApply?: () => void;
}

const Card: React.FC<CardProps> = ({
  position,
  company,
  location,
  duration,
  skills,
  description,
  status,
  showApplyButton = true,
  clickable = false,
  linkTo,
  onApply,
}) => {
  const CardContent = (
    <div className="p-5 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-[#0A0F1C] shadow flex flex-col justify-between hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-blue-600">{position}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {company} • {location} • {duration}
      </p>
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

      <div className="flex justify-between items-center mt-4">
        {status && (
          <div
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              status === "Applied"
                ? "bg-yellow-100 text-yellow-700"
                : status === "Accepted"
                ? "bg-green-100 text-green-700"
                : status === "Rejected"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {status}
          </div>
        )}

        {showApplyButton && onApply && (
          <button
            onClick={onApply}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
          >
            Apply Now
          </button>
        )}

        {showApplyButton && !onApply && linkTo && (
          <Link
            href={linkTo}
            className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700"
          >
            Apply Now
          </Link>
        )}
      </div>
    </div>
  );

  return clickable && linkTo ? <Link href={linkTo}>{CardContent}</Link> : CardContent;
};

export default Card;

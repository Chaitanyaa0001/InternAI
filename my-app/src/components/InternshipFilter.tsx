"use client";
import { useState } from "react";
import InternshipCardProps from "@/types/InternshipCardProps";
import Card from "@/components/Card";

interface Props {
  internships: InternshipCardProps[];
}

export default function BrowseInternshipsClient({ internships }: Props) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [duration, setDuration] = useState("");

  const filtered = internships.filter((internship) => {
    return (
      internship.position.toLowerCase().includes(search.toLowerCase()) &&
      (location ? internship.location === location : true) &&
      (position ? internship.position === position : true) &&
      (duration ? internship.duration === duration : true)
    );
  });

  const uniqueLocations = [...new Set(internships.map((i) => i.location))];
  const uniquePositions = [...new Set(internships.map((i) => i.position))];
  const uniqueDurations = [...new Set(internships.map((i) => i.duration))];

  return (
    <div className="mt-24 lg:ml-64 p-6">
      <h1 className="text-2xl font-bold dark:text-white mb-6">Browse Internships</h1>

      {/* Filters Section */}
      <div className="bg-white dark:bg-[#1A2234] rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by position..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-1/3 px-4 py-2 border rounded-lg dark:bg-[#101828] dark:text-white focus:outline-none"
          />

          {/* Location Filter */}
          <select
          aria-label="state"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full lg:w-1/4 px-4 py-2 border rounded-lg dark:bg-[#101828] dark:text-white focus:outline-none"
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Position Filter */}
          <select
          aria-label="state"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full lg:w-1/4 px-4 py-2 border rounded-lg dark:bg-[#101828] dark:text-white focus:outline-none"
          >
            <option value="">All Positions</option>
            {uniquePositions.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>

          {/* Duration Filter */}
          <select
          aria-label="state "
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full lg:w-1/4 px-4 py-2 border rounded-lg dark:bg-[#101828] dark:text-white focus:outline-none"
          >
            <option value="">All Durations</option>
            {uniqueDurations.map((dur) => (
              <option key={dur} value={dur}>
                {dur}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.length > 0 ? (
          filtered.map((i) => (
            <Card key={i.id} {...i} showApplyButton linkTo={`/student/internships/${i.id}`} />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-300 col-span-2">
            No internships found.
          </p>
        )}
      </div>
    </div>
  );
}

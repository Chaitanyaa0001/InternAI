"use client";
import { useState } from "react";
import CandidateCard from "./candidatecard";

interface Candidate {
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
  status?: "Applied" | "Accepted" | "Rejected";
}

const initialCandidates: Candidate[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@mit.edu",
    phone: "+1 (555) 123-4567",
    location: "Boston, MA",
    position: "Frontend Developer Intern",
    company: "MIT",
    duration: "Summer 2025",
    skills: ["React", "TypeScript", "Node.js", "CSS"],
    description:
      "A motivated computer science student with prior internship experience in frontend development. Strong focus on building scalable, user-friendly applications.",
    status: "Applied",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+1 (555) 654-3210",
    location: "New York, NY",
    position: "Backend Developer Intern",
    company: "NYU",
    duration: "6 Months",
    skills: ["Node.js", "Express", "MongoDB", "TypeScript"],
    description:
      "Backend developer with a passion for distributed systems and APIs. Experienced in Node.js and cloud deployment.",
    status: "Applied",
  },
];

export default function CandidateList() {
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState(initialCandidates);

  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.position.toLowerCase().includes(search.toLowerCase()) ||
      c.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()))
  );

  const handleStatusChange = async (id: string, status: "Accepted" | "Rejected") => {
    // Update UI immediately
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );

    // TODO: Call backend API here to persist status
    console.log(`Candidate ${id} marked as ${status}`);
  };

  return (
    <div className="lg:ml-70 lg:mt-25">
      <h1 className="text-2xl font-bold mb-4 dark:text-blue-700">Applications</h1>
      <input
        type="text"
        placeholder="Search by name, skills, or position..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[80vw] p-3 border border-gray-300 dark:placeholder-white rounded-lg mb-6"
      />

      <div className="space-y-4">
        {filteredCandidates.map((c) => (
          <CandidateCard
            key={c.id}
            {...c}
            onStatusChange={(status) => handleStatusChange(c.id, status)}
          />
        ))}

        {filteredCandidates.length === 0 && (
          <p className="text-gray-500">No candidates found.</p>
        )}
      </div>
    </div>
  );
}

"use client";
import AppNavbar from "@/components/navbar/AppNavbar";
import Card from "@/components/Card";

export default function BrowseInternships() {
  const availableInternships = [
    {
      id: 1,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description: "Build modern web apps.",
    },
    {
      id: 2,
      position: "Backend Developer Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "3 months",
      skills: ["Node.js", "Express", "MongoDB"],
      description: "Develop backend APIs.",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-[#0A0F1C]">
      <AppNavbar />
      <div className="mt-24 lg:ml-64 p-6">
        <h1 className="text-2xl font-bold dark:text-white mb-6">Browse Internships</h1>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {availableInternships.map((i) => <Card key={i.id} {...i} />)}
        </div>
      </div>
    </div>
  );
}

import AppNavbar from "@/components/navbar/AppNavbar";
import InternshipCardProps from "@/types/InternshipCardProps";
import BrowseInternshipsClient from "@/components/InternshipFilter";

export default function BrowseInternshipsPage() {
  // Later fetch from DB / API
  const availableInternships: InternshipCardProps[] = [
    {
      id: 1,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description: "Build modern web apps.",
      status: "Not Applied",
    },
    {
      id: 2,
      position: "Backend Developer Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "3 months",
      skills: ["Node.js", "Express", "MongoDB"],
      description: "Develop backend APIs.",
      status: "Not Applied",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-[#0A0F1C]">
      <AppNavbar />

      <BrowseInternshipsClient internships={availableInternships} />
    </div>
  );
}

import InternshipDetailPage from "@/components/InternshipDetailPage";
import InternshipCardProps from "@/types/InternshipCardProps";

interface PageProps {
  params: { id: string };
}

export default function RecommendationInternshipPage({ params }: PageProps) {
  const { id } = params;

  const mockData = [
    {
      id: 1,
      position: "AI/ML Engineering Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "3 months",
      skills: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
      description: "Join our AI team to develop cutting-edge ML models.",
      status: "Applied",
    },
    {
      id: 2,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description: "Build modern web applications.",
      status: "Not Applied",
    },
  ] satisfies InternshipCardProps[];

  const internship = mockData.find(i => i.id === Number(id));

  if (!internship) {
    return <p className="text-center mt-20 text-red-500 text-xl font-medium">Internship not found</p>;
  }

  return (
    <InternshipDetailPage
      internshipId={Number(id)}
      internshipState={internship} // ✅ Pass the exact data here
    />
  );
}

import AppNavbar from "@/components/navbar/AppNavbar";
import Card from "@/components/Card";
import InternshipCardProps from "@/types/InternshipCardProps";

export default function RecommendationRoute() {

const recommendations= [
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

  return (
    <div className="min-h-screen dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234]">
      <AppNavbar />
      <div className="mt-30 lg:ml-70  space-y-6">
        <div className="bg-white w-fit dark:bg-[#1A2234] rounded-lg shadow p-6">
          <h1 className="text-xl font-semibold dark:text-white mb-4">Upload Resume</h1>
          <input
          aria-label="state"
            type="file"
            className="block w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            After uploading, your personalized internship recommendations will appear here.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {recommendations.map((i) => (
            <Card key={i.id} {...i} showApplyButton linkTo={`/student/recommendation/${i.id}`}  />
          ))}
        </div>
      </div>
    </div>
  );
}

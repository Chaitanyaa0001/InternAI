import AppNavbar from "@/components/navbar/AppNavbar";
import Card from "@/components/Card";

export default function RecommendationRoute() {

const recommendations= [ {
      id: 1,
      position: "AI/ML Intern",
      company: "TechCorp",
      location: "Remote",
      duration: "3 months",
      skills: ["Python", "Machine Learning"],
      description: "Work on ML models.",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-[#0A0F1C]">
      <AppNavbar />
      <div className="mt-20 lg:ml-44  space-y-6">
        <div className="bg-white dark:bg-[#1A2234] rounded-lg shadow p-6">
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
          {recommendations.map((i) => <Card key={i.id} {...i} />)}
        </div>
      </div>
    </div>
  );
}

import AppNavbar from "@/components/navbar/AppNavbar";
import Link from "next/link";
import { FaUserGraduate, FaBrain, FaQuestionCircle, FaLaptopCode } from "react-icons/fa";

export default function StudentDashboard() {
  // Recommendation cards data
  const recommendationCards = [
    {
      id: 1,
      position: "AI/ML Engineering Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "3 months",
      skills: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
      description:
        "Join our AI team to develop cutting-edge machine learning models. Work on real-world problems and gain hands-on experience with the latest AI technologies.",
      applicants: "45 applicants",
    },
    {
      id: 2,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description:
        "Help build modern web applications using React and TypeScript. Perfect opportunity to learn from experienced developers in a fast-paced startup environment.",
      applicants: "28 applicants",
    },
    {
      id: 3,
      position: "Data Analytics Intern",
      company: "DataFlow Solutions",
      location: "New York, NY",
      duration: "4 months",
      skills: ["SQL", "Python", "Tableau", "Statistics"],
      description:
        "Analyze large datasets to extract meaningful insights. Work with cross-functional teams to support data-driven decision making across the organization.",
      applicants: "20 applicants",
    },
  ];

  return (
    <main className="min-h-screen dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234] flex flex-col">
      <AppNavbar />

      <div className="p-6 lg:mt-20 lg:ml-64 transition-all duration-300 space-y-6">
        {/* Welcome Section */}
        <div className="flex items-center gap-3">
          <FaUserGraduate className="text-blue-500 text-3xl" />
          <div>
            <h1 className="text-2xl font-bold dark:text-white">Welcome back, User</h1>
            <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <FaBrain className="text-yellow-400" /> Discover AI-powered internship matches
            </p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="p-6 bg-white dark:bg-[#1A2234] rounded-lg shadow">
          <h2 className="font-semibold text-lg dark:text-white mb-4">AI Recommendations</h2>
          {recommendationCards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendationCards.map((card) => (
                <div
                  key={card.id}
                  className="p-5 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-[#0A0F1C] shadow flex flex-col justify-between"
                >
                  {/* Header */}
                  <h3 className="text-lg font-semibold text-blue-600">{card.position}</h3>

                  {/* Company & Info */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {card.company} • {card.location} • {card.duration}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {card.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 line-clamp-2">
                    {card.description}
                  </p>

                  {/* Footer: Applicants + Apply Link */}
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{card.applicants}</p>
                    <Link
                      href={`/studentdashboard/${card.id}`}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center py-6">
              Parse your resume to get recommendations 🚀
            </p>
          )}
        </div>

        {/* Quick Actions */}
      

        <div>
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Quick Actions</h2>
              
            <div className="flex flex-col md:flex-row justify-between gap-6">
              {/* AI Mentor */}
              <Link
                href="/profile"
                className="flex flex-col items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg flex-1 h-[160px] hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                <FaUserGraduate className="text-5xl mb-3" />
                <span className="font-semibold text-center text-sm">AI Mentor</span>
              </Link>
              
              {/* Browse Internships */}
              <Link
                href="/internships"
                className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-xl shadow-lg flex-1 h-[160px] hover:bg-purple-700 transition transform hover:-translate-y-1"
              >
                <FaLaptopCode className="text-5xl mb-3" />
                <span className="font-semibold text-center text-sm">Browse Internships</span>
              </Link>
              
              {/* Help Center */}
              <Link
                href="/help"
                className="flex flex-col items-center justify-center bg-orange-600 text-white rounded-xl shadow-lg flex-1 h-[160px] hover:bg-orange-700 transition transform hover:-translate-y-1"
              >
                <FaQuestionCircle className="text-5xl mb-3" />
                <span className="font-semibold text-center text-sm">Help Center</span>
              </Link>
            </div>
        </div>



      </div>
    </main>
  );
}

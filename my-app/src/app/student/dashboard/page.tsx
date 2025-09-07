import AppNavbar from "@/components/navbar/AppNavbar";
import Card from "@/components/Card";
import {
  FaUserGraduate,
  FaBrain,
  FaQuestionCircle,
  FaLaptopCode,
} from "react-icons/fa";
import Link from "next/link";
import InternshipCardProps from "@/types/InternshipCardProps";

export default function StudentDashboard() {
  const appliedInternships: InternshipCardProps[] = [
    {
      id: 1,
      position: "AI/ML Engineering Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "3 months",
      skills: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
      description:
        "Worked on developing machine learning models for real-world problems.",
      status: "Applied",
      showApplyButton: false,
    },
    {
      id: 2,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description: "Built modern web apps and learned from experienced devs.",
      status: "Applied",
      showApplyButton: false,
    },
    {
      id: 3,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description: "Built modern web apps and learned from experienced devs.",
      status: "Applied",
      showApplyButton: false,
    },
    {
      id: 4,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description: "Built modern web apps and learned from experienced devs.",
      status: "Applied",
      showApplyButton: false,
    },
  ];

  const profileCompletion = 70;
    const totalApplications = appliedInternships.length;


  return (
    <main className="min-h-screen dark: flex flex-col dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234] ">
      <AppNavbar />
      <div className="p-6 mt-24 lg:ml-64 space-y-6">
        {/* Welcome */}
        <div className="flex items-center gap-3">
          <FaUserGraduate className="text-blue-500 text-3xl" />
          <div>
            <h1 className="text-2xl font-bold dark:text-white">
              Welcome back, User
            </h1>
            <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <FaBrain className="text-yellow-400" /> Discover AI-powered
              internship matches
            </p>
          </div>
        </div>
        
        {/* Profile Progress */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
  {/* Total Applications */}
  <div className="p-4 bg-white dark:bg-[#1A2234] rounded-lg shadow flex flex-col items-center justify-center">
    <h2 className="font-semibold text-lg dark:text-white">Total Applications</h2>
    <p className="text-3xl font-bold text-blue-600 mt-2">{totalApplications}</p>
    <span className="text-gray-600 dark:text-gray-400">Internships Applied</span>
  </div>

  {/* Profile Progress */}
  <div className="p-4 bg-white dark:bg-[#1A2234] rounded-lg shadow">
    <h2 className="font-semibold text-lg dark:text-white mb-3">
      Profile Progress
    </h2>
    <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-4 rounded-full transition-all"
        style={{ width: `${profileCompletion}%` }}
      ></div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mt-2">
      Your profile is <span className="font-semibold">{profileCompletion}%</span> complete.
    </p>
  </div>
</div>


        {/* Applied Internships */}
        <div className="p-4 bg-white dark:bg-[#1A2234] rounded-lg shadow">
          <h2 className="font-semibold text-lg dark:text-white mb-4">
            Applied Internships
          </h2>
          <div className="h-80 overflow-y-auto pr-2">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
              {appliedInternships.map((i) => (
                <Card key={i.id} {...i} clickable />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-6 dark:text-white">
            Quick Actions
          </h2>
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <Link
              href="/profile"
              className="flex flex-col items-center justify-center bg-blue-600 text-white rounded-xl shadow-lg flex-1 h-[160px] hover:bg-blue-700 transition transform hover:-translate-y-1"
            >
              <FaUserGraduate className="text-5xl mb-3" />
              <span className="font-semibold text-center text-sm">AI Mentor</span>
            </Link>
            <Link
              href="/internships"
              className="flex flex-col items-center justify-center bg-purple-600 text-white rounded-xl shadow-lg flex-1 h-[160px] hover:bg-purple-700 transition transform hover:-translate-y-1"
            >
              <FaLaptopCode className="text-5xl mb-3" />
              <span className="font-semibold text-center text-sm">
                Browse Internships
              </span>
            </Link>
            <Link
              href="/help"
              className="flex flex-col items-center justify-center bg-orange-600 text-white rounded-xl shadow-lg flex-1 h-[160px] hover:bg-orange-700 transition transform hover:-translate-y-1"
            >
              <FaQuestionCircle className="text-5xl mb-3" />
              <span className="font-semibold text-center text-sm">
                Help Center
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

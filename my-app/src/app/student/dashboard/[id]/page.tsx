import Link from "next/link";

async function getInternshipData(id: string) {
  const data = [
    {
      id: 1,
      position: "AI/ML Engineering Intern",
      company: "TechCorp Inc.",
      match: 92,
      location: "San Francisco, CA",
      duration: "3 months",
      skills: ["Python", "TensorFlow", "Machine Learning", "Data Science"],
      description:
        "Join our AI team to develop cutting-edge machine learning models. Work on real-world problems and gain hands-on experience with the latest AI technologies.",
      applicants: "45 applicants",
      posted: "2 days ago",
    },
    {
      id: 2,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      match: 78,
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description:
        "Help build modern web applications using React and TypeScript. Perfect opportunity to learn from experienced developers in a fast-paced startup environment.",
      applicants: "28 applicants",
      posted: "5 days ago",
    },
  ];

  return data.find((item) => item.id === Number(id));
}

interface PageProps {
  params: { id: string };
}

export default async function ApplyPage({ params }: PageProps) {
  const cardData = await getInternshipData(params.id);

  if (!cardData)
    return (
      <p className="text-center mt-20 text-red-500 text-xl font-medium">
        Internship not found!
      </p>
    );

  return (
    <div className=" h-full bg-gray-50 dark:bg-[#0A0F1C] text-gray-800 dark:text-gray-200 p-6 lg:p-16 flex flex-col gap-10">
      {/* Back Link */}
      <Link
        href="/studentdashboard"
        className="text-blue-600 dark:text-blue-400 font-medium underline hover:text-blue-800 dark:hover:text-blue-300 transition"
      >
        ← Back to Dashboard
      </Link>

      {/* Internship Title & Match */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          {cardData.position}
        </h1>
        <span
          className={`px-5 py-2 rounded-full text-sm font-semibold ${
            cardData.match >= 80
              ? "bg-green-100 text-green-700"
              : cardData.match >= 70
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {cardData.match}% Match
        </span>
      </div>

      {/* Company Info */}
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-2">
        <p className="text-lg font-semibold">{cardData.company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {cardData.location} • {cardData.duration}
        </p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-3">
        {cardData.skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-sm font-medium rounded-full hover:scale-105 transition cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Description Section */}
      <div className="mt-6 leading-relaxed text-lg">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700 dark:text-gray-200">
          About the Internship
        </h2>
        <p>{cardData.description}</p>
      </div>

      {/* Applicants Info */}
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mt-6">
        <p>{cardData.applicants} • {cardData.posted}</p>
      </div>

      {/* Apply Button */}
      <div className="mt-8">
        <button className="w-full md:w-1/3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl hover:from-green-600 hover:to-green-800 transition text-lg font-semibold shadow-lg">
          Confirm Apply 🚀
        </button>
      </div>
    </div>
  );
}
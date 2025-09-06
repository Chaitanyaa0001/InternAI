import AppNavbar from "@/components/navbar/AppNavbar";

export default function StudentDashboard() {
  return (
    <main className="min-h-screen dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234] flex flex-col">
      {/* Navbar (includes Sidebar) */}
      <AppNavbar />

      {/* Page Content */}
      <div className="p-6 lg:ml-64 transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Student Dashboard 🎉
        </h2>

        {/* Example dashboard widgets / sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold text-gray-700">Your Applications</h3>
            <p className="text-sm text-gray-500 mt-2">
              Track internships you applied for.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold text-gray-700">Recommended Internships</h3>
            <p className="text-sm text-gray-500 mt-2">
              AI suggestions based on your profile.
            </p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold text-gray-700">Profile Progress</h3>
            <p className="text-sm text-gray-500 mt-2">
              Complete your resume & skills section.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

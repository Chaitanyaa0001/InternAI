import AppNavbar from "@/components/navbar/AppNavbar";
import ProfileCard from "@/components/ProfileCard";

// Sample user profile data (in real app, fetch from DB)
const profileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  college: "ABC University",
  university: "papa ji ",
  degree: "B.Tech in Computer Science",
  cgpa: "7.7",
  skills: ["React", "TypeScript", "Node.js", "MongoDB"],
  achievements: ["developer", "GGsoc", "AI Intern" ],
  internshipsCompleted: 3,
  appliedInternships: 5,
  profileProgress: 70, // in percentage

};

export default function ProfileRoute() {
  return (
    <div className="min-h-screen dark:bg-[#0A0F1C]">
      <AppNavbar />
      <div className="mt-24 lg:ml-64 p-6  lg:w-[80%] mx-auto flex flex-col ">
        <h1 className="text-3xl font-bold text-blue-700">My Profile</h1>
        <p className="mb-3 opacity-75 dark:text-white">Manage your profile and account preferences</p>
        <ProfileCard profile={profileData} />
      </div>
    </div>
  );
}

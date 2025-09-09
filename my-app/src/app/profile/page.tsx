import AppNavbar from "@/components/navbar/AppNavbar";
import ProfileCard from "@/components/ProfileCard";

// Sample user profile data (in real app, fetch from DB)
const profileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  college: "ABC University",
  degree: "B.Tech in Computer Science",
  skills: ["React", "TypeScript", "Node.js", "MongoDB"],
  internshipsCompleted: 3,
  appliedInternships: 5,
  profileProgress: 70, // in percentage
};

export default function ProfileRoute() {
  return (
    <div className="min-h-screen dark:bg-[#0A0F1C]">
      <AppNavbar />
      <div className="mt-24 lg:ml-64 p-6 max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-white">My Profile</h1>

        {/* Profile Info */}
        <ProfileCard profile={profileData} />
      </div>
    </div>
  );
}

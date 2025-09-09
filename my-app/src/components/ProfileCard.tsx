"use client";

interface Profile {
  name: string;
  email: string;
  college: string;
  degree: string;
  skills: string[];
  internshipsCompleted: number;
  appliedInternships: number;
  profileProgress: number;
}

interface Props {
  profile: Profile;
}

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="bg-[#1A2234] rounded-xl shadow-lg p-6 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
          <p className="text-gray-400">{profile.email}</p>
          <p className="text-gray-300 mt-2">
            {profile.degree}, {profile.college}
          </p>
        </div>

        {/* Profile Progress */}
        <div className="mt-4 md:mt-0">
          <p className="text-gray-400 mb-1">Profile Completion</p>
          <div className="w-48 h-4 bg-gray-600 rounded-full">
            <div
              className="h-4 bg-blue-600 rounded-full"
              style={{ width: `${profile.profileProgress}%` }}
            ></div>
          </div>
          <p className="text-gray-300 mt-1">{profile.profileProgress}% completed</p>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-white font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Internships Info */}
      <div className="flex gap-6 mt-4">
        <div>
          <p className="text-gray-400">Internships Completed</p>
          <p className="text-white font-bold text-lg">{profile.internshipsCompleted}</p>
        </div>
        <div>
          <p className="text-gray-400">Applied Internships</p>
          <p className="text-white font-bold text-lg">{profile.appliedInternships}</p>
        </div>
      </div>
    </div>
  );
}

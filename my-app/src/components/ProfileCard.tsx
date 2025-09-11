"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, Profile } from "@/types/Profile";

interface Props {
  profile: Profile;
}

export default function ProfileForm({ profile }: Props) {
  const [preview, setPreview] = useState<string>("/profile.jpg");
  const [projects, setProjects] = useState<Project[]>([
    { title: "", description: "", link: "" },
    { title: "", description: "", link: "" },
    { title: "", description: "", link: "" },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Profile>({ ...profile });
  const [skillInput, setSkillInput] = useState<string>("");

  // Handle profile pic change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field?: "project"
  ) => {
    const { name, value } = e.target;
    if (field === "project") {
      const newProjects = [...projects];
      newProjects[currentStep] = { ...newProjects[currentStep], [name]: value };
      setProjects(newProjects);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNextProject = () => {
    if (currentStep < projects.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Simulated parsed data from resume
    const parsedData: Partial<Profile> = {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      college: "XYZ College",
      university: "Best University",
      degree: "B.Tech CS",
      cgpa: "8.5",
      skills: ["JavaScript", "React", "Node.js"],
      achievements: ["Hackathon Winner", "Dean's List"],
    };

    setFormData({ ...formData, ...parsedData });
  };

  // Skills handlers
  const addSkill = () => {
    if (!skillInput.trim()) return;
    setFormData({ ...formData, skills: [...formData.skills, skillInput.trim()] });
    setSkillInput("");
  };

  const removeSkill = (idx: number) => {
    const newSkills = [...formData.skills];
    newSkills.splice(idx, 1);
    setFormData({ ...formData, skills: newSkills });
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
      {/* Profile Info */}
      <div className="border-2 rounded-lg shadow-md p-5 dark:border-gray-700 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-blue-700 mb-2">Profile Information</h1>

        <div className="flex flex-col  items-start gap-6">
          <label className="cursor-pointer">
            <Image
              src={preview}
              height={120}
              width={120}
              alt="Profile"
              className="rounded-full border-2 object-cover"
            />
            <input aria-label="state" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>

          <div className="flex-1 flex flex-col gap-3 w-full">
            {["name", "email", "college", "university", "degree", "cgpa"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={(formData as never)[field]}
                onChange={handleChange}
                className="border-2 p-2 rounded-md w-full"
              />
            ))}

            <div className="mt-2">
              <label className="font-semibold mb-1 block">Upload Resume</label>
              <input aria-label="state" type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Achievements */}
      <div className="border-2 rounded-lg shadow-md p-5 dark:border-gray-700 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Skills & Achievements</h1>

        <div className="flex flex-wrap gap-2 mb-2">
          {formData.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm cursor-pointer"
              onClick={() => removeSkill(idx)}
              title="Click to remove"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Add skill"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            className="border-2 p-2 rounded-md flex-1"
          />
          <button
            type="button"
            onClick={addSkill}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <textarea
          name="achievements"
          placeholder="Achievements (comma separated)"
          value={formData.achievements.join(", ")}
          onChange={(e) =>
            setFormData({ ...formData, achievements: e.target.value.split(",").map((s) => s.trim()) })
          }
          rows={3}
          className="border-2 p-2 rounded-md w-full"
        />
      </div>

      {/* Projects */}
      <div className="border-2 rounded-lg shadow-md p-5 dark:border-gray-700 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Projects</h1>
        <h2 className="font-semibold mb-2">Project {currentStep + 1}</h2>

        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={projects[currentStep].title}
          onChange={(e) => handleChange(e, "project")}
          className="border-2 p-2 rounded-md w-full mb-2"
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={projects[currentStep].description}
          onChange={(e) => handleChange(e, "project")}
          rows={3}
          className="border-2 p-2 rounded-md w-full mb-2"
        />
        <input
          type="url"
          name="link"
          placeholder="Project Link (Optional)"
          value={projects[currentStep].link}
          onChange={(e) => handleChange(e, "project")}
          className="border-2 p-2 rounded-md w-full mb-2"
        />

        {currentStep < projects.length - 1 && (
          <button
            type="button"
            onClick={handleNextProject}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Next Project
          </button>
        )}
      </div>
    </div>
  );
}

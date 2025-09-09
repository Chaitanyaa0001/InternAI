"use client";
import { useState } from "react";

export default function ResumeUpload() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [result, setResult] = useState<{
    score: number;
    strengths: string[];
    weaknesses: string[];
    keywords: string[];
    improvements: string[];
  } | null>(null);

  const analyzeResume = (file: File) => {
    // Mock backend analysis
    setTimeout(() => {
      setResult({
        score: 82,
        strengths: ["Python", "Machine Learning", "Data Analysis"],
        weaknesses: ["Communication Skills", "Team Management"],
        keywords: ["AI", "ML", "Python", "Data Science", "TensorFlow","AI", "ML", "Python", "Data Science", "TensorFlow","AI", "ML", "Python", "Data Science", "TensorFlow","AI", "ML", "Python", "Data Science", "TensorFlow"],
        improvements: [
          "Add measurable achievements",
          "Include leadership examples",
          "Optimize resume for ATS keywords",
          "ejosjwebfojervoeorvoervoeofvoefajvojerfvoerofv",
          "ovjernoufvqeoruovnuerwbvuoewbvuobwerovbo",
          "edobvioaerbfvieralicvgiewraivkhewrvlebfshvjesbrouafvyhgbvafshlkvbgewuolrhafksbvuew",
          "docbeqrifbrieflerferbvy"
        ],
      });
    }, 1000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setResumeFile(file);
    analyzeResume(file);
  };

  return (
    <main className="min-h-screen flex flex-col items-center ">
      <div className="w-full">
        <h1 className="  text-2xl mt-22 self-start font-bold text-blue-600 dark:text-blue-600 mb-2 sm:mt-25 lg:mt-1 ">Upload Your Resume</h1>
          <p className=" text-gray-600 dark:text-gray-300">
            Upload your resume to get a detailed analysis with score, strengths, weaknesses, and suggestions.
          </p>
      <div className="bg-white border-2 border-gray-200 dark:border-gray-200 mb-5 dark:bg-gradient-to-br from-[#0A0F1C] via-[#101828] to-[#1A2234]  rounded-xl shadow-2xl w-fit mt-5  px-6 pb-1  pt-8">
        <div className="mb-8">
          <input aria-label="state" type="file" onChange={handleFileUpload} className="block w-full text-sm text-gray-600  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold  file:bg-blue-50 file:text-blue-700  hover:file:bg-blue-100"/>
        </div>  
      </div>

      {result && (
          <div className="bg-gray-50 dark:bg-[#0F172A] overflow-y-scroll rounded-lg p-6 shadow-inner">
            {/* Score */}
            <div className="mb-6 ">
              <h2 className="text-xl font-semibold dark:text-white mb-2">Resume Score</h2>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-8">
                <div
                  className="bg-green-500 h-8 rounded-full text-center text-white font-bold"
                  style={{ width: `${result.score}%` }}
                >
                  {result.score} / 100
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Your resume is <span className="font-semibold">{result.score}%</span> optimized for AI/ATS systems.
              </p>
            </div>

            {/* Strengths & Weaknesses */}
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Strongest Areas</h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
                  {result.strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Weakest Areas</h3>
                <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
                  {result.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
              </div>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg dark:text-white mb-2">Suggested Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {result.keywords.map((k, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-sm font-medium">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div>
              <h3 className="font-semibold text-lg dark:text-white mb-2">Recommendations & Improvements</h3>
              <ul className="list-decimal list-inside text-gray-800 dark:text-gray-200">
                {result.improvements.map((imp, i) => (
                  <li key={i} className="mb-1">{imp}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
          
    </main>
  );
}

import AppNavbar from "@/components/navbar/AppNavbar";
import HelpCenterClient from "@/components/HelpCenterClient";

const faqs = [
  {
    id: 1,
    category: "Getting Started",
    question: "How do I create an account?",
    answer: "Click on Sign Up and fill in your details to create an account.",
    route: "/signup", // internal route
  },
  {
    id: 2,
    category: "Applying for Internships",
    question: "How do I apply to an internship?",
    answer: "Browse internships and click 'Apply' on the ones you are interested in.",
    route: "/student/internships", // internal route
  },
  {
    id: 3,
    category: "Tracking Applications",
    question: "How can I track my applications?",
    answer: "Go to your dashboard to see all internships you've applied to.",
    route: "/student/dashboard", // internal route
  },
  {
    id: 4,
    category: "AI Mentor / Gemini",
    question: "Can I get AI assistance for interviews?",
    answer:
      "Yes! Use the AI Mentor to practice mock interviews. You can also integrate Gemini for voice or text-based guidance.",
    route: "/student/ai-mentor", // internal route to AI Mentor
  },
];


export default function HelpCenterPage() {
  return (
    <div className="min-h-screen dark:bg-[#0A0F1C]">
      <AppNavbar />
      <div className="mt-24 lg:ml-64 p-6">
        <HelpCenterClient faqs={faqs} />
      </div>
    </div>
  );
}

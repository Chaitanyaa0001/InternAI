import InternshipDetailPage from "@/components/InternshipDetailPage";
import InternshipCardProps from "@/types/InternshipCardProps";

interface PageProps {
    params: {id:string}
}

export default async function InternshipPage({params}:PageProps) {
    const {id}  = await params;

     const mockData = [
        {
      id: 1,
      position: "Frontend Developer Intern",
      company: "StartupXYZ",
      location: "Remote",
      duration: "6 months",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
      description: "Build modern web apps.",
      status: "Not Applied"

    },
    {
      id: 2,
      position: "Backend Developer Intern",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      duration: "3 months",
      skills: ["Node.js", "Express", "MongoDB"],
      description: "Develop backend APIs.",
      status: "Not Applied"
    },
      ] satisfies InternshipCardProps[];
    
      const internship = mockData.find(i => i.id === Number(id));
    
      if (!internship) {
        return <p className="text-center mt-20 text-red-500 text-xl font-medium">Internship not found</p>;
      }

    return <InternshipDetailPage internshipId={Number(id)} internshipState={internship}/>
}
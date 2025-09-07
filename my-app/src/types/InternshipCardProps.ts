export default interface InternshipCardProps {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  skills: string[];
  description: string;
  status?: "Applied" | "Selected" | "Rejected"; 
  showApplyButton?: boolean; // Browse + Recommendation,
  clickable?: boolean
}
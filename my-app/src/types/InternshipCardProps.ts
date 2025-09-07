export type InternshipStatus = "Not Applied" | "Applied" | "Accepted" | "Rejected";

export default interface InternshipCardProps {
  id: number;
  position: string;
  company: string;
  location: string;
  duration: string;
  skills: string[];
  description: string;
  showApplyButton?: boolean;
  clickable?: boolean;
  status?: InternshipStatus;
  linkTo?: string;
}

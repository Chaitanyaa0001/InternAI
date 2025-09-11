import CompanyNavbar from "@/components/companycomponents/CompanyNavbar";
import CandidateList from "@/components/companycomponents/ViewCandidates";

export default function ViewCandidatePage() {
  return (
    <main className="min-h-screen dark:bg-[#314DA2] dark:bg-gradient-to-b from-[#0A0F1C] via-[#101828] to-[#1A2234]">
      <CompanyNavbar />
      <CandidateList />
    </main>
  );
}

import AppNavbar from "@/components/navbar/AppNavbar";
import ResumeUpload from "@/components/ResumeUpload";

export default function uploadresume(){
   return (
    <main className="min-h-screen dark:bg-[#1A2234]">
      <AppNavbar />
      <div className="lg:mt-24 lg:ml-64 p-6">
        <ResumeUpload />
      </div>
    </main>
  );
}
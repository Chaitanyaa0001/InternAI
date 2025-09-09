import AppNavbar from "@/components/navbar/AppNavbar";
import AIMentorClient from "@/components/AIMentorclient";

export default function AIMentorPage() {
  return (
    <div className="min-h-screen dark:bg-[rgb(10,15,28)]">
      <AppNavbar />

      {/* Center the chat on the page */}
      <div className="mt-23 lg:ml-64 overflow-auto  flex justify-center pb-1 pl-2 pr-2 "> 
        <div className="flex flex-col w-full ">

          {/* Client Component */}
          <AIMentorClient />
        </div>
      </div>
    </div>
  );
}

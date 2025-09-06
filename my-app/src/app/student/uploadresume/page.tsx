import AppNavbar from "@/components/navbar/AppNavbar";

export default function uploadresume(){
    return (
        <main>
            <AppNavbar/>
          <input type="file" aria-label="state" className="block w-full text-sm text-gray-600  file:mr-4 file:py-2 file:px-4  file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700hover:file:bg-blue-100"/>
        </main>
        
    )
}
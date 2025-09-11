import CompanyNavbar from "@/components/companycomponents/CompanyNavbar"

export default function postinternroute() {
    return (
        <div className="   dark:bg-gradient-to-b  from-[#0A0F1C] via-[#101828] to-[#1A2234]  ">
            <CompanyNavbar/>
            <div className=" ml-10 mt-30 lg:ml-70  lg:mt-24 w-[82vw] sm:w-[90vw] lg:w-[80vw] ">
                <div className="mb-6">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl text-blue-700  font-semibold">Post an Internship</h1>
                    <p className="dark:text-white opacity-75">Hire the best Candidates and provide them a opportunity</p>
                </div>
                <div className="border-2 border-gray-200 rounded-[7px] p-4  ">
                    <div className="mb-6">
                        <h1 className="text-xl sm:text-2xl font-semibold text-blue-700 italic">Post Internship</h1>
                        <p className="opacity-70  dark:text-white">Hire skilled candiates with experience</p>
                    </div>
                    
                    <form action="" className="flex flex-col gap-2">
                        <h1 className="text-[1.1rem] italic dark:text-white">Position</h1>
                        <input aria-label="state" type="text" placeholder="Enter the position..." className="border-2  placeholder-gray-400 py-2 px-1 rounded-[8px] border-gray-300 focus:border-blue-600 outline-none"/>
                        <h1 className="text-[1.1rem] italic dark:text-white">Company</h1>
                        <input aria-label="state" type="text" placeholder="Enter the name of the Company..." className="border-2 placeholder-gray-400  py-2 px-1 rounded-[8px] border-gray-300 focus:border-blue-600 outline-none"/>
                        <h1 className="text-[1.1rem] italic dark:text-white">Description</h1>
                        <input aria-label="state" type="text" placeholder="Enter the Description..." className="border-2 py-2 px-1  placeholder-gray-400 rounded-[8px] border-gray-300 focus:border-blue-600 outline-none"/>
                        <h1 className="text-[1.1rem] italic dark:text-white">Location</h1>
                        <input aria-label="state" type="text" placeholder="Enter the job Location..." className="border-2 py-2 px-1 placeholder-gray-400  rounded-[8px] border-gray-300 focus:border-blue-600 outline-none"/>
                        <h1 className="text-[1.1rem] italic dark:text-white">Duration</h1>
                        <input aria-label="state" type="text" placeholder="Enter the Duration of the internship..." className="border-2 placeholder-gray-400  py-2 px-1 rounded-[8px] border-gray-300 focus:border-blue-600 outline-none"/>
                        <h1 className="text-[1.1rem] italic dark:text-white">Skills</h1>
                        <input aria-label="state" type="text"  placeholder="Enter the skills and separate with ," className="border-2 placeholder-gray-400  py-2 px-1 rounded-[8px] border-gray-300 focus:border-blue-600 outline-none"/>

                        <button type="submit" className=" w-[20%] bg-blue-700 p-3 rounded-[8px] hover:bg-blue-800 cursor-pointer mt-8  ">Post internship</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
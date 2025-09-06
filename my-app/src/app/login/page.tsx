import ToggleButton from "@/components/general/ToggleButton";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginRoute() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row bg-white text-gray-900 dark:bg-[#1E2939] dark:text-gray-100 transition-colors relative">
      
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-4 right-4">
        <ToggleButton />
      </div>

      {/* Left Section - Form */}
      <div className="order-1 md:order-1 flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          {/* Logo + Title */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="h-14 w-14 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 shadow-lg">
                <span className="text-white  font-bold text-lg">AI</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to your account and discover AI-powered internships
            </p>
          </div>

          
<LoginForm />
        
          
        </div>
      </div>

      {/* Right Section */}
      <div className="order-2 md:order-2 hidden md:flex flex-1 items-center justify-center bg-gray-50 dark:bg-gray-800">
        <div className="max-w-md text-center space-y-6">
          <h2 className="text-2xl font-bold">
            Find Your Perfect{" "}
            <span className="text-blue-900 dark:text-blue-400">
              AI-Matched Internship
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Join thousands of students who found their dream internships through our
            AI-powered matching system
          </p>

          <div className="flex justify-center gap-6">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow text-center">
              <p className="text-2xl font-bold text-[#155DFC]">95%</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Recommendation Rate
              </p>
            </div>
            <div className="p-4 rounded-lg bg-white dark:bg-gray-700 shadow text-center">
              <p className="text-2xl font-bold text-[#155DFC]">100 %</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center sm:p-24">
      <h1 className="text-5xl font-bold text-blue-600 mb-6 sm:text-6xl">
        Welcome to JobBoost 🚀
      </h1>
      <p className="text-lg mb-12 max-w-2xl text-gray-600 sm:text-xl">
        Your all-in-one AI toolkit for job seekers. Build resumes, generate cover letters, and ace your interviews with the power of AI.
      </p>
      
      <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-3 w-full max-w-4xl">
        <div className="p-8 bg-white shadow-sm rounded-xl border border-gray-100">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Free</h3>
          <p className="text-gray-500 mb-4">Basic tools</p>
          <p className="text-3xl font-extrabold text-blue-600">₹0<span className="text-sm text-gray-400 font-normal">/mo</span></p>
        </div>
        
        <div className="p-8 bg-blue-50 shadow-md rounded-xl border-2 border-blue-500 relative transform scale-105">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">MOST POPULAR</div>
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Pro</h3>
          <p className="text-gray-500 mb-4">Full AI Access</p>
          <p className="text-3xl font-extrabold text-blue-600">₹299<span className="text-sm text-gray-400 font-normal">/mo</span></p>
        </div>

        <div className="p-8 bg-white shadow-sm rounded-xl border border-gray-100">
          <h3 className="font-bold text-2xl text-gray-800 mb-2">Premium</h3>
          <p className="text-gray-500 mb-4">Unlimited AI + 1on1</p>
          <p className="text-3xl font-extrabold text-blue-600">₹599<span className="text-sm text-gray-400 font-normal">/mo</span></p>
        </div>
      </div>

      <Link 
        href="/dashboard" 
        className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all"
      >
        Login & Start Testing
      </Link>
    </main>
  );
}

"use client";

import { useState } from "react";

export default function Dashboard() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Cover Letter Gen");

  const generateAIContent = async () => {
    setLoading(true);
    setOutput("");
    
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          prompt: `Write a short, professional cover letter for a software developer role.` 
        }),
      });
      
      const data = await res.json();
      
      if (data.error) {
        setOutput(`Error: ${data.error}`);
      } else {
        setOutput(data.result);
      }
    } catch (error) {
      setOutput("Failed to connect to the server.");
    }
    
    setLoading(false);
  };

  const menuItems = [
    { icon: "📊", label: "Dashboard" },
    { icon: "📄", label: "AI Resume Builder" },
    { icon: "✉️", label: "Cover Letter Gen" },
    { icon: "🎯", label: "Interview Coach" },
    { icon: "🗺️", label: "Career AI" },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">JobBoost</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveTab(item.label)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-3 ${
                    activeTab === item.label
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, Demo User</h1>
          <p className="text-gray-500 mt-1">Logged in as demo@jobboost.in</p>
        </header>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{activeTab}</h3>
          <p className="text-gray-500 mb-6">Click below to test the secure API connection.</p>
          
          <button 
            onClick={generateAIContent}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
          >
            {loading ? "Generating with AI..." : "Generate Demo Content"}
          </button>

          {output && (
            <div className="mt-8">
              <h4 className="font-semibold text-gray-700 mb-3">AI Result:</h4>
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 whitespace-pre-wrap leading-relaxed">
                {output}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

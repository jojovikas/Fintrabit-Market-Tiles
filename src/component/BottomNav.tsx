import { useState } from "react";

export default function BottomNav() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black text-gray-500 flex justify-between py-3 md:hidden z-50">
      <div
        className={`flex flex-col items-center flex-1 ${
          activeTab === "home" ? "text-lime-400" : ""
        }`}
        onClick={() => setActiveTab("home")}
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
        </svg>
        <span className="text-sm">Home</span>
      </div>

      <div
        className={`flex flex-col items-center flex-1 ${
          activeTab === "trade" ? "text-lime-400" : ""
        }`}
        onClick={() => setActiveTab("trade")}
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v18m16.5 0V3M6 15.75h3v-5.25H6v5.25zm4.5 0h3v-10.5h-3v10.5zM15 15.75h3v-3.75h-3v3.75z" />
        </svg>
        <span className="text-sm">Trade</span>
      </div>

      <div
        className={`flex flex-col items-center flex-1 ${
          activeTab === "history" ? "text-lime-400" : ""
        }`}
        onClick={() => setActiveTab("history")}
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm">History</span>
      </div>

      <div
        className={`flex flex-col items-center flex-1 ${
          activeTab === "profile" ? "text-lime-400" : ""
        }`}
        onClick={() => setActiveTab("profile")}
      >
        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75H4.5v-.75z" />
        </svg>
        <span className="text-sm">Profile</span>
      </div>
    </footer>
  );
}

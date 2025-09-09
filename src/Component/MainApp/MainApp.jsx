import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Chatbot from "../Chatbot/Chatbot";
import Timetable from "../Features/Timetable";
import SuggestionBox from "../Features/SuggestionBox";
import ComplaintBox from "../Features/ComplaintBox";

export default function MainApp() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-6">InvIe</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/app/chatbot" className="hover:text-purple-500">Chatbot</Link>
          <Link to="/app/timetable" className="hover:text-purple-500">Timetable Creator</Link>
          <Link to="/app/suggestion" className="hover:text-purple-500">Suggestion Box</Link>
          <Link to="/app/complaint" className="hover:text-purple-500">Complaint Box</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Routes>
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="suggestion" element={<SuggestionBox />} />
          <Route path="complaint" element={<ComplaintBox />} />
        </Routes>
      </main>
    </div>
  );
}

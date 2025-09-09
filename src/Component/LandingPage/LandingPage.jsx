import React from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="text-center">
        <h1 className="text-5xl font-light text-gray-700 mb-6">
          Welcome to <span className="font-medium text-purple-600">InvIe</span>
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Your serene space for college guidance ✨
        </p>
        <button
          onClick={() => navigate("/app")}
          className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-12 py-4 rounded-full font-light text-lg shadow-lg hover:scale-105 transition"
        >
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}

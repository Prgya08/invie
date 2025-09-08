import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

export default function SerenityAI() {
  const [currentUserType, setCurrentUserType] = useState("student");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Floating particles
  useEffect(() => {
    const container = document.querySelector(".floating-particles");
    const interval = setInterval(() => {
      if (!container) return;
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = particle.style.height =
        Math.random() * 6 + 2 + "px";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";
      particle.style.opacity = Math.random() * 0.5 + 0.2;

      container.appendChild(particle);
      setTimeout(() => particle.remove(), 15000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // AI response generator
  const generateResponse = (message) => {
    const lower = message.toLowerCase();
    if (lower.includes("course") || lower.includes("class")) {
      return currentUserType === "staff"
        ? "In the spirit of mindful education, I can help you curate meaningful course experiences..."
        : "🌸 Recommendations:\n• Computer Science 101\n• Creative Writing\n• Mindfulness Studies\n• Environmental Science";
    }
    if (lower.includes("schedule") || lower.includes("time")) {
      return "🌅 Morning Flow (9–12)\n• Mathematics\n• Literature\n\n🌞 Afternoon Growth (1–4)\n• Science Lab\n• Art Workshop";
    }
    if (lower.includes("campus") || lower.includes("location")) {
      return "🏛️ Learning Sanctuaries:\n• Quiet Study Gardens\n• Collaborative Spaces\n• Creative Studios";
    }
    if (lower.includes("study") || lower.includes("learn")) {
      return "🧘 Peaceful Study Methods:\n• Deep Focus Sessions\n• Reflective Reading\n• Study Groups\n• Creative Expression";
    }
    return "I’m here to bring tranquility to your college experience 🌿. Share what’s on your mind.";
  };

  // Send message
  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const reply = generateResponse(input);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }, 1500);

    setInput("");
  };

  // Auth handlers
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowAuth(false);
    setMessages([
      {
        role: "assistant",
        content:
          "Welcome to your peaceful learning space ✨. What would you like to explore today?",
      },
    ]);
  };

  return (
    <div className="min-h-screen calm-gradient relative overflow-hidden">
      {/* Floating Particles */}
      <div className="floating-particles absolute inset-0 pointer-events-none" />

      {/* Morphing Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-pink-200 morphing-blob opacity-30" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-200 to-cyan-200 morphing-blob opacity-40" />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-green-200 to-yellow-200 morphing-blob opacity-25" />

      {/* Main */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-8 flex justify-between items-center fade-in">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-3xl glass-soft flex items-center justify-center breathing">
              <div className="w-6 h-6 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400" />
            </div>
            <div>
              <h1 className="text-2xl font-light text-gray-700">InvIe</h1>
              <p className="text-sm text-gray-500 font-light">Your companion</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                setCurrentUserType(
                  currentUserType === "student" ? "staff" : "student"
                )
              }
              className="glass-soft px-6 py-3 rounded-2xl text-gray-600 font-light glow-on-hover"
            >
              {currentUserType === "student" ? "Student Mode" : "Staff Mode"}
            </button>
            <button
              onClick={() => (isLoggedIn ? setIsLoggedIn(false) : setShowAuth(true))}
              className="bg-gradient-to-r from-purple-300 to-pink-300 text-white px-6 py-3 rounded-2xl font-light glow-on-hover"
            >
              {isLoggedIn ? "Sign Out" : "Sign In"}
            </button>
          </div>
        </header>

        {/* Welcome Screen */}
        {!isLoggedIn ? (
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="text-center max-w-3xl fade-in">
              <div className="breathing mb-16">
                <div className="w-32 h-32 mx-auto rounded-full glass-soft flex items-center justify-center soft-shadow">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 flex items-center justify-center" />
                </div>
              </div>
              <h2 className="text-5xl font-light text-gray-700 mb-6">
                Find Your{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Peace
                </span>{" "}
                in Learning
              </h2>
              <p className="text-xl text-gray-500 font-light mb-16">
                A serene space for all your college questions and guidance
              </p>
              <button
                onClick={() => setShowAuth(true)}
                className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-white px-12 py-4 rounded-full font-light text-lg glow-on-hover"
              >
                Begin Your Journey
              </button>
            </div>
          </div>
        ) : (
          /* Chat Interface */
          <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full px-8 py-12">
            <div className="flex-1 overflow-y-auto mb-8 space-y-8">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className="message-slide"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                >
                  {msg.role === "user" ? (
                    <div className="flex justify-end">
                      <div className="glass-soft rounded-3xl rounded-br-xl px-6 py-4 max-w-md soft-shadow">
                        <p className="text-gray-700 font-light">
                          {msg.content}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full glass-soft flex items-center justify-center soft-shadow">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-300 to-pink-300" />
                      </div>
                      <div className="flex-1">
                        <div className="glass-soft rounded-3xl rounded-tl-xl px-6 py-4 soft-shadow">
                          <p className="text-gray-700 font-light whitespace-pre-line">
                            {msg.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="glass-soft rounded-3xl p-6 soft-shadow">
              <div className="flex items-end space-x-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                  placeholder="Share your thoughts..."
                  className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 resize-none text-lg font-light input-glow rounded-2xl p-4 focus:outline-none"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-300 to-pink-300 p-4 rounded-2xl glow-on-hover soft-shadow"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-50 p-8">
          <div className="glass-soft rounded-3xl p-10 max-w-md w-full soft-shadow relative">
            <div className="text-center mb-10">
              <div className="w-20 h-20 mx-auto rounded-full glass-soft flex items-center justify-center mb-6 breathing">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-300 to-pink-300" />
              </div>
              <h2 className="text-3xl font-light text-gray-700 mb-3">
                {isSignUp ? "Join Serenity" : "Welcome Back"}
              </h2>
              <p className="text-gray-500 font-light">
                {isSignUp
                  ? "Create your peaceful account"
                  : "Enter your peaceful space"}
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-6">
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white bg-opacity-50 rounded-2xl px-6 py-4 text-gray-700 input-glow"
                />
              )}
              <input
                type="text"
                placeholder="Email or ID"
                className="w-full bg-white bg-opacity-50 rounded-2xl px-6 py-4 text-gray-700 input-glow"
              />
              {isSignUp && (
                <input
                  type="text"
                  placeholder="Student ID"
                  className="w-full bg-white bg-opacity-50 rounded-2xl px-6 py-4 text-gray-700 input-glow"
                />
              )}
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white bg-opacity-50 rounded-2xl px-6 py-4 text-gray-700 input-glow"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-300 to-pink-300 text-white py-4 rounded-2xl font-light text-lg glow-on-hover soft-shadow"
              >
                {isSignUp ? "Begin Journey" : "Enter"}
              </button>
            </form>

            <div className="text-center mt-8">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-gray-500 hover:text-gray-700 font-light"
              >
                {isSignUp ? "Already with us? Sign in" : "Need an account? Join us"}
              </button>
            </div>

            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

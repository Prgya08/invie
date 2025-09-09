import { useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // Here you can later add chatbot AI reply
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#123456] text-white p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">History</h2>
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((msg, i) => (
            <div key={i} className="bg-white text-black rounded p-2">
              {msg.text}
            </div>
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 hover:bg-red-600 p-2 rounded"
        >
          Logout
        </button>
      </aside>

      {/* Chat Section */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded max-w-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-300 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 bg-white flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded p-2"
            placeholder="Type your query..."
          />
          <button
            onClick={handleSend}
            className="bg-[#123456] text-white px-4 rounded"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}

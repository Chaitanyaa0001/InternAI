"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AIMentorClient() {
  const [messages, setMessages] = useState<{ type: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesContainerRef.current?.scrollTo({
      top: messagesContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: input }]);

    // Mock AI response
    setTimeout(() => {
      const aiResponse = `AI Mentor: I received your question "${input}"`;
      setMessages((prev) => [...prev, { type: "ai", text: aiResponse }]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleVoiceInput = () => {
    alert("Voice assistant feature coming soon!");
  };

  return (
    <div className="flex flex-col h-[86vh] border-2 border-gray-200 dark:bg-[#1A2234] rounded-xl shadow-lg overflow-hidden">
      
      {/* Header: logo + title */}
      <div className="flex items-center gap-3 p-3 border-b border-gray-600">
        <Image height={40} width={40} src="/logo.png" alt="logo" />
        <h1 className="text-xl lg:text-3xl font-bold text-blue-700">
          AI Mentor
        </h1>
      </div>

      {/* Chat messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 p-6 overflow-y-auto flex flex-col gap-4"
      >
        {messages.length === 0 && (
          <p className="text-gray-400 italic">
            Start your mock interview by typing a question below...
          </p>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl max-w-[70%] ${
              msg.type === "user"
                ? "self-end bg-blue-600 text-white"
                : "self-start bg-gray-700 text-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input section fixed at bottom */}
      <div className="flex gap-2 p-4 border-t border-gray-700 dark:bg-[#1A2234]">
        <input
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 px-4 py-3 rounded-2xl border border-gray-600 dark:bg-[#101828] dark:text-white focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
        >
          Send
        </button>
        <button
          onClick={handleVoiceInput}
          className="px-4 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition"
          title="Voice Assistant"
        >
          🎤
        </button>
      </div>
    </div>
  );
}

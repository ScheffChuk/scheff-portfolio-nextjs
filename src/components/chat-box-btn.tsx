"use client";

import { useEffect, useState } from "react";
import AIChatBox from "./ai-chat-box";
import Image from "next/image";
import profileImage from "@/assets/do-nothing-club-dog.jpg";

export default function ChatBoxButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenChatPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleButtonClick = () => {
    setChatBoxOpen(true);
    setShowPopup(false);
    localStorage.setItem("hasSeenChatPopup", "true");
  };

  return (
    <>
      {showPopup && (
        <div className="fixed bottom-16 right-5 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg mb-3 animate-fade-in">
          <p className="text-sm">Chat with my AI assistant!</p>
        </div>
      )}
      <button onClick={handleButtonClick}>
        <Image
          src={profileImage}
          alt="Scheff portrait"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="fixed bottom-5 right-5 h-12 w-12 rounded-full object-cover border-2 bg-white border-white dark:border-gray-700 shadow-xl hover:scale-[1.15] active:scale-105 transition-all"
        />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}

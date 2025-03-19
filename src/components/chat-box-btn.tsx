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
        <div className="animate-fade-in fixed bottom-16 right-5 mb-3 rounded-lg bg-white p-3 shadow-lg dark:bg-gray-800">
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
          className="fixed bottom-5 right-5 h-12 w-12 rounded-full border-2 border-white bg-white object-cover shadow-xl transition-all hover:scale-[1.15] active:scale-105 dark:border-gray-700"
        />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}

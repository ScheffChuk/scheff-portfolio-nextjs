"use client";

import { useState } from "react";
import AIChatBox from "./ai-chat-box";
import Image from "next/image";
import profileImage from "@/assets/do-nothing-club-dog.jpg";

export default function ChatBoxButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button onClick={() => setChatBoxOpen(true)}>
        <Image
          src={profileImage}
          alt="Scheff portrait"
          width="192"
          height="192"
          quality="95"
          priority={true}
          className="h-12 w-12 rounded-full object-cover border-2 bg-white border-white dark:border-gray-700 shadow-xl hover:scale-[1.15] active:scale-105 transition-all"
        />
      </button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}

"use client";

import React, { useState } from "react";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "jp" : "en"));
  };
  return (
    <button
      className=" bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleToggleLanguage}
    >
      {language === "en" ? <span>EN</span> : <span>JP</span>}
    </button>
  );
}

"use client";

import React, { useState } from "react";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "jp" : "en"));
  };
  return (
    <button
      className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 text-[#3399ff] shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.05] active:scale-105 dark:bg-gray-950"
      onClick={handleToggleLanguage}
    >
      {language === "en" ? <span>EN</span> : <span>JP</span>}
    </button>
  );
}

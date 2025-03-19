import React from "react";
import ThemeSwitch from "./theme-switch";
import ChatBoxButton from "./chat-box-btn";

const BottomButtonsGroup = () => {
  return (
    <div className="fixed bottom-5 right-5 flex items-center justify-center gap-4">
      <ThemeSwitch />
      <ChatBoxButton />
    </div>
  );
};

export default BottomButtonsGroup;

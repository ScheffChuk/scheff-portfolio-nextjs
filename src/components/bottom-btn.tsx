import React from "react";
import ThemeSwitch from "./theme-switch";
import ChatBoxButton from "./chat-box-btn";

const BottomButtonsGroup = () => {
  return (
    <div className="fixed bottom-5 right-5 gap-4 flex items-center justify-center">
      <ThemeSwitch />
      <ChatBoxButton />
    </div>
  );
};

export default BottomButtonsGroup;

import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const ChatIcon: React.FC = () => {
  return (
    <button
      className="sm:flex hidden p-2 rounded-full hover:bg-gray-700"
      aria-label="Chat"
    >
     <IoChatbubbleEllipsesOutline />
    </button>
  );
};

export default ChatIcon;

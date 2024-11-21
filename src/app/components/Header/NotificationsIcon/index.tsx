import React from "react";
import { FaBell } from "react-icons/fa";

const NotificationsIcon: React.FC = () => {
  return (
    <button
      className="p-2 rounded-full hover:bg-gray-700 relative"
      aria-label="Notifications"
    >
      
      <FaBell />
      
    </button>
  );
};

export default NotificationsIcon;

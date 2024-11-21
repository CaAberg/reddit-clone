"use client";
import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center p-2 rounded-full hover:bg-gray-700"
        aria-label="Profile Menu"
      >
        <IoPersonOutline />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-backgroundneutral text-white rounded-md shadow-lg z-10">
          <a href="/profile" className="block px-4 py-2 hover:bg-gray-700">
            Profile
          </a>
          <a href="/settings" className="block  px-4 py-2 hover:bg-gray-700">
            Settings
          </a>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-700">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

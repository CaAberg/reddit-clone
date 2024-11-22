"use client";
import React from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiHome,
  FiCompass,
  FiUsers,
  FiBookOpen,
  FiFileText,
} from "react-icons/fi";
import visibilityToggle from "../visibilityToggle";

const DesktopSidebar: React.FC = () => {
  const [isCommunitiesVisible, toggleCommunities] = visibilityToggle(true);
  const [isPoliciesVisible, togglePolicies] = visibilityToggle(true);

  return (
    <aside className="hidden lg:flex border-r flex-col w-64 bg-background text-white h-screen px-4 py-6">
      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-backgroundneutral">
            <FiHome className="w-6 h-6" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-backgroundneutral">
            <FiCompass className="w-6 h-6" />
            <span>Explore</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-backgroundneutral">
            <FiUsers className="w-6 h-6" />
            <span>All</span>
          </li>
        </ul>

        <div className="mt-6">
          <div
            className="flex items-center justify-between cursor-pointer hover:text-gray-300"
            onClick={toggleCommunities}
          >
            <h3 className="text-sm font-bold text-gray-500">COMMUNITIES</h3>
            {isCommunitiesVisible ? (
              <FiChevronUp className="w-5 h-5" />
            ) : (
              <FiChevronDown className="w-5 h-5" />
            )}
          </div>
          {isCommunitiesVisible && (
            <ul className="mt-2 space-y-4">
              <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-backgroundneutral">
                <FiBookOpen className="w-6 h-6" />
                <span>Create a Community</span>
              </li>
            </ul>
          )}
        </div>

        <div className="mt-6">
          <div
            className="flex items-center justify-between cursor-pointer hover:text-gray-300"
            onClick={togglePolicies}
          >
            <h3 className="text-sm font-bold text-gray-500">POLICIES</h3>
            {isPoliciesVisible ? (
              <FiChevronUp className="w-5 h-5" />
            ) : (
              <FiChevronDown className="w-5 h-5" />
            )}
          </div>
          {isPoliciesVisible && (
            <ul className="mt-2 space-y-4">
              <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-backgroundneutral">
                <FiFileText className="w-6 h-6" />
                <span>Content Policy</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-backgroundneutral">
                <FiFileText className="w-6 h-6" />
                <span>Privacy Policy</span>
              </li>
              <li className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-backgroundneutral">
                <FiFileText className="w-6 h-6" />
                <span>User Agreement</span>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <footer className="text-gray-500 text-sm mt-6">
        <p>© 2024 - Carl Åberg</p>
      </footer>
    </aside>
  );
};

export default DesktopSidebar;

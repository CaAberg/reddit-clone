"use client";
import React from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiMenu,
  FiX,
  FiHome,
  FiCompass,
  FiUsers,
  FiBookOpen,
  FiFileText,
} from "react-icons/fi";
import visibilityToggle from "../visibilityToggle";

const MobileSidebar: React.FC = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = visibilityToggle(false);
  const [isCommunitiesVisible, toggleCommunities] = visibilityToggle(true);
  const [isPoliciesVisible, togglePolicies] = visibilityToggle(true);

  return (
    <div className="md:hidden">
      <button
        className="p-4 bg-background text-white"
        onClick={toggleMobileMenu}
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {isMobileMenuOpen && (
        <div
          className="fixed  left-0 w-64 bg-background text-white h-[calc(100vh-4rem)] px-6 py-6 z-40"
          style={{ top: "4.6rem" }}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-backgroundneutral rounded-full"
            onClick={toggleMobileMenu}
          >
            <FiX className="w-6 h-6" />
          </button>

          <nav className="flex-1">
            {/* Main Links */}
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
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;

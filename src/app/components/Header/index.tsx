import React from "react";
import ChatIcon from "./chatIcon";
import CreatePost from "./createPost";
import NotificationsIcon from "./NotificationsIcon";
import ProfileDropdown from "./profileDropdown";
import SearchBar from "./searchbar";
import Logo from "./logo";
import MobileSidebar from "../Sidebar/mobileSideBar";

const Header: React.FC = () => {
  return (
    <header className="flex items-center px-2 py-2 text-white border-b w-full">
      <MobileSidebar />
      <div className="flex ">
      <Logo />
      </div>
      <div className="flex-grow">
      <SearchBar />
      </div>
      <div className="flex justify-end items-center space-x-4">
        <ChatIcon />
        <NotificationsIcon />
        <CreatePost />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;

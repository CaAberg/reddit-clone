"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";


const SearchBar: React.FC = () => {
  return (
    <div className="flex bg-gray-700 text-white rounded-2xl px-4 py-2 mx-auto">
      
      <FaSearch />
      <input
        type="text"
        placeholder="Search Reddit"
        className="flex bg-transparent outline-none text-sm w-full mx-2"
      />
    </div>
  );
};

export default SearchBar;

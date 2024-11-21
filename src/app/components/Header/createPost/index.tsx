import React from "react";
import { FaPlus } from "react-icons/fa";

const CreatePost: React.FC = () => {
  return (
    <button
      className="flex items-center px-4 py-2 bg-[#0E1113] text-white rounded-3xl hover:shadow-xl hover:bg-gray-700"
      aria-label="Create Post"
    >  
        <FaPlus />

      <span className="mx-2 hidden md:flex">Create</span>
    </button>
  );
};

export default CreatePost;

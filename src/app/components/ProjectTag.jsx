import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
      ? "bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white mb-2 sm:mb-10"
      : "bg-[rgba(255,255,255,0.08)] text-[#C6C6C6] hover:bg-gradient-to-r hover:from-[#FD6F00] hover:to-[#E46400] hover:text-white mb-2 sm:mb-10";
  return (
    <button
      className={`${buttonStyles} rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-xl cursor-pointer transition-colors duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

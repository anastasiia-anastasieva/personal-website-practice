import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
      <div className="bg-[#121212] absolute w-full">
        <ul className="flex flex-col items-center py-4">
          {links.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
          ))}
        </ul>
      </div>
  );
};

export default MenuOverlay;

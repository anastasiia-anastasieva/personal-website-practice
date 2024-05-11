"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "About me",
    path: "#about",
  },
  {
    title: "Portfolio",
    path: "#projects",
  },
  {
    title: "Contact me",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212]">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <Link href={"/"} className="text-2xl md:text-3xl text-orange-500 font-semibold">
            LOGO
          </Link>
          <div className="block md:hidden">
            {!navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className="text-white">
                  <Bars3Icon className="h-5 w-5" />
                </button>
            ) : (
                <button onClick={() => setNavbarOpen(false)} className="text-white">
                  <XMarkIcon className="h-5 w-5" />
                </button>
            )}
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
                <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </div>
        </div>
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </nav>
  );
};

export default Navbar;

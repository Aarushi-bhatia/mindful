"use client";
import { Rabbit } from "lucide-react";
import React, { useState } from "react";

const navlinks = [
  { navs: "/#home", name: "Home" },
  { navs: "/#aboutus", name: "About Us" },
  { navs: "/#features", name: "Features" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="bg-none px-[3%] pt-6">
      <nav className="flex justify-between items-center px-6 md:px-12 py-3 bg-white sticky top-0 z-50 rounded-2xl border border-none shadow-[0_12px_24px_rgba(0,0,0,0.1)] backdrop-blur-md">
        {/* Brand */}
        <div className="flex flex-row font-extrabold items-center text-2xl text-gray-900 tracking-tight">
          <Rabbit className="w-8 h-8 mr-2" />
          <span
            className="text-2xl"
            style={{
              textShadow:
                "0 2px 8px rgba(16,16,32,0.10), 0 1px 2px rgba(0,0,0,0.18)",
            }}
          >
            Mind
            <span className="text-secondary">Ful</span>
          </span>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <span>{isOpen ? <>&#x2715;</> : <>&#9776;</>}</span>
        </button>

        {/* Navigation Links */}
        <div className="absolute md:static inset-x-0 md:flex md:justify-center mx-auto">
          <ul
            className={`flex-col md:flex md:flex-row md:justify-center gap-6 text-lg font-semibold text-gray-700 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {navlinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.navs}
                  className="block py-2 md:py-0 hover:text-secondary transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="md:hidden">
              <a
                href="/auth"
                className="block px-6 py-1 text-lg border border-gray-800 rounded-full text-black font-[550] bg-[#7dd3ae] hover:opacity-90 transition shadow-[0_4px_12px_rgba(0,0,0,0.2)] text-center"
                onClick={() => setIsOpen(false)}
              >
                Login / Signup
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="/auth"
            className="px-6 py-1 text-lg border border-gray-800 rounded-full text-black font-[550] bg-[#7dd3ae] hover:opacity-90 transition shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
          >
            Login / Signup
          </a>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;

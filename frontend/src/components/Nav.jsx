import React from "react";
import {
  Home,
  Grid3X3,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const navItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Habits", path: "/habits", icon: Grid3X3 },
  ];

  return (
    <nav className="flex  justify-between items-center px-6 md:px-12 py-3 bg-white sticky top-0 z-50 rounded-2xl">
      <span className="text-xl font-extrabold text-gray-800">Mindful</span>
      <div className="flex space-x-2">
        {navItems.map(({ label, path, icon: Icon }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            aria-label={label}
            className={`flex items-center cursor-pointer px-4 py-2 rounded-xl font-bold transition-all duration-200 ${
              pathname === path
                ? "text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

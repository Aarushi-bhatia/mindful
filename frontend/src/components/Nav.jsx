import React, { useState } from "react";
import {
  Target,
  Plus,
  Trash2,
  BarChart3,
  Home,
  Grid3X3,
  TrendingUp,
  Calendar,
  Flame,
  Award,
  Activity,
  ChevronRight,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
   try {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
if (currentPath === "/") return null;
  return (

    <div>
      {/* Minimalist Navigation */}
    
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center mr-3">
                  <Target className="w-5 h-5 text-indigo-500" />
                </div>
                <span className="text-xl font-light text-gray-800">
                  Mindful
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate("/")}
                  className={`flex items-center px-4 py-2 rounded-xl transition-all duration-200 ${
                    currentPath === "/"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </button>
                <button
                  onClick={() => navigate("/habits")}
                  className={`flex items-center px-4 py-2 rounded-xl transition-all duration-200 ${
                    currentPath === "/habits"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Habits
                </button>
                <button
                  onClick={() => navigate("/analytics")}
                  className={`flex items-center px-4 py-2 rounded-xl transition-all duration-200 ${
                    currentPath === "/analytics"
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Insights
                </button>
              </div>
            </div>
          </div>
        </nav>
      
    </div>
  ); } catch (e) {
    return <div style={{ color: "red" }}>Nav Error: {e.message}</div>;
  }
}


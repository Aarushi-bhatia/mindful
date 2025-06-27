import React, { useState } from "react";
import {
  Target,
  BarChart3,
  Grid3X3,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";

// Landing Page
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center mr-4">
              <Target className="w-8 h-8 text-indigo-500" />
            </div>
            <h1 className="text-5xl font-light text-gray-800">Mindful</h1>
          </div>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            A peaceful space to build lasting habits. Track your journey with
            gentle reminders and beautiful visualizations.
          </p>
          <button
            onClick={() => navigate("/habits")}
            className="bg-white text-gray-700 px-10 py-4 rounded-2xl font-medium hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm inline-flex items-center"
          >
            Begin Journey
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Grid3X3 className="w-6 h-6 text-indigo-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Visual Progress
            </h3>
            <p className="text-gray-600 font-light">
              Clean, minimalist grids that make your progress satisfying to see
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Gentle Insights
            </h3>
            <p className="text-gray-600 font-light">
              Thoughtful analytics that encourage rather than overwhelm
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 border border-white/20">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              Personal Touch
            </h3>
            <p className="text-gray-600 font-light">
              Customize your habits with meaningful icons and calming colors
            </p>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto border border-white/30">
          <h2 className="text-2xl font-light text-gray-800 text-center mb-8">
            Your habits, beautifully visualized
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center mr-3">
                <span>🧘</span>
              </div>
              <div>
                <span className="font-medium text-gray-800">
                  Daily Meditation
                </span>
                <p className="text-sm text-gray-500">12 days completed</p>
              </div>
            </div>
            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: 84 }, (_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-lg"
                  style={{
                    backgroundColor:
                      Math.random() > 0.7 ? "#6366f1" : "#f3f4f6",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingPage;

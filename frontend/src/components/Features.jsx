import { BarChart3, Grid3X3, Target } from "lucide-react";
import React from "react";

const Features = () => {
  return (
    <div id="features" className="grid md:grid-cols-3 gap-8 mb-20">
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 border border-white/20">
        <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Grid3X3 className="w-6 h-6 text-indigo-500" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Visual Progress
        </h3>
        <p className="text-gray-600 font-medium">
          Clean, minimalist grids that make your progress satisfying to see
        </p>
      </div>
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 border border-white/20">
        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <BarChart3 className="w-6 h-6 text-blue-500" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          Gentle Insights
        </h3>
        <p className="text-gray-600 font-medium">
          Thoughtful analytics that encourage rather than overwhelm
        </p>
      </div>
      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/90 transition-all duration-300 border border-white/20">
        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Target className="w-6 h-6 text-green-500" />
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-3">Personal Touch</h3>
        <p className="text-gray-600 font-medium">
          Customize your habits with meaningful icons and calming colors
        </p>
      </div>
    </div>
  );
};

export default Features;

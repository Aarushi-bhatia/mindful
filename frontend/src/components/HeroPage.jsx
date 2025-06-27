import { ChevronRight, Rabbit, Target } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GridBackgroundDemo } from "./GridBG";

const HeroPage = () => {
  const navigate = useNavigate();
  return (
    <div id="home" className="-mt-16  relative h-screen">
      <GridBackgroundDemo />
   
    <div  className="absolute inset-0 flex items-center justify-center">
      
      <div className="text-center max-w-2xl">

        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Rabbit className="w-14 h-14" />
          <h1 className="text-5xl font-bold text-gray-800">Mindful</h1>
        </div>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          A peaceful space to build lasting habits. Track your journey with
          gentle reminders and beautiful visualizations.
        </p>
        <button
          onClick={() => navigate("/habits")}
          className="bg-[#7dd3ae] text-lg border border-gray-800 px-10 py-4 rounded-full font-semibold hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm inline-flex items-center cursor-pointer"
        >
          Begin Journey
          <ChevronRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
     </div>
  );
};

export default HeroPage;

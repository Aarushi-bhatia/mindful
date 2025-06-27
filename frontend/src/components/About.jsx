import React from "react";

const About = () => {
  return (
    <div id="aboutus" className="h-screen flex items-center justify-center ">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl  max-w-7xl mx-auto border border-white/30">
        <div className="flex flex-col md:flex-row gap-4 w-full items-center">
           <div className="flex-1 space-y-6 ">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight tracking-tight">
                  Your habits,
                  <span className="block text-[#7dd3ae]">beautifully visualized</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform your daily routines into meaningful insights with elegant visualizations 
                  that inspire consistency and celebrate progress.
                </p>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Track multiple habits effortlessly</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-gray-700">Beautiful calendar heatmaps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">Insights that motivate growth</span>
                </div>
              </div>
            </div>
          <div className="flex-1 space-y-4">
            <HabitCard icon= "🧘" title="Daily Meditation" daysCompleted={12} slant={3} />
            <HabitCard icon="📚" title="Reading" daysCompleted={22} slant={-3} />
            {/* <HabitCard icon="✍️" title="Journaling" daysCompleted={15} slant={3} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const HabitCard = ({icon, title, daysCompleted, slant }) => {
  return (
    <div
      className="rounded-2xl p-6 shadow-sm border border-white/20 backdrop-blur-md bg-white/30"
      style={{
        transform: `rotate(${slant}deg)`,
      }}
    >
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center mr-3">
          <span>{icon}</span>
        </div>
        <div>
          <span className="font-medium text-gray-800">{title}</span>
          <p className="text-sm text-gray-500">{daysCompleted} days completed</p>
        </div>
      </div>
      <div className="flex gap-1 flex-wrap">
        {Array.from({ length: 200 }, (_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-sm"
            style={{
              backgroundColor: Math.random() > 0.7 ? "#7dd3ae" : "#f3f4f6",
            }}
          />
        ))}
      </div>
    </div>
  );
};


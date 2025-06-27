import React, { useState } from "react";
import { Target, Plus, Trash2 } from "lucide-react";
import HabitContributionGraph from "../components/HabitContributionGraph";

// Date utility functions
const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const subDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

const format = (date, formatStr) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  if (formatStr === "yyyy-MM-dd") {
    return `${year}-${month}-${day}`;
  }
  if (formatStr === "MMM dd, yyyy") {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${String(date.getDate()).padStart(
      2,
      "0"
    )}, ${year}`;
  }
  return date.toDateString();
};

const isToday = (date) => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

const getMonthName = (monthIndex) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthIndex];
};
const habitLogs = {
  "2025-06-25": true,
  "2025-06-26": true,
  "2025-06-15": true,
};
// Habits Management Page
const HabitsPage = () => {
  const today = new Date();
  const [habits, setHabits] = useState([
    { id: 1, name: "Meditation", icon: "🧘", color: "#6366f1" },
    { id: 2, name: "Reading", icon: "📖", color: "#0ea5e9" },
    { id: 3, name: "Exercise", icon: "🌱", color: "#10b981" },
  ]);
  const [data, setData] = useState({});
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitIcon, setNewHabitIcon] = useState("✨");

  const toggleDay = (habitId, date) => {
    const key = format(date, "yyyy-MM-dd");
    const updated = { ...data };
    if (!updated[habitId]) updated[habitId] = {};
    updated[habitId][key] = !updated[habitId][key];
    setData(updated);
  };

  const addHabit = () => {
    if (newHabitName.trim()) {
      const calmColors = [
        "#6366f1",
        "#0ea5e9",
        "#10b981",
        "#8b5cf6",
        "#06b6d4",
        "#14b8a6",
        "#84cc16",
        "#f59e0b",
      ];
      const newHabit = {
        id: Date.now(),
        name: newHabitName.trim(),
        icon: newHabitIcon,
        color: calmColors[Math.floor(Math.random() * calmColors.length)],
      };
      setHabits([...habits, newHabit]);
      setNewHabitName("");
      setNewHabitIcon("✨");
    }
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter((h) => h.id !== habitId));
    const updated = { ...data };
    delete updated[habitId];
    setData(updated);
  };

  const getStreak = (habitId) => {
    let streak = 0;
    let currentDate = today;

    while (true) {
      const key = format(currentDate, "yyyy-MM-dd");
      if (data[habitId]?.[key]) {
        streak++;
        currentDate = subDays(currentDate, 1);
      } else {
        break;
      }
    }
    return streak;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-light text-gray-800 mb-2">
              Your Habits
            </h1>
            <p className="text-gray-600">
              Track your daily journey to better habits
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Habit name"
                value={newHabitName}
                onChange={(e) => setNewHabitName(e.target.value)}
                className="border-0 bg-gray-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Icon"
                value={newHabitIcon}
                onChange={(e) => setNewHabitIcon(e.target.value)}
                className="border-0 bg-gray-50 rounded-xl px-4 py-3 w-20 text-center focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all duration-200"
              />
              <button
                onClick={addHabit}
                className="bg-indigo-500 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 transition-all duration-200 flex items-center justify-center font-medium"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* {habits.map((habit) => (
            <MinimalistGrid
              key={habit.id}
              habitId={habit.id}
              habitName={habit.name}
              habitColor={habit.color}
              data={data}
              toggleDay={toggleDay}
            />
          ))} */}
          {habits.map((habit) => (
            <HabitContributionGraph habitLogs={habitLogs} />
          ))}
          {habits.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-light text-gray-600 mb-2">
                No habits yet
              </h3>
              <p className="text-gray-500">
                Start your journey by adding your first habit
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HabitsPage;

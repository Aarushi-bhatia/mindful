import { useState } from "react";
import { Target, Plus, Trash2 } from "lucide-react";

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

// Minimalist GitHub-style grid
const MinimalistGrid = ({ habitId, habitName, habitColor }) => {
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
  const startDate = new Date(today.getFullYear(), 0, 1);
  const endDate = today;

  const firstSunday = new Date(startDate);
  while (firstSunday.getDay() !== 0) {
    firstSunday.setDate(firstSunday.getDate() - 1);
  }

  const weeks = [];
  let currentDate = new Date(firstSunday);

  while (currentDate <= endDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const dayKey = format(currentDate, "yyyy-MM-dd");
      const isCompleted = data[habitId]?.[dayKey] || false;
      const isCurrentYear = currentDate.getFullYear() === today.getFullYear();
      const isFuture = currentDate > today;

      week.push({
        date: new Date(currentDate),
        isCompleted,
        isCurrentYear,
        isFuture,
        key: dayKey,
      });
      currentDate = addDays(currentDate, 1);
    }
    weeks.push(week);
  }

  const getTotalCompletions = (habitId) => {
    if (!data[habitId]) return 0;
    return Object.values(data[habitId]).filter(Boolean).length;
  };

  const getYearProgress = (habitId) => {
    const yearStart = new Date(today.getFullYear(), 0, 1);
    const daysSinceStart = Math.floor(
      (today - yearStart) / (1000 * 60 * 60 * 24)
    );
    let completed = 0;

    for (let i = 0; i <= daysSinceStart; i++) {
      const date = addDays(yearStart, i);
      const key = format(date, "yyyy-MM-dd");
      if (data[habitId]?.[key]) completed++;
    }
    return { completed, total: daysSinceStart + 1 };
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-lg">
            {habits.find((h) => h.id === habitId)?.icon}
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800">{habitName}</h3>
            <p className="text-sm text-gray-500">
              {getTotalCompletions(habitId)} days completed
            </p>
          </div>
        </div>
        <button
          onClick={() => deleteHabit(habitId)}
          className="w-8 h-8 rounded-2xl text-gray-400 hover:text-red-400 hover:bg-red-50 transition-all duration-200 flex items-center justify-center"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="inline-flex flex-col gap-2 min-w-max">
          {/* Month labels */}
          <div className="flex mb-3">
            <div className="w-8"></div>
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="text-xs font-medium text-gray-400 text-center"
                style={{ width: "52px" }}
              >
                {getMonthName(i)}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-2">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-2">
                {week.map((day, dayIndex) => {
                  return (
                    <div
                      key={day.key}
                      className={`
                          w-3 h-3 cursor-pointer transition-all duration-200 
                          ${
                            day.isFuture
                              ? "bg-gray-100 cursor-not-allowed"
                              : day.isCompleted
                              ? "shadow-sm hover:scale-110"
                              : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
                          }
                        `}
                      style={{
                        backgroundColor: day.isFuture
                          ? "#f3f4f6"
                          : day.isCompleted
                          ? habitColor
                          : "#f3f4f6",
                      }}
                      onClick={() =>
                        !day.isFuture && toggleDay(habitId, day.date)
                      }
                      title={`${habitName} - ${format(
                        day.date,
                        "MMM dd, yyyy"
                      )} ${day.isCompleted ? "✓" : ""}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinimalistGrid;

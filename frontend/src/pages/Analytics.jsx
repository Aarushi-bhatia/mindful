import React, { useState } from "react";
import {
  Target,
  BarChart3,
  Flame,
  Award,
  Activity,
} from "lucide-react";

// Analytics Page
const AnalyticsPage = () => {
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

  const today = new Date();
  const [data, setData] = useState({});
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
  const [habits, setHabits] = useState([
    { id: 1, name: "Meditation", icon: "🧘", color: "#6366f1" },
    { id: 2, name: "Reading", icon: "📖", color: "#0ea5e9" },
    { id: 3, name: "Exercise", icon: "🌱", color: "#10b981" },
  ]);
  const getTotalCompletions = (habitId) => {
    if (!data[habitId]) return 0;
    return Object.values(data[habitId]).filter(Boolean).length;
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

  const totalHabits = habits.length;
  const totalCompletions = habits.reduce(
    (sum, habit) => sum + getTotalCompletions(habit.id),
    0
  );
  const averageStreak =
    habits.length > 0
      ? habits.reduce((sum, habit) => sum + getStreak(habit.id), 0) /
        habits.length
      : 0;

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-light text-gray-800 mb-2">Insights</h1>
          <p className="text-gray-600">Your progress at a glance</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-indigo-500" />
              </div>
            </div>
            <div className="text-2xl font-light text-gray-800 mb-1">
              {totalHabits}
            </div>
            <div className="text-sm text-gray-500">Active Habits</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-green-500" />
              </div>
            </div>
            <div className="text-2xl font-light text-gray-800 mb-1">
              {totalCompletions}
            </div>
            <div className="text-sm text-gray-500">Total Completions</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="text-2xl font-light text-gray-800 mb-1">
              {Math.round(averageStreak)}
            </div>
            <div className="text-sm text-gray-500">Average Streak</div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <div className="text-2xl font-light text-gray-800 mb-1">
              {
                habits.filter(
                  (habit) => data[habit.id]?.[format(today, "yyyy-MM-dd")]
                ).length
              }
            </div>
            <div className="text-sm text-gray-500">Completed Today</div>
          </div>
        </div>

        {/* Habit Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {habits.map((habit) => {
            const streak = getStreak(habit.id);
            const yearProgress = getYearProgress(habit.id);
            const completionRate =
              yearProgress.total > 0
                ? (yearProgress.completed / yearProgress.total) * 100
                : 0;

            return (
              <div
                key={habit.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50"
              >
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-xl">{habit.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-800">
                      {habit.name}
                    </h3>
                    <p className="text-sm text-gray-500">Progress Overview</p>
                  </div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: habit.color }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-800 mb-1">
                      {streak}
                    </div>
                    <div className="text-sm text-gray-500">Current Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-gray-800 mb-1">
                      {getTotalCompletions(habit.id)}
                    </div>
                    <div className="text-sm text-gray-500">Total Days</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>Year Progress</span>
                    <span>{Math.round(completionRate)}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${completionRate}%`,
                        backgroundColor: habit.color,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="text-sm text-gray-500 text-center">
                  {yearProgress.completed} of {yearProgress.total} days
                  completed
                </div>
              </div>
            );
          })}
        </div>

        {habits.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-light text-gray-600 mb-2">
              No insights yet
            </h3>
            <p className="text-gray-500">
              Start tracking habits to see your analytics
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default AnalyticsPage;

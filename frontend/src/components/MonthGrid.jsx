import React from "react";
import HabitCell from "./HabitCell";

const MonthGrid = ({ year, month, habitLogs }) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  //   const today = new Date().toDateString();

  const cells = [];

  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() === month;
  const lastDay = isCurrentMonth ? today.getDate() : daysInMonth;

  for (let day = 1; day <= lastDay; day++) {
    const date = new Date(year, month, day);
     if (date > today) break;
    const dateKey = date.toISOString().split("T")[0];
    const count = habitLogs[dateKey] || 0;
    const isToday = date.toDateString() === today.toDateString();

    cells.push(
      <HabitCell key={dateKey} date={date}  done={habitLogs[dateKey] === true} isToday={isToday} />
    );
  }

  return <div className="grid grid-cols-7 gap-[2px]">{cells}</div>;
};

export default MonthGrid;

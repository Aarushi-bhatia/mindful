import React from "react";
import { cn } from "../lib/utils"; // You can replace `cn` with className strings if not using Tailwind merge utils

const getColor = (count) => {
  if (count === 0) return "bg-[#EBEDF0]";
  if (count == 1) return "bg-green-200";
};

const HabitCell = ({ date, count, isToday }) => {
  const title = `${count} habit${count !== 1 ? "s" : ""} on ${date.toDateString()}`;

  const classes = cn(
    "h-4 w-4 rounded-[2px] transition hover:scale-125",
    getColor(count),
    isToday && "ring-2 ring-red-500"
  );

  return <div className={classes} title={title} />;
};

export default HabitCell;
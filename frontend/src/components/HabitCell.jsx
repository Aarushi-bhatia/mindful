import React from "react";
import { cn } from "../lib/utils"; // You can replace `cn` with className strings if not using Tailwind merge utils

const getColor = (done) => {
  return done ? "bg-[#7dd3ae]" : "bg-[#EBEDF0]";
};

const HabitCell = ({ date, done, isToday }) => {
  const title = `${done ? "Done" : "Not done"} on ${date.toDateString()}`;

  const classes = cn(
    "h-4 w-4 rounded-[2px] transition hover:scale-125",
    getColor(done),
    isToday && "ring-2 ring-red-500"
  );

  return <div className={classes} title={title} />;
};

export default HabitCell;

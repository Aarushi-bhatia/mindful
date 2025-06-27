import React, { useEffect, useRef } from "react";
import MonthGrid from "./MonthGrid";
import { MONTHS } from "../lib/constants";

const HabitContributionGraph = ({ habitLogs }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const currentMonth = new Date().getMonth();
    const monthWidth =
      containerRef.current
        ?.querySelector(".month-container")
        ?.getBoundingClientRect().width ?? 70;
    const scrollLeft = monthWidth * currentMonth;

    containerRef.current?.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, []);

  const year = new Date().getFullYear();

  return (
    <div className="p-8 bg-white rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.1)] backdrop-blur-md">
      <div className="overflow-x-auto pb-4" ref={containerRef}>
        <div className="flex  min-w-max gap-2">
          {MONTHS.map((month, index) => {
            const isFutureMonth =
              year === new Date().getFullYear() &&
              index > new Date().getMonth();
            if (isFutureMonth) return null;

            return (
              <div
                key={month}
                className="month-container flex flex-col items-center"
                style={{ minWidth: "70px" }}
              >
                <div className="mb-2 text-xs text-zinc-400">{month}</div>
                <MonthGrid year={year} month={index} habitLogs={habitLogs} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HabitContributionGraph;

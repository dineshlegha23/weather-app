import React from "react";
import TodayHighlight from "./TodayHighlight";
import HourlyForecast from "./HourlyForecast";

const RightPanel = () => {
  return (
    <div className="w-full">
      <TodayHighlight />
      <HourlyForecast />
    </div>
  );
};

export default RightPanel;

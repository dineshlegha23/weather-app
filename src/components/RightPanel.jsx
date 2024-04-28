import React from "react";
import TodayHighlight from "./TodayHighlight";
import HourlyForecast from "./HourlyForecast";

const RightPanel = () => {
  return (
    <div>
      <TodayHighlight />
      <HourlyForecast />
    </div>
  );
};

export default RightPanel;

import React from "react";
import AQI from "./AQI";

const TodayHighlight = () => {
  return (
    <div className="bg-gray rounded-2xl p-5">
      <p>Todays Highlight</p>
      <AQI />
    </div>
  );
};

export default TodayHighlight;

import React from "react";
import AQI from "./AQI";
import SunRise from "./SunRise";

const TodayHighlight = () => {
  return (
    <div className="bg-gray rounded-2xl p-5">
      <p>Todays Highlight</p>
      <div className="grid grid-cols-2 gap-5">
        <AQI />
        <SunRise />
      </div>
    </div>
  );
};

export default TodayHighlight;

import React from "react";

const HourlyForecast = ({ time, temp, img }) => {
  return (
    <div className="bg-gray rounded-xl flex flex-col items-center gap-1 py-2 px-8">
      <p>{time}</p>
      {img}
      <p className="text-white/80">
        {temp}
        <sup>o</sup>
      </p>
    </div>
  );
};

export default HourlyForecast;

import React from "react";

const SingleDayForecast = ({ temp, date, day, img }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={img} alt="cloud logo" className="w-8" />
        <p className="text-xl font-semibold">
          {temp}
          <sup>o</sup>
        </p>
      </div>
      <p className="text-white/50">{date}</p>
      <p className="text-white/50">{day}</p>
    </div>
  );
};

export default SingleDayForecast;

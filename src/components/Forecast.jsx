import React from "react";
import cloud1 from "/images/weather_icons/04d.png";
import cloud2 from "/images/weather_icons/13d.png";
import cloud3 from "/images/weather_icons/02d.png";
import SingleDayForecast from "./SingleDayForecast";

const Forecast = () => {
  return (
    <div className="bg-gray rounded-2xl p-5">
      <div className="flex flex-col gap-5">
        <SingleDayForecast
          temp={11}
          date={"2 Mar"}
          day={"Thursday"}
          img={cloud1}
        />
        <SingleDayForecast
          temp={6}
          date={"3 Mar"}
          day={"Friday"}
          img={cloud1}
        />
        <SingleDayForecast
          temp={2}
          date={"4 Mar"}
          day={"Saturday"}
          img={cloud2}
        />
        <SingleDayForecast
          temp={6}
          date={"5 Mar"}
          day={"Sunday"}
          img={cloud1}
        />
        <SingleDayForecast
          temp={7}
          date={"6 Mar"}
          day={"Monday"}
          img={cloud3}
        />
      </div>
    </div>
  );
};

export default Forecast;

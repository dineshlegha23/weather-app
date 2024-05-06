import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import SunriseSetFlex from "./SunriseSetFlex";
import { useWeatherContext } from "../context/context";

const SunRise = () => {
  const { currentTemp } = useWeatherContext();
  let sunsetHours = new Date(
    currentTemp?.timezone + currentTemp?.sys?.sunset * 1000
  ).getHours();
  const sunsetMinutes = new Date(
    currentTemp?.timezone + currentTemp?.sys?.sunset * 1000
  ).getMinutes();

  sunsetHours = sunsetHours > 12 ? Math.abs(12 - sunsetHours) : sunsetHours;

  let sunRiseHours = new Date(
    currentTemp?.timezone + currentTemp?.sys?.sunrise * 1000
  ).getHours();
  const sunriseMinutes = new Date(
    currentTemp?.timezone + currentTemp?.sys?.sunrise * 1000
  ).getMinutes();

  sunRiseHours = sunRiseHours > 12 ? Math.abs(12 - sunRiseHours) : sunRiseHours;

  return (
    <div className="bg-black/40 py-3 px-4 rounded-2xl mt-3 md:col-span-2 w-full">
      <p className="text-white/50 text-sm">Sunrise & Sunset</p>
      <div className="flex gap-5 justify-between flex-wrap md:justify-center">
        <SunriseSetFlex
          img={<IoSunnyOutline size={40} />}
          type={"Sunrise"}
          value={`${sunRiseHours}:${sunriseMinutes} AM`}
        />
        <SunriseSetFlex
          img={<FiMoon size={40} />}
          type={"Sunset"}
          value={`${sunsetHours}:${sunsetMinutes} PM`}
        />
      </div>
    </div>
  );
};

export default SunRise;

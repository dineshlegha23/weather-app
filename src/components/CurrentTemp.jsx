import React, { useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { useWeatherContext } from "../context/context";

const CurrentTemp = () => {
  const {
    coordinates,
    currentTemp,
    setTimeZone,
    setCurrentTemp,
    selectedCity,
    setSunRise,
    setSunSet,
  } = useWeatherContext();
  const { lat, lon } = coordinates;

  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=1fd671326afdca28081228497ae0615f`
    );
    const data = await response.json();
    setCurrentTemp(data);
  }

  const tempDesc = currentTemp?.weather?.[0]?.description;
  const temp = currentTemp?.main?.temp;
  const icon = currentTemp?.weather?.[0]?.icon;
  const location = selectedCity === "" ? "Delhi, In" : selectedCity;
  const currentDate = new Date().toString().substring(0, 10).split(" ");
  const day = currentDate[0];
  const month = currentDate[1];
  const date = currentDate[2];

  useEffect(() => {
    fetchData();
  }, [coordinates]);

  return (
    <section>
      <div className="bg-gray rounded-2xl p-5">
        <div>
          <p>Now</p>
          <div className="flex justify-between items-center">
            <span className="text-6xl brightness-200">
              {temp && String(temp).includes(".") ? temp.toFixed(1) : temp}
              <sup>o</sup>c
            </span>
            <i className="w-16 mx-5">
              <img src={`/images/weather_icons/${icon}.png`} alt="cloud logo" />
            </i>
          </div>
          <p className="my-2">
            {tempDesc
              ?.split(" ")
              .map((word) => word[0].toUpperCase() + word.substring(1))
              .join(" ")}
          </p>
          <hr className="text-white/50" />
          <div className="flex flex-col gap-2 mt-2 text-white/50">
            <div className="flex gap-2 items-center">
              <CiCalendar size={20} />
              <p>
                {day} {date}, {month}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot size={20} />
              <p>{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentTemp;

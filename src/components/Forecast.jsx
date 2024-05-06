import React, { useEffect } from "react";
import cloud1 from "/images/weather_icons/04d.png";
import cloud2 from "/images/weather_icons/13d.png";
import cloud3 from "/images/weather_icons/02d.png";
import SingleDayForecast from "./SingleDayForecast";
import { useWeatherContext } from "../context/context";

const Forecast = () => {
  const weekDayNames = ["Sun", "Mon", "Tue", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { coordinates, forecast, setForecast } = useWeatherContext();
  const { lat, lon } = coordinates;

  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=1fd671326afdca28081228497ae0615f`
    );
    const data = await response.json();
    setForecast(data);
    console.log(forecast);
  }

  const date = new Date(19800 + 1715029200 * 1000).getUTCHours();
  console.log(date);

  useEffect(() => {
    fetchData();
  }, [coordinates]);

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

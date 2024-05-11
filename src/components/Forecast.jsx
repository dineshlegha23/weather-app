import React, { useEffect, useState } from "react";
import SingleDayForecast from "./SingleDayForecast";
import { useWeatherContext } from "../context/context";

const Forecast = () => {
  const weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
  const hours = [];

  async function fetchData() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=1fd671326afdca28081228497ae0615f`
    );
    const data = await response.json();
    setForecast(data);
  }

  useEffect(() => {
    fetchData();
  }, [coordinates]);

  console.log(forecast);

  for (let i = 5; i < 40; i += 8) {
    hours.push({
      temp: forecast?.list[i]?.main?.temp,
      date: forecast?.list[i]?.dt,
      icon: forecast?.list[i]?.weather[0]?.icon,
    });
  }

  console.log(hours);
  return (
    <div className="bg-gray rounded-2xl p-5">
      <div className="flex flex-col gap-5">
        {hours.map((item) => {
          const date = new Date(19800 + item.date * 1000);
          return (
            <SingleDayForecast
              temp={item?.temp?.toFixed(0)}
              date={`${date.getUTCDate()} ${monthNames[date.getUTCMonth()]}`}
              day={weekDayNames[date.getUTCDay()]}
              img={`/images/weather_icons/${item?.icon}.png`}
            />
          );
        })}
        {/* <SingleDayForecast
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
        /> */}
      </div>
    </div>
  );
};

export default Forecast;

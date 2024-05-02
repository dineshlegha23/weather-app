import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useWeatherContext } from "./context/context";

const App = () => {
  const { city, setCities } = useWeatherContext();
  const fetchData = async () => {
    const response = await fetch(
      // "https://api.openweathermap.org/data/2.5/air_pollution?lat=23.7644025&lon=90.38901&appid=1fd671326afdca28081228497ae0615f"
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=1fd671326afdca28081228497ae0615f`
    );
    const data = await response.json();
    setCities(data);
    console.log(data);
  };

  useEffect(() => {
    if (city.length != 0) {
      const time = setTimeout(() => {
        fetchData();
      }, 500);
      return () => clearTimeout(time);
    }
  }, [city]);
  return (
    <div className="px-6 max-w-8xl mb-5">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;

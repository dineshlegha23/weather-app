import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useWeatherContext } from "../context/context";

const Navbar = () => {
  const { city, setCity, cities, setCities, setCoordinates, setSelectedCity } =
    useWeatherContext();
  const [touched, setTouched] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=1fd671326afdca28081228497ae0615f`
    );
    const data = await response.json();
    setCities(data);
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
    <nav className="flex justify-between items-center py-5 mx-auto max-w-7xl md:flex-col md:gap-5">
      <i className="w-48">
        <img src={"/images/logo.png"} alt="logo" />
      </i>
      <div onFocus={() => setTouched(true)} className="relative md:mx-auto">
        {touched && (
          <div
            onClick={() => setTouched(false)}
            className="fixed w-screen h-screen"
          ></div>
        )}
        <IoSearchOutline className="absolute top-[8px] ml-2" size={20} />
        <input
          className="pl-9 py-[6px] bg-gray text-white outline-none w-[350px] px-2 rounded-full md:w-auto focus:rounded-none focus:rounded-t-[18px]"
          placeholder="Enter city name..."
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {touched && cities && (
          <ul className="absolute shadow-[0px_10px_20px_black] z-10 w-full flex flex-col bg-gray rounded-b-xl border-t-[1px] border-white/50">
            {cities.map((city, index) => (
              <li
                onClick={(e) => {
                  setCoordinates({ lat: city.lat, lon: city.lon });
                  setSelectedCity(`${city.name}, ${city.country}`);
                  setCity(city.name + " " + city.country);
                  setTouched(false);
                }}
                key={index}
                className="px-3 py-3 hover:bg-black/40 hover:cursor-pointer"
              >
                <div className="flex gap-3 items-center">
                  <FaLocationDot size={20} color="gray" />
                  <div>
                    <p>{city.name}</p>
                    <p className="text-white/50 leading-4">
                      {city.state} {city.country}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex items-center relative gap-3 bg-[#B5A1F9] rounded-full py-[6px] px-3 cursor-pointer">
        <FaLocationCrosshairs className="relative" />
        <button className="">Current Location</button>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import logo from "../images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { useWeatherContext } from "../context/context";

const Navbar = () => {
  const { city, setCity, cities, setCoordinates } = useWeatherContext();
  const [touched, setTouched] = useState(false);

  return (
    <nav className="flex justify-between items-center py-5 mx-auto max-w-7xl md:flex-col md:gap-5">
      <i className="w-48">
        <img src={logo} alt="logo" />
      </i>
      <div onFocus={() => setTouched(true)} className="relative md:mx-auto">
        <IoSearchOutline className="absolute top-[8px] ml-2" size={20} />
        <input
          className="pl-9 py-[6px] bg-gray text-white outline-none w-[350px] px-2 rounded-full md:w-auto focus:rounded-none focus:rounded-t-[18px]"
          placeholder="Enter city name..."
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {touched && cities && (
          <ul className="absolute w-full flex flex-col bg-gray rounded-b-xl border-t-[1px] border-white/50">
            {cities.map((city, index) => (
              <li
                onClick={(e) =>
                  setCoordinates({ lat: city.lat, lon: city.lon })
                }
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

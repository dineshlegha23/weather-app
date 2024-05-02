import React, { useEffect } from "react";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import cloudLogo from "../images/weather_icons/04n.png";

const CurrentTemp = () => {
  async function fetchData() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=23.7644025&lon=90.38901&units=metric&appid=1fd671326afdca28081228497ae0615f"
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section>
      <div className="bg-gray rounded-2xl p-5">
        <div>
          <p>Now</p>
          <div className="flex justify-between items-center">
            <span className="text-6xl brightness-200">
              5<sup>o</sup>c
            </span>
            <i className="w-16 mx-5">
              <img src={cloudLogo} alt="cloud logo" />
            </i>
          </div>
          <p className="my-2">Overcast Clouds</p>
          <hr className="text-white/50" />
          <div className="flex flex-col gap-2 mt-2 text-white/50">
            <div className="flex gap-2 items-center">
              <CiCalendar size={20} />
              <p>Wednesday 1, Mar</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaLocationDot size={20} />
              <p>New York Country, US</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentTemp;

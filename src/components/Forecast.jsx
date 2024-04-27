import React from "react";
import cloud1 from "../images/weather_icons/04d.png";
import cloud2 from "../images/weather_icons/13d.png";
import cloud3 from "../images/weather_icons/02d.png";

const Forecast = () => {
  return (
    <section className="w-72">
      <div className="bg-gray rounded-2xl p-5">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={cloud1} alt="cloud logo" className="w-8" />
              <p className="text-xl font-semibold">
                11<sup>o</sup>
              </p>
            </div>
            <p className="text-white/50">2 Mar</p>
            <p className="text-white/50">Thursday</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={cloud1} alt="cloud logo" className="w-8" />
              <p className="text-xl font-semibold">
                6<sup>o</sup>
              </p>
            </div>
            <p className="text-white/50">3 Mar</p>
            <p className="text-white/50">Friday</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={cloud2} alt="cloud logo" className="w-8" />
              <p className="text-xl font-semibold">
                2<sup>o</sup>
              </p>
            </div>
            <p className="text-white/50">4 Mar</p>
            <p className="text-white/50">Saturday</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={cloud1} alt="cloud logo" className="w-8" />
              <p className="text-xl font-semibold">
                6<sup>o</sup>
              </p>
            </div>
            <p className="text-white/50">5 Mar</p>
            <p className="text-white/50">Sunday</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={cloud3} alt="cloud logo" className="w-8" />
              <p className="text-xl font-semibold">
                7<sup>o</sup>
              </p>
            </div>
            <p className="text-white/50">6 Mar</p>
            <p className="text-white/50">Monday</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forecast;

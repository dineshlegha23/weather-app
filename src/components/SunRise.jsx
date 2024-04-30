import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
// import { FaRegMoon } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import SunriseSetFlex from "./SunriseSetFlex";

const SunRise = () => {
  return (
    <div className="bg-black/40 py-3 px-4 rounded-2xl mt-3">
      <p className="text-white/50 text-sm">Sunrise & Sunset</p>
      <div className="flex gap-5 justify-between">
        <SunriseSetFlex
          img={<IoSunnyOutline size={40} />}
          type={"Sunrise"}
          value={"6:30 AM"}
        />
        <SunriseSetFlex
          img={<FiMoon size={40} />}
          type={"Sunset"}
          value={"5:46 PM"}
        />
      </div>
    </div>
  );
};

export default SunRise;

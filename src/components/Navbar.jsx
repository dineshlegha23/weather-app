import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import logo from "../images/logo.png";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <nav className="flex justify-between items-center py-5 mx-auto max-w-7xl md:flex-col md:gap-5">
      <i className="w-48">
        <img src={logo} alt="logo" />
      </i>
      <div className="relative md:mx-auto">
        <IoSearchOutline className="absolute top-[8px] ml-2" size={20} />
        <input
          className="pl-9 rounded-full py-[6px] bg-gray text-white outline-none w-[350px] px-2 md:w-auto"
          placeholder="Enter city name..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center relative gap-3 bg-[#B5A1F9] rounded-full py-[6px] px-3 cursor-pointer">
        <FaLocationCrosshairs className="relative" />
        <button className="">Current Location</button>
      </div>
    </nav>
  );
};

export default Navbar;

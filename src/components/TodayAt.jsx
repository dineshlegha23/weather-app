import React from "react";
import HourlyForecast from "./HourlyForecast";
import { CiCloud } from "react-icons/ci";

const TodayAt = () => {
  return (
    <div className=" my-5">
      <p>Today at</p>
      <div className="flex gap-5 mt-5">
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
        <HourlyForecast time={"4 PM"} temp={"5"} img={<CiCloud size={40} />} />
      </div>
    </div>
  );
};

export default TodayAt;

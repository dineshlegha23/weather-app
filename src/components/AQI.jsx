import React from "react";
import { MdOutlineAir } from "react-icons/md";
import AQIFlexCol from "./AQIFlexCol";

const AQI = () => {
  return (
    <div className="bg-black/40 py-3 px-4 rounded-2xl mt-3 md:col-span-2">
      <div className="flex justify-between text-sm">
        <p className="text-white/50">Air Quality Index</p>
        <span className="bg-yellow-300 text-black py-[1px] px-4 rounded-full">
          Fair
        </span>
      </div>
      <div className="flex items-center gap-5">
        <MdOutlineAir size={40} className="xs:hidden" />
        <div className="flex items-center justify-between gap-5 mt-5 flex-wrap w-full">
          <AQIFlexCol type={"PM25"} value={"16.4"} />
          <AQIFlexCol type={"SO2"} value={"9.06"} />
          <AQIFlexCol type={"NO2"} value={"36.0"} />
          <AQIFlexCol type={"O3"} value={"71.5"} />
        </div>
      </div>
    </div>
  );
};

export default AQI;

import React from "react";

const AQI = () => {
  return (
    <div className="bg-black/40 p-2 rounded-2xl w-[400px]">
      <div className="flex justify-between text-sm">
        <p className="text-white/50">Air Quality Index</p>
        <span className="bg-yellow-300 text-black py-[1px] px-4 rounded-full">
          Fair
        </span>
      </div>
      <div className="flex gap-2">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default AQI;

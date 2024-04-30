import React from "react";

const ExtraDetails = ({ text, value, img, measurement }) => {
  return (
    <div className="bg-black/40 p-3 rounded-xl w-full">
      <p className="text-white/50 text-sm">{text}</p>
      <div className="flex justify-between items-center mt-2">
        {img}
        <p className="text-3xl">
          {value}
          <span className="text-lg">
            {measurement === "oC" ? (
              <p className="text-sm inline-block">
                <sup className="-top-3">O</sup>C
              </p>
            ) : (
              measurement
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ExtraDetails;

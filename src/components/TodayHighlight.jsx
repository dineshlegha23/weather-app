import React from "react";
import AQI from "./AQI";
import SunRise from "./SunRise";
import ExtraDetails from "./ExtraDetails";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineLineStyle } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { LiaTemperatureHighSolid } from "react-icons/lia";

const TodayHighlight = () => {
  return (
    <div className="bg-gray rounded-2xl p-5">
      <p>Todays Highlight</p>
      <div className="grid grid-cols-2 gap-5">
        <AQI />
        <SunRise />
      </div>
      <div className="mt-5 flex gap-5">
        <ExtraDetails
          text={"Humidity"}
          value={"70"}
          measurement={"%"}
          img={<WiHumidity size={40} />}
        />
        <ExtraDetails
          text={"Pressure"}
          value={"1017"}
          measurement={"hPa"}
          img={<MdOutlineLineStyle size={40} />}
        />
        <ExtraDetails
          text={"Visibility"}
          value={"10"}
          measurement={"km"}
          img={<IoEyeOutline size={40} />}
        />
        <ExtraDetails
          text={"Feels Like"}
          value={"2"}
          measurement={"oC"}
          img={<LiaTemperatureHighSolid size={40} />}
        />
      </div>
    </div>
  );
};

export default TodayHighlight;

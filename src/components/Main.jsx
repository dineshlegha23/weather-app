import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Main = () => {
  return (
    <div className="flex gap-10 mt-8">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Main;

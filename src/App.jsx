import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useWeatherContext } from "./context/context";

const App = () => {
  return (
    <div className="px-6 max-w-8xl mb-5">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;

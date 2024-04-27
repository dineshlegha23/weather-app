import React from "react";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="px-8 max-w-8xl">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;

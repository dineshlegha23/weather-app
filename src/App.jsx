import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="px-6 max-w-8xl mx-auto">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;

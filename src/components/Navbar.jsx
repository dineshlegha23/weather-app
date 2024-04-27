import React, { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <nav>
      <i>
        <img src={logo} alt="logo" />
      </i>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <i>*</i>
        <button>Current Location</button>
      </div>
    </nav>
  );
};

export default Navbar;

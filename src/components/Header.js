import React from "react";
import { NavLink } from "react-router-dom";
import anicon from "../images/icon/an.svg";

import "../styles/header/dist/header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <img src={anicon} alt="an icon" />
        </div>
        <div className="header-nav-container">
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/">Browse</NavLink>
          <NavLink to="/">Search</NavLink>
          <NavLink to="/">Log in</NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

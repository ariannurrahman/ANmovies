import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import anicon from "../images/icon/an.svg";
import burgermenu from "../images/icon/burgermenu.png";
import "../styles/header/dist/header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const link = ["home", "search", "about"];
  const renderNav = () => {
    return link.map((nav, index) => {
      return (
        <NavLink to={nav === "home" ? "/" : `/${nav}`} key={index}>
          {nav}
        </NavLink>
      );
    });
  };

  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="header-top">
          <img src={anicon} alt="an icon" className="an-icon" />

          <div className="header-nav-container">
            <img
              src={burgermenu}
              alt="burger menu"
              onClick={openMenu}
              className="burger-menu"
            />
          </div>
        </div>

        <div className="header-bottom">
          {isOpen ? (
            <div className="header-nav-wrapper" onClick={openMenu}>
              {renderNav()}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;

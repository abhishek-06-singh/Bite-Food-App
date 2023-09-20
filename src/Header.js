import React, { useState } from "react";
import logo from "../assets/logomain.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import "./header.css";
const Header = () => {
  const [showNavBar, SetShowNavBar] = useState(false);

  const handleShowNavBar = () => {
    SetShowNavBar(!showNavBar);
  };

  return (
    <div className="header">
      <div className="logo">
        <img className="logoimg" src={logo}></img>
      </div>
      <div className="menu-icon" onClick={handleShowNavBar}>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          style={{ color: "#ff7024", size: "xl" }}
        />
      </div>
      <div className={`nav-items  ${showNavBar && "active"}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../../assets/logo/star_wars_logo.png" 
import "./header.css";
/* Header component to display Logo*/

const Header = () => (
  <header>
      <img
        alt="Star_Wars"
        src={logo}
      />
  </header>
);

export default Header
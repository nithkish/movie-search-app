import React from "react";
import logo from "../../assets/logo/star_wars_logo.png";
import "./header.css";
/* Header component to display Logo*/

const Header = () => (
  <header>
    <a href="https://www.starwars.com/" target="_blank">
      <img alt="Star_Wars" src={logo} />
    </a>
  </header>
);

export default Header;

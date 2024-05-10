import React, { useState } from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import "../css/header";

// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={LOGO_URL}
      alt="Happy Cooking Logo"
      title="Happy Cooking"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
import React, { useEffect } from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import "../css/Footer";

// Footer component for footer section
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/razul-fathimal/" target="_blank">
          Razul Fathima
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Happy<span>Cooking</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;
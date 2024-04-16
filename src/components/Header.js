import React from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { LOGO_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-img" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
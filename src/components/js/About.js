import React, { useEffect } from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";

const About = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                    <h2 className="overflow">Enjoy Your Healthy Delicious Food</h2>
                </div>
                <div className="col-lg-5 order-1">
                    <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/hero-img.png" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default About;
import React from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { shimmer_menu_card_unit } from "../../utils/constants";

export const MenuShimmer = () => {
    return (
      <div className="restaurant-menu">
        <div className="restaurant-summary stroke-color animate">
          <img className="shimmer-img stroke animate" />
          <div className="restaurant-summary-details">
            <h2 className="shimmer-w40  stroke animate"></h2>
            <p className="shimmer-w20 stroke animate"></p>
            <div className="shimmer-w60  stroke animate">
            </div>
          </div>
        </div>
  
        <div className="restaurant-menu-content">
          <div className="menu-items-container">
            <div className="menu-items-list">
              { Array(shimmer_menu_card_unit).fill("").map( (element, index)  => 
              <div className="shimmer-menu-card" key={index}>
                <div className="shimmer-item-details">
                  <h3 className="shimmer-w40  stroke animate"></h3>
                  <p className="shimmer-w20  stroke animate"> </p>
                  <p className="shimmer-w60  stroke animate"></p>
                </div>
                <div className="shimmer-img-wrapper">
                  <img className="shimmer-img stroke animate" /> 
                  <div className="shimmer-btn stroke animate"> </div>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
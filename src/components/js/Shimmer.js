import React from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { shimmer_card_unit } from "../../utils/constants";

// Shimmer card to display with animation
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-cards-container">
        {/* <div className="shimmer-filter-container">
            <button className="shimmer-filter-button"></button>
        </div> */}
        <div className="shimmer-container">
        {new Array(shimmer_card_unit).fill(0).map((element, index) => {
            return <CardShimmer key={index} />;
        })}
        </div>
    </div>
  );
};
export default Shimmer;
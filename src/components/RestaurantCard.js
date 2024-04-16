import React from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

//State Variable - super powerful variable

//Normal js variable
const RestaurantCard = (props) => {
    //const RestaurantCard = ({resName, cusine}) => {
    //console.log(props);
    const { resData } = props;
    const { 
        name,
        cusine,
        avgRating,
        costForTwo,
        deliveryTime,
        imageID
    } = resData?.data;
    return(
        <div className="res-card" style={styleCard}>
            <img alt="res-logo"
            className="res-logo" 
            src={CDN_URL+imageID} />
            <h3>{name}</h3>
            <h4>{cusine.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;
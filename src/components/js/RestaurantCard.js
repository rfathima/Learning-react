import React from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { CDN_URL } from "../../utils/constants";
import "../css/RestaurantCard";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

//State Variable - super powerful variable

//Normal js variable
const RestaurantCard = ({
        name,
        cuisines,
        avgRating,
        costForTwo,
        areaName,
        cloudinaryImageId,
        sla
}) => {
    return(
        <div className="card" style={styleCard}>
            <img alt="res-logo"
            src={CDN_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>            
            <h5>{areaName}</h5>
            <h5><b>Delivery Time: </b>{sla?.deliveryTime} Munites</h5>
            <span>
                <h4
                    style={
                        avgRating > 4.5
                        ? { backgroundColor: "red", color: "white"}
                        : { backgroundColor: "white", color: "black" }
                    }
                >
                <i className="fa-solid fa-star"></i>
                {avgRating}
                </h4>
                <h4>•</h4>
                <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
                <h4>•</h4>
                <h4>{costForTwo ?? '₹200 for two'}</h4>
            </span>
        </div>
    );
};

export default RestaurantCard;
import React, { useState } from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import { Link, json } from "react-router-dom";
import { useEffect } from "react";
import { CDN_URL, MENU_API, swiggy_api_URL, MENU_CDN_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import "../css/RestaurantMenu";
import { MenuShimmer } from "./MenuShimmer";
import "../css/MenuShimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    
    useEffect (() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data)
        
    };

    if(resInfo === null) return <MenuShimmer />;

    const { name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating, areaName} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (   
    <div className="restaurant-menu">
      <div className="restaurant-summary overflow">
        <img
          className="restaurant-img"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="restaurant-summary-details">
          <h2 className="restaurant-title overflow">{name}</h2>
          <p className="restaurant-tags overflow">{cuisines.join(", ")}</p>
          <div className="restaurant-details">
            <div className="restaurant-rating" style={
            (avgRating) < 4
              ? { backgroundColor: "var(--light-red)" }
              : (avgRating) === "--"
              ? { backgroundColor: "white", color: "black" }
              : { color: "white" }
          }>
            <i className="fa-solid fa-star"></i>
              <span className="overflow">{avgRating}</span>
            </div>
            <div className="restaurant-rating-slash overflow">|</div>
            <div className="overflow">{areaName}</div>
            <div className="restaurant-rating-slash overflow">|</div>
            <div className="overflow">{costForTwoMessage}</div>
          </div>
        </div>
      </div>
      {/* <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{areaName}</h3>
            <ul>
                {itemCards.map(item => 
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"RS."}
                    {item.card.info.price / 100 || item.card.info.defaultprice / 100}
                </li>)
                }
            </ul>
        </div> */}

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-items-list">
            {itemCards.map((item) => (
              <div className="menu-item overflow" key={item?.card?.info?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title overflow">{item?.card?.info?.name}</h3>
                  <p className="item-cost overflow">
                  {"RS."}
                    {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                  </p>
                  <p className="item-desc overflow">{item?.card?.info?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {item?.card?.info?.imageId && (
                    <img
                      className="menu-item-img"
                      src={CDN_URL + item?.card?.info?.imageId}
                      alt={item?.card?.info?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default RestaurantMenu;
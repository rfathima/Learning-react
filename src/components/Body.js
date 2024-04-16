import React from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";

const styleCard = {
    backgroundColor: "#f0f0f0",
};

//Normal JS variable
// let listofRestaurantJS = [
//     {
//     type: "restaurant",
//     data: {
//         id: 1,
//         name: "Ambur Dum Biriyani",
//         cusine: ["Indian", "Biriyani", "Mughlai"],
//         avgRating: 3,
//         costForTwo: 4000,
//         deliveryTime: 30,
//         imageID: "goevzinldbotvpn3xid1"
//     }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 2,
//             name: "Hyderabad Biryaani House",
//             cusine: ["Indian", "Biriyani", "Mughlai", "South Indian"],
//             avgRating: 3.5,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "r87wnsjxzu9ysekmniju"
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 3,
//             name: "Coimbatore Biriyani",
//             cusine: ["Indian", "Biriyani", "Mughlai", "South Indian"],
//             avgRating: 3.8,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "gqnh3aia8bmmpjmcrdeg"
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 4,
//             name: "Kabab Magic",
//             cusine: ["Indian", "Biriyani", "Mughlai", "South Indian"],
//             avgRating: 2.8,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "kjilj6yf2fd4vnvqdx6n"
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 5,
//             name: "Wow China",
//             cusine: ["Indian", "Biriyani", "Mughlai", "South Indian"],
//             avgRating: 4.5,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "95982cfa57cb3b7e504f2015c375fd55"
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 6,
//             name: "Beemas",
//             cusine: ["Indian", "Biriyani", "Mughlai", "South Indian"],
//             avgRating: 4.5,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "aff0be3ebc62e299701c087b8dcd1c0d"
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 7,
//             name: "Coimbatore Biriyani",
//             cusine: ["Indian", "Rice", "Gravy", "South Indian"],
//             avgRating: 4.8,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "gqnh3aia8bmmpjmcrdeg"
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 2,
//             name: "KFC",
//             cusine: ["Indian", "Biriyani", "Mughlai", "South Indian"],
//             avgRating: 4.3,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "f01666ac73626461d7455d9c24005cd4"
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             id: 8,
//             name: "Barbeque Nation",
//             cusine: ["Indian", "Biriyani", "Mughlai", "South Indian"],
//             avgRating: 3.9,
//             costForTwo: 4000,
//             deliveryTime: 30,
//             imageID: "qzqeafcmayvxggjgj7rf"
//         }
//     }    
// ]

const Body = () => {
    //local state Variable - Super powerful variable
    const [listofRestaurant, setListofRestaurant] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listofRestaurant.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListofRestaurant(filteredList);
                }}
                >Filter Top Rating Restaurant</button>
            </div>
            <div className="res-container">
                {listofRestaurant.map((restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant} />
                )
                /* <RestaurantCard
                resData={resList[1]}
                /> */
                }
            </div>
        </div>
    );
};

export default Body;
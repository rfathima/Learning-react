import React, { useEffect } from "react";
import { render } from "react-dom"
import ReactDOM from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../../utils/mockData"; //right now am not using static json data
import Shimmer from "./Shimmer";
import { swiggy_api_URL } from "../../utils/constants";
import { happy_food_api_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
import "../css/Shimmer";
import "../css/Body";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";


// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => use effect called on initial render(just once)
  useEffect(() => {
    let initialpage = 1;
    getRestaurants(initialpage);
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants(currentPage) {
  // handle the error using try... catch   
    try {
    var response = "";
    var json = "";
     if (currentPage == 1) {
      console.log("swiggy api:");
      response = await fetch(happy_food_api_URL);  
     } else if (currentPage == 2) {
      console.log("happy food api:");
      response = await fetch(swiggy_api_URL);
     }
     json = await response.json();      

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);

      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      var filterByCategory = document.getElementsByClassName('filter');
      var searchContainer = document.getElementsByClassName('search-container');
      var paginationblock = document.getElementsByClassName('pagination');

      for (var i=0;i<paginationblock.length;i+=1){
        paginationblock[i].style.display = 'none';
      }

      for (var i=0;i<filterByCategory.length;i+=1){
        filterByCategory[i].style.display = 'flex';
      }

      for (var i=0;i<searchContainer.length;i+=1){
        searchContainer[i].style.display = 'none';
      }
      
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
        for (var i=0;i<filterByCategory.length;i+=1){
          filterByCategory[i].style.display = 'none';
        }
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  // const fetchComments = async () => {
  //   const res = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
  //   const data = await res.json();
  //   return data
  // }

  //Pagination click functionality
    const handlePageClick = (data) => {
      let currentPage = data.selected + 1;
      console.log("Current Page: "+currentPage);
      let filteredRestaurants = getRestaurants(currentPage);
      setAllRestaurants(filteredRestaurants);
      console.log(filteredRestaurants);
    }

  return (
    <>
    <div className="filter">
        <button className="filter-btn"
        onClick={() => {
            let filteredList = filteredRestaurants.filter(
                  (res) => res.info.avgRating > 4.5
            );
            
            //console.log(resData);
            if(filteredList.length === 0) {
              setErrorMessage("No matches restaurant found");
            }
            setFilteredRestaurants(filteredList);
        }}
        >Top Rated Restaurants</button>
        <button className="filter-btn"
        onClick={() => {
            let filteredListofkm = filteredRestaurants.filter(
                  (res) => res.info.sla.lastMileTravel < 4
            );
            
            //console.log(resData);
            if(filteredListofkm.length === 0) {
              setErrorMessage("No matches restaurant found");
            }
            setFilteredRestaurants(filteredListofkm);
        }}
        >Distance less than 4KM</button>
        <button className="filter-btn"
        onClick={() => {
            let DeliveryTimeLessThan30Minutes = filteredRestaurants.filter(
                  (res) => res.info.sla.deliveryTime < 30
            );
            
            console.log(DeliveryTimeLessThan30Minutes);
            if(DeliveryTimeLessThan30Minutes.length === 0) {
              setErrorMessage("No matches restaurant found");
            }
            setFilteredRestaurants(DeliveryTimeLessThan30Minutes);
        }}
        >DeliveryTimeLessThan30Minutes</button>
    </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}><RestaurantCard {...restaurant?.info} /></Link>
            );
          })}
        </div>
      )}
      {/* Pagination */}
      <ReactPaginate 
      previousLabel={'Previous'}
      nextLabel={'Next'}
      breakLabel={'...'}
      pageCount={2} //total count of the page
      marginPagesDisplayed={2} //last range of the pages
      pageRangeDisplayed={3}// click on ... dot it will show 3 , 3 pages
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousLinkClassName={'page-link'}
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      />
    </>
  );
};

export default Body;
import React, { useState, useEffect } from "react";
import Restro from "./Restro";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [restaurantLIST, setRestaurantLIST] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=22.71700&lng=75.83370"
      );

      const json = await response.json();

      // Safely check if success and cards exist in the data
      const cards = json?.data?.success?.cards;

      if (
        cards &&
        cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      ) {
        const restaurants = cards[3].gridWidget.gridElements.infoWithStyle.restaurants;
        setRestaurantLIST(restaurants);
        setFilteredRestro(restaurants); // Initialize filteredRestro with all restaurants
      } else {
        console.log("The expected data structure was not found.");
      }
    } catch (error) {
      console.log("Error fetching data: ", error.message);
    } finally {
      setLoading(false); // Hide shimmer UI once loading is done
    }
  };

  // Show ShimmerUI while loading
  if (loading) {
    return <ShimmerUI />;
  }

  // If no restaurants found, show a message
  if (restaurantLIST.length === 0) {
    return <div>No restaurants available</div>;
  }

  // Search Functionality
  const handleSearch = () => {
    const filtered = restaurantLIST.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestro(filtered); // Update the filteredRestro state
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search-compo">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={handleSearch} // Search button click triggers search
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = restaurantLIST.filter(
              (res) => res.info.avgRatingString > 4
            );
            setFilteredRestro(filteredList); // Update filteredRestro, not restaurantLIST
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestro.map((restaurant) => (
          <Restro key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import React, { useState, useEffect } from "react"; 
import Restro from "./Restro";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [restaurantLIST, setRestaurantLIST] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(true);  // State for loading
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

      //TODO: Safely check if success and cards exist in the data
      const cards = json?.data?.success?.cards;

      if (
        cards &&
        cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
      ) {
        setRestaurantLIST(
          cards[3].gridWidget.gridElements.infoWithStyle.restaurants
        );
        setFilteredList(cards[3].gridWidget.gridElements.infoWithStyle.restaurants)
      } else {
        console.log("The expected data structure was not found.");
      }
    } catch (error) {
      console.log("Error fetching data: ", error.message);
    }
   finally {
      setLoading(false);  // Hide shimmer UI once loading is done
    }
  };

  // TODO: Show ShimmerUI while loading
  if (loading) {
    return <ShimmerUI />;
  }

  // TODO: If no restaurants found, show a message
  if (restaurantLIST.length === 0) {
    return <div>No restaurants available</div>;
  }

  return (
    <div className="body">
      <div className="filter">
      <div className="search-compo">
        <input type="text" className="search-text" value={searchText} onChange={(e)=> {
        setSearchText(e.target.value);
      }}/>
      <button className="search-btn" onClick={() =>{
        let filteredList = restaurantLIST.filter(
          (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredList(filteredList);
      }} >Search</button>
      </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurantLIST.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantLIST(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Restro key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

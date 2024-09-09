import react, { useState } from "react";
import Restro from "./Restro";
import resList from "../config/swiggyData";

const Body = () => {
  const [restaurantLIST, setRestaurantLIST] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurantLIST.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantLIST(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantLIST.map((resturant) => (
          <Restro key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

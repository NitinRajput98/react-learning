import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  const [listOfRestaturants, setListOfRestaturants] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listOfRestaturants.filter(
              (rest) => rest.info.avgRating > 4
            );
            setListOfRestaturants(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaturants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

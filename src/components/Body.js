import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import HigherOrderComponent from "./HigherOrderComponent";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaturants, setListOfRestaturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  const NewlyOnboardedComponent = HigherOrderComponent(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaturants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!onlineStatus)
    return (
      <div>
        <h1>You are offline. Please connect to the internet!!!!!</h1>
      </div>
    );

  return listOfRestaturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="border-2 shadow-lg m-1">
      <div className="">
        <div className="m-2 justify-center flex">
          <input
            data-testid="searchBox"
            type="text"
            className="border w-80 rounded-md"
            placeholder="Enter text to search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="searchBtn"
            className="border-2 ml-2 hover:text-orange-600 rounded-lg w-24"
            onClick={() => {
              const filterList = listOfRestaturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filterList);
            }}
          >
            Search
          </button>
          <button
            data-testid="topRatedButton"
            className="border-2 mx-32 w-52 hover:text-orange-600 rounded-lg"
            onClick={() => {
              const filteredData = filteredRestaurants.filter(
                (rest) => rest.info.avgRating > 4
              );
              setFilteredRestaurants(filteredData);
            }}
          >
            Top Rated Restaurant
          </button>
          <input
            // type="text"
            data-testid="userNameInput"
            className="border w-80 rounded-md"
            placeholder="Enter text to search"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              className="m-4 hover:scale-90 min-h-80 w-72 hover:bg-[#f0f0f0] border-transparent rounded-md shadow-lg"
              to={`/restaurants/${restaurant.info.id}`}
              key={restaurant.info.id}
            >
              {restaurant.info.isNewlyOnboarded ? (
                <NewlyOnboardedComponent restData={restaurant} />
              ) : (
                <RestaurantCard restData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

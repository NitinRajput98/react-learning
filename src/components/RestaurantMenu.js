import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [filterButtonText, setFilterButtonText] = useState("Filter Veg");
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  let filteredData = resInfo
    ? resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    : "null";
  const filterData = () => {
    const result =
      resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.filter(
        (item) => item?.card?.info?.isVeg === 1
      );

    filteredData = result;
    setFilterButtonText("Reset Menu");
  };

  const resetMenu = () => {
    filteredData =
      resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards;
    setFilterButtonText("Filter Veg");
  };

  if (!resInfo) return <Shimmer />;
  //Destructuring Api data
  const {
    name,
    cuisines,
    areaName,
    feeDetails: { message },
    avgRating,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <div className="button-parent">
        <div className="veg-filter">
          <button
            onClick={filterButtonText === "Filter Veg" ? filterData : resetMenu}
          >
            {filterButtonText}
          </button>
        </div>
      </div>
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{areaName}</h3>
      <h2>{message}</h2>
      <h2>Rating: {avgRating}</h2>
      <ul>
        {filteredData?.map((item) => {
          const { id, name } = item?.card?.info;
          return (
            <li key={id}>
              {name} - ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

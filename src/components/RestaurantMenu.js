import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log("ResInfo Custom Hook", resInfo);
  const [filterButtonText, setFilterButtonText] = useState("Filter Veg");

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
    console.log("filteredData", filteredData);
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
    <div className="border-2 shadow-lg m-1">
      <div className="border-2 border-transparent m-3 flex justify-center">
        <button
          className="border-2 ml-2 hover:text-orange-600 rounded-lg w-24"
          onClick={filterButtonText === "Filter Veg" ? filterData : resetMenu}
        >
          {filterButtonText}
        </button>
      </div>
      <div className="border-2 m-3">
        <h1 className="font-bold">{name}</h1>
        <h2 className="text-[#7e808c]">{cuisines?.join(", ")}</h2>
        <h3 className="text-[#7e808c]">{areaName}</h3>
        <h2 className="text-[#7e808c]">{message}</h2>
        <h2 className="text-[#7e808c]">Rating: ✨{avgRating}</h2>
      </div>
      <div className="border-2 m-3">
        <ul>
          {filteredData?.map((item) => {
            const { id, name } = item?.card?.info;
            return (
              <li className="font-bold" key={id}>
                {name} - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

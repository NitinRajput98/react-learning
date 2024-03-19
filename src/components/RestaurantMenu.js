import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [filterButtonText, setFilterButtonText] = useState("Filter Veg");
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;
  //Destructuring Api data
  const {
    name,
    cuisines,
    areaName,
    feeDetails: { message },
    avgRating,
  } = resInfo?.data?.cards[0]?.card?.card?.info;

  const menuCategory =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (obj) =>
        obj.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="border-2 shadow-lg m-1" data-testid="resMenu">
      <div className="border-2 border-transparent m-3 flex justify-center">
        <button className="border-2 ml-2 hover:text-orange-600 rounded-lg w-24">
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
        {menuCategory.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            resCategory={category?.card?.card}
            showListItem={index === showIndex}
            setShowIndex={(index) => setShowIndex(index)}
            index={index}
            showIndex={showIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

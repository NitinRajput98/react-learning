import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };
  useEffect(() => {
    fetchMenu();
  }, []);
  if (!resInfo) return <Shimmer />;
  //Destructuring Api data
  const {
    name,
    cuisines,
    areaName,
    feeDetails: { message },
    avgRating,
  } = resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h3>{areaName}</h3>
      <h2>{message}</h2>
      <h2>Rating: {avgRating}</h2>
      <ul>
        {itemCards?.map((item) => {
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

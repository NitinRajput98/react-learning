import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  resCategory,
  showListItem,
  setShowIndex,
  index,
  showIndex,
}) => {
  const handleClick = (e) => {
    if (index === showIndex) setShowIndex(null);
    else setShowIndex(index);
  };
  return (
    <div className="w-6/12 m-auto ">
      <div
        className="flex justify-between my-4 border  shadow-lg h-10 cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold self-center">
          {resCategory?.title} ({resCategory?.itemCards?.length})
        </span>
        <span className="self-center hello">{showListItem ? "⬆️" : "⬇️"}</span>
      </div>

      {showListItem &&
        resCategory?.itemCards.map((item) => (
          <ItemList itemData={item.card.info} key={item.card.info.id} />
        ))}
    </div>
  );
};

export default RestaurantCategory;

import { Image_URL } from "../utils/constants";

const ItemList = ({ itemData }) => {
  return (
    <div className="border-b-2 bg-gray-200 my-2 shadow-md flex justify-between">
      <div className="w-9/12">
        <span className="block font-bold">{itemData?.name}</span>
        <span className="block font-bold">
          ₹
          {itemData.price
            ? itemData?.price / 100
            : itemData?.defaultPrice / 100}
        </span>
        <p className="text-xs">{itemData?.description}</p>
      </div>
      <div className="w-3/12">
        <div className="absolute mt-16 ml-2">
          <button className="border h-9 w-24 hover:shadow-2xl bg-white rounded-lg">
            Add +
          </button>
        </div>
        {itemData.imageId && (
          <img
            className="h-24 w-28 object-cover rounded-md"
            src={Image_URL + itemData.imageId}
          />
        )}
      </div>
    </div>
  );
};

export default ItemList;

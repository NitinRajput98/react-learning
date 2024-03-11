import { Image_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    restData: {
      info: {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        sla: { slaString },
      },
    },
  } = props;
  return (
    <div className="">
      <img
        className="w-80 h-40 p-1 rounded-md"
        src={Image_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-semibold">{name}</h3>
      <h4 className="font-medium">
        ✨{avgRating} stars • {slaString}
      </h4>
      <h4>{cuisines.join(", ")}</h4>

      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

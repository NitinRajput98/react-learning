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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={Image_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
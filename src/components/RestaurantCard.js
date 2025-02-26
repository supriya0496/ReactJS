import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
export const RestaurantCard = (props) => {
  const { resData } = props;
  // didnt understand 46
  const { name, cuisines, avgRating, costForTwo, sla } =
    resData?.card.card.info;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="res-logo"
        atl="res-logo"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
        // src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} minutes </h4>
    </div>
  );
};

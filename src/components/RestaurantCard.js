import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  // didnt understand 46
  const { name, cuisines, avgRating, costForTwo, sla } =
    resData?.card.card.info;
  return (
    <div className="p-4 m-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400">
      <img
        className="rounded-md"
        atl="res-logo"
        src={CDN_URL + resData.card.card.info.cloudinaryImageId}
        // src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      ></img>
      <h3 className="py-4 text-lg font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString} minutes </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-4 m-4 text-white bg-black rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

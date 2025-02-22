import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    const json = await data.json();
    const reqData = json.data.cards.filter((element) => {
      return element.card.card.hasOwnProperty("info");
    });

    // const finalData = reqData.map((input) => {
    //   return input.card.card.info;
    // });

    setListOfRestaurant(reqData);
  };

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => {
          console.log(restaurant);
          return (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;

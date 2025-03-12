import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants.js";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action using useDispatch
    dispatch(addItems(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between p-2 m-2 text-left border-b-2 border-gray-200"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 my-20 font-bold text-center text-green-600 bg-white rounded-md shadow-lg hover:cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-40 rounded-md"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

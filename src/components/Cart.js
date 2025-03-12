import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <div className="p-4 m-4 text-2xl font-bold">Cart</div>
      <button
        className="p-2 m-2 text-center text-white bg-black rounded-md"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h1>Your Cart is empty 🛒😔</h1>}
      <div className="w-6/12 p-4 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center self-center w-11/12">
      <h1>Cart Page</h1>
      <button className="border border-black" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="w-6/12 margin-auto">
        {cartItems.length > 0 &&
          cartItems.map((item) => (
            <ItemList key={item.id} itemData={item}>
              {item.name}
            </ItemList>
          ))}
      </div>
    </div>
  );
};

export default Cart;

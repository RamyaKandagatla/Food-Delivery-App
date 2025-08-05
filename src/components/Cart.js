import { useDispatch, useSelector } from "react-redux";
import ResList from "./ResList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-4">Cart</h2>

      {cartItems.length > 0 && (
        <div className="text-center mb-6">
          <button
            onClick={handleClearCart}
            className="bg-yellow-400 hover:bg-yellow-300 transition text-sm font-bold px-4 py-2 rounded-md"
          >
            Clear Cart
          </button>
        </div>
      )}

      <div className="w-full sm:w-8/12 md:w-6/12 m-auto">
        <ResList data={cartItems} cart />
      </div>

      {cartItems.length === 0 && (
        <h3 className="text-center mt-6 text-lg font-medium text-gray-700">
          Your cart is empty. Add items to get started!
        </h3>
      )}
    </div>
  );
};

export default Cart;

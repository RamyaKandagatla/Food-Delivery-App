import { useDispatch, useSelector } from "react-redux";
import ResList from "./ResList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
    <div className="p-4 font-bold text-2xl text-center m-auto">
       <div>Cart</div>
       <button className="p-2 m-2 bg-yellow-300 text-sm font-bold rounded-md"
        onClick={handleClearCart}>
        Clear Cart
       </button>
       <div className="w-6/12 m-auto font-normal text-sm">
        <ResList data={cartItems} cart/>
       </div>
       {cartItems.length === 0 && <h3 className="m-4 text-lg font-semibold">Cart is empty. Add items to the cart.</h3>}
    </div>
    )
}

export default Cart;
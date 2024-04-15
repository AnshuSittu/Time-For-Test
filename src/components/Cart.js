import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";
import Footer from "./Footer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const Dsipatch = useDispatch();

  const handleClearCart = () => {
    Dsipatch(clearCart());
  };

  return (
    <>
      <div className="text-center m-5 p-5">
        <h1 className="font-bold">Cart</h1>
        <div className="w-6/12 m-auto p-2 ">
          <button
            className="p-2 m-4 bg-black text-white rounded-md"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>

          {cartItems.length === 0 && (
            <h1 className="text-red-600 mt-6 text-2xl">
              Cart is Empty 🛒 Add Item to the Cart
            </h1>
          )}

          <ItemList items={cartItems} />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cart;

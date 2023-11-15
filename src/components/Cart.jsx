import React, { useContext } from "react";
import CartProduct from "./CartProduct";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { qty, setQty } = useContext(CartContext);
  return (
    <div
      className="absolute z-10 shadow-lg rounded-lg top-[250%] -left-[300%] min-h-[250px] w-[20vw] min-w-[300px] -translate-x-1/2 py-2 px-4 bg-white "
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="p-4 border-b  font-bold">Cart</h1>
      <div className="flex flex-col items-center justify-center">
        {qty == 0 ? (
          <p className="text-dark-grayish-blue font-bold text-center mt-12">
            Your cart is empty!
          </p>
        ) : (
          <CartProduct />
        )}
      </div>
      {qty != 0 && (
        <button className="bg-orange-accent hover:bg-orange-300 w-full py-4 rounded-lg text-white font-bold">
          Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;

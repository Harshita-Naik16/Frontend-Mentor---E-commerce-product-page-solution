import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartProduct = () => {
  const { qty, setQty } = useContext(CartContext);
  return (
    <div className="grid grid-cols-10 w-full gap-1 justify-around items-center py-4 my-2 ">
      <div className="col-span-2">
        <img
          src="images/image-product-1.jpg"
          alt="shoes"
          className="rounded-lg"
        />
      </div>
      <div className="col-span-7 place-content-center pl-4">
        <h3>Fall Limited Edition Sneakers</h3>
        <div>
          <span className="text-grayish-blue">$125.00 x</span>
          <span className="text-grayish-blue">{qty}</span>
          <span className="text-dark-grayish-blue pl-2 font-semibold">
            ${125 * qty}.00
          </span>
        </div>
      </div>
      <div className="col-span-1 w-4 cursor-pointer" onClick={() => setQty(0)}>
        <img src="images/icon-delete.svg" alt="delete icon" />
      </div>
    </div>
  );
};
export default CartProduct;

import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { qty, setQty } = useContext(CartContext);

  return (
    <div className="flex-1 py-16 px-8">
      <h2 className="text-orange-accent font-bold uppercase tracking-widest text-base">
        Sneaker Company
      </h2>
      <h1 className="font-bold text-very-dark-blue text-3xl lg:text-6xl my-4 leading-[1.2]">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-dark-grayish-blue my-8 w-[100%] lg:w-[90%] leading-[1.6]">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      {/* Price container */}
      <div className="flex flex-col">
        <div className="flex items-center my-2">
          <span className="text-very-dark-blue font-bold text-3xl mr-2  tracking-[1px]">
            $125.00
          </span>
          <span className="py-1 px-3 font-bold bg-pale-orange text-orange-accent rounded-md">
            50%
          </span>
        </div>
        <span className="text-grayish-blue line-through">$250.00</span>
      </div>

      <div className="grid lg:grid-cols-3 my-8 gap-4 grid-cols-1">
        {/* Item count */}
        <div className="bg-light-grayish-blue flex justify-between rounded-lg p-4 w-full col-span-full lg:col-span-1">
          <button disabled={qty == 0 && true} onClick={() => setQty(qty - 1)}>
            <img src="images/icon-minus.svg" alt="remove" />
          </button>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="bg-transparent w-16 text-center"
          />
          <button onClick={() => setQty(qty + 1)}>
            <img src="images/icon-plus.svg" alt="remove" />
          </button>
        </div>

        {/* Add to cart */}
        <button
          className="shadow-2xl shadow-orange-accent/95 lg:col-span-2 rounded-lg flex gap-4 justify-center items-center bg-orange-accent hover:bg-orange-300 text-white col-span-full"
          onClick={() => setQty(qty + 1)}
        >
          <svg
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 text-white"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
          <span className="font-bold py-4">Add to cart</span>
        </button>
      </div>
    </div>
  );
};
// className="w-6 text-white"
export default ProductDetails;

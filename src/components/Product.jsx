import React from "react";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

const Product = () => {
  return (
    <div className="container mx-auto flex lg:flex-row flex-col xl:p-16 lg:gap-8 xl:gap-24 items-center">
      {/* Product Image */}
      <ProductImage />

      {/*Product Details */}
      <ProductDetails />
    </div>
  );
};

export default Product;

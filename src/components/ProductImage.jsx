import React, { useState } from "react";
import ProductMainImage from "./ProductMainImage";
import GridImage from "./GridImage";
import Modal from "./Modal";

const images = [
  { id: 1, img: "images/image-product-1.jpg" },
  { id: 2, img: "images/image-product-2.jpg" },
  { id: 3, img: "images/image-product-3.jpg" },
  { id: 4, img: "images/image-product-4.jpg" },
];

const ProductImage = () => {
  const [current, setCurrent] = useState(0);
  const [isModal, setIsModal] = useState(false);

  document.body.style.overflow = isModal ? "hidden" : "auto";
  document.documentElement.scrollTop = isModal && 0;

  return (
    <div
      className={`flex-1 flex flex-col justify-center items-center ${
        isModal && "w-[500px]"
      }`}
    >
      {/* Main image */}
      <ProductMainImage
        current={!isModal ? current : 0}
        setCurrent={setCurrent}
        images={images}
        setIsModal={setIsModal}
        isModal={isModal}
      />
      {isModal && (
        <Modal
          current={current}
          setCurrent={setCurrent}
          images={images}
          ProductMainImage={ProductMainImage}
          GridImage={GridImage}
          setIsModal={setIsModal}
          isModal={isModal}
        />
      )}
      {/* Other images */}
      <GridImage
        current={!isModal ? current : 0}
        setCurrent={setCurrent}
        images={images}
      />
    </div>
  );
};

export default ProductImage;

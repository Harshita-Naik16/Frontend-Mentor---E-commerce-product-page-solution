import React from "react";

const Modal = ({
  current,
  setCurrent,
  images,
  ProductMainImage,
  GridImage,
  setIsModal,
  isModal,
}) => {
  return (
    <div className="w-screen h-screen inset-0 absolute bg-opaque-black flex justify-center items-center">
      <div className="w-[35%]">
        <div className=" my-4 flex justify-end">
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 transition-all duration-300 ease-in-out cursor-pointer text-white hover:text-orange-accent"
            viewBox="0 0 14 15"
            fill="currentColor"
            onClick={() => setIsModal(false)}
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </div>
        <ProductMainImage
          current={current}
          setCurrent={setCurrent}
          images={images}
          isModal={isModal}
        />
        <GridImage current={current} setCurrent={setCurrent} images={images} />
      </div>
    </div>
  );
};

export default Modal;

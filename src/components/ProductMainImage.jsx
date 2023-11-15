import React from "react";

const ProductMainImage = ({
  current,
  setCurrent,
  images,
  isModal,
  setIsModal,
}) => {
  const handleNext = () => {
    if (current >= images.length - 1) {
      setCurrent(0);
      return;
    }
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (current == 0) {
      setCurrent(images.length - 1);
      return;
    }
    setCurrent((prev) => prev - 1);
  };
  return (
    <div className="w-[80%] relative">
      <img
        src={images[current].img}
        alt="product image"
        className="md:rounded-xl"
        onClick={() => setIsModal(true)}
      />

      {/* left and right controllers */}
      <div className={`${isModal ? "block" : "lg:hidden"} absolute inset-0`}>
        <div
          className={`${
            isModal ? "-left-4" : "left-2"
          } w-12 group bg-white p-4 rounded-full absolute top-1/2  flex justify-center items-center cursor-pointer -translate-y-1/2`}
          onClick={() => handlePrev()}
        >
          <svg
            width="12"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[80%]"
          >
            <path
              d="M11 1 3 9l8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              className="text-black group-hover:text-orange-accent transition-all duration-300 ease-in-out"
            />
          </svg>
        </div>
        <div
          className={`${
            isModal ? "-right-4" : "right-2"
          } w-12 group bg-white p-4 rounded-full absolute top-1/2 flex justify-center items-center cursor-pointer -translate-y-1/2 `}
          onClick={() => handleNext()}
        >
          <svg
            width="13"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[80%]"
          >
            <path
              d="m2 1 8 8-8 8"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
              className="group-hover:text-orange-accent text-black transition-all duration-300 ease-in-out"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductMainImage;

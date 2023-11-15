import React from "react";

const GridImage = ({ current, setCurrent, images }) => {
  return (
    <div className="hidden lg:flex my-8 gap-4 justify-around w-[80%] mx-auto">
      {images.map((image, index) => {
        return (
          <div
            className={`rounded-xl w-32 cursor-pointer ${
              current == index && "border-2 border-orange-accent"
            }`}
            key={index}
            onClick={() => setCurrent(index)}
          >
            <img
              src={image.img}
              alt="product image"
              className={`rounded-xl  ${
                current == index && "border-2 border-orange-accent opacity-30"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GridImage;

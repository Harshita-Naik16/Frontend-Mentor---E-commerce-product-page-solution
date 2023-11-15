import React from "react";
import { navLinks } from "./Navbar";

const MobileNav = ({ setIsMenu }) => {
  return (
    <div
      className="absolute inset-0 bg-opaque-black z-30"
      onClick={() => setIsMenu(false)}
    >
      <div
        className="flex flex-col items-start h-screen absolute top-0 left-0 w-1/2 py-8 pl-4 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => setIsMenu(false)}>
          <svg
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="text-dark-grayish-blue"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <ul className="flex flex-col mt-4">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="mr-6 font-bold text-very-dark-blue hover:text-very-dark-blue py-2  cursor-pointer relative group"
              >
                <a href="/">{link}</a>
                <div className="invisible group-hover:visible transition duration-100 delay-100 ease-in-out bg-orange-accent w-full h-1 absolute bottom-0 left-0"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;

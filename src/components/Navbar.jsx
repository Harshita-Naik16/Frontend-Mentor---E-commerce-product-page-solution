import React, { useContext, useState } from "react";
import Cart from "./cart";
import { CartContext } from "../context/CartContext";
import MobileNav from "./MobileNav";

export const navLinks = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const [isCart, setIsCart] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  document.body.style.overflow = isMenu ? "hidden" : "auto";

  const cart = useContext(CartContext);
  return (
    <header className="container py-4 px-4 lg:px-0 lg:p-0 mx-auto lg:mb-8 flex justify-between items-center  border-b border-greyish-blue">
      {/* left of nav */}
      <div className="flex justify-between items-center">
        {/* menu icon */}
        <div
          className="block lg:hidden mr-4 cursor-pointer"
          onClick={() => setIsMenu(true)}
        >
          <img src="images/icon-menu.svg" alt="menu" />
        </div>

        <nav className="flex justify-between items-center">
          {/* logo */}
          <a href="/" className="lg:w-48 w-32 h-5 lg:h-auto">
            <img src="images/logo.svg" alt="sneakers logo" />
          </a>

          {/* Nav links */}
          <ul className="hidden justify-between items-center mx-16 lg:flex">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="mx-6 text-dark-grayish-blue hover:text-very-dark-blue py-8  cursor-pointer relative group"
                >
                  <a href="/">{link}</a>
                  <div className="invisible group-hover:visible transition duration-100 delay-100 ease-in-out bg-orange-accent w-full h-1 absolute bottom-0 left-0"></div>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {isMenu && <MobileNav setIsMenu={setIsMenu} />}
      {/* right of nav */}
      <div className="flex justify-between items-center">
        {/* cart */}
        <div
          className="lg:mx-12 mx-6 relative"
          onClick={(e) => setIsCart((prev) => !prev)}
        >
          <span className="text-white bg-orange-accent px-1 text-xs absolute -top-2 -right-2 rounded-full">
            {cart.qty}
          </span>
          <img
            src="images/icon-cart.svg"
            alt="cart"
            className="cursor-pointer"
          />
          {isCart && <Cart />}
        </div>

        {/* profile */}
        <div className="lg:w-16 w-8 cursor-pointer">
          <img
            src="images/image-avatar.png"
            alt="profile image"
            className="ring-2 ring-transparent hover:ring-orange-accent rounded-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

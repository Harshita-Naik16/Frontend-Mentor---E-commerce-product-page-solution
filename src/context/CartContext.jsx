import { createContext, useState } from "react";

export const CartContext = createContext({});

const ContextProvider = ({ children }) => {
  const [qty, setQty] = useState(0);
  return (
    <CartContext.Provider value={{ qty, setQty }}>
      {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;

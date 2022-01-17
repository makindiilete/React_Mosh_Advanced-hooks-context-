import React, { useContext } from "react";
const CartContext = React.createContext();
//ds will be use to identify ds particular context in the app because we can have many of them
CartContext.displayName = "CartContext";
export default CartContext;

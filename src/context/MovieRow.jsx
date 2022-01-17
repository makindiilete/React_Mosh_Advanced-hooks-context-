import React, { useContext } from "react";
import UserContext from "./userContext";
import CartContext from "./cartContext";

const MovieRow = () => {
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  console.log("User = ", userContext);
  console.log("Cart = ", cartContext);
  return (
    <div>
      Movie Row : {userContext.currentUser ? userContext.currentUser.name : ""}
    </div>
  );
};

export default MovieRow;

import React from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  const pokemonItems = useSelector((store) => store.pokemonItem.items);

  return <div className="cart"></div>;
};

export default Cart;

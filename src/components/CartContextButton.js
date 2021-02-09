import React from "react";
import { useCartContext } from "./CartContext";

const CountButton = () => {
  const { add, sub } = useCartContext();

  return (
    <>
      <button onClick={add}> Sumar </button>
      <button onClick={sub}> Restar </button>
    </>
  );
};

export default CountButton;
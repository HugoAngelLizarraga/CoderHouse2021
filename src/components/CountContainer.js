import React, { useState } from "react";
import Count from "../components/Count";

const CountCountainer = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const add = () => {
    if (count > stock) {
      alert("Superaste el stock");
    } else {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count > 0) setCount(count - 1);
    else alert("Tenes que agregar al menos un item");
  };

  const onAdd = () => {
    alert(`Agregaste ${count} al carrito`);
  };

  return (
    <>
      <Count min={sub} max={add} onAdd={onAdd} count={count} />
    </>
  );
};

export default CountCountainer;

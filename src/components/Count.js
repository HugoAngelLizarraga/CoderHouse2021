import React from "react";
import CartWidget from './CartWidget';
const Count = ({ min, max, onAdd, count }) => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center" }}>
       <button onClick={min}> - </button>
        <p>{count}</p>
        <button onClick={max}> + </button>
             
      <button disabled={count === 0} onClick={onAdd}>
        {" "}Agregar al carrito <CartWidget/>{" "}
      </button>
       
      </div>

    </React.Fragment>
  );
};

export default Count;
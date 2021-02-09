import React from "react";
import CartWidget from './CartWidget';
 

const Count = ({ min, max, onAdd, count }) => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
       <button onClick={min}> - </button>
        <p>{count}</p>
        <button onClick={max}> + </button>
             
      <button disabled={count === 0} onClick={onAdd}>
        {" "}Agregar al carrito <CartWidget/> {count} {" "} 
      </button>
      
      </div>

    </>
  );
};

export default Count;
import React, { useState } from "react";
// import Count from "../components/Count";
 

import { Link } from "react-router-dom";

const CountContainer = ({ initial = 0, stock }) => {
  const [count, setCount] = useState(initial);
  const [msj, setMsj] = useState(false);
  const [buttons, setButtons] = useState(false);

  const add = () => {
    if (count >= stock) {
      alert("Superaste el stock");
    } else {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count > 0) setCount(count - 1);
    else alert("Tenes que agregar al menos un item");
  };

  const handlerAlert = () => {
    return (
      <div
        className="alert alert-dismissible alert-light"
        style={{
          alingtItems: "center",
          padding: 10,
          width: 250
        }}
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          onClick={onAdd}
        >
          &times;
        </button>
        <strong>Increible!!</strong>{" "}
        <Link to="/cart" className="alert-link">
          Agregaste {count} al carrito!
        </Link>{" "}
        <br />
        Sigue así :D:
      </div>
    );
  };
  const onAdd = () => {
    setMsj(!msj);
    setButtons(!buttons);
  };

  return (
    <>
      <div
        className="jumbotron"
        style={{
          alingtItems: "center",
          display: "flex",
          padding: 10,
          width: 250,
          height: 75
        }}
      >
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-success"
            onClick={add}
            disabled={buttons}
          >
            +
          </button>
          <button type="button" class="btn btn-outline-primary">
            {count}
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={sub}
            disabled={buttons}
          >
            -
          </button>
        </div>
        <br />
        <button
          className="btn btn-warning"
          disabled={count === 0 || buttons}
          onClick={onAdd}
          style={{ marginLeft: 15 }}
        >
          {" "}
          Agregar {count}{" "}
        </button>
      </div>
      {msj && handlerAlert()}
    </>
  );
};

export default CountContainer;
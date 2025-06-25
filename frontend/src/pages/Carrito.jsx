import { useState } from "react";

function Carrito({ carrito }) {
  const total = carrito.reduce((acumulador, producto) => {
    return acumulador + producto.price;
  }, 0);

  return (
    <div className="container">
      <h4 className="text-center">Compra:</h4>
      {carrito.map((item) => (
        <div className="row border p-1" key={item.id}>
          <div className="col-11">
            <span>{item.name}</span>
          </div>
          <div className="col-1 border-start">
            <span>${item.price}</span>
          </div>
        </div>
      ))}
      <div className="row border p-1">
        <div className="col-11">
          <span>Total:</span>
        </div>
        <div className="col-1 border-start">
          <span>${total}</span>
        </div>
      </div>
      <div className="">
        {carrito.length > 0 ? (
          <div className="row">
            <span
              className="btn btn-lg bg-primary text-light text-center mt-3"
              onClick={() => alert("Compra Realizada!")}
            >
              Realizar Compra
            </span>
            <span
              className="btn btn-lg bg-danger text-light text-center mt-1"
              onClick={() => alert("Compra Cancelada")}
            >
              Cancelar Compra
            </span>
          </div>
        ) : (
          <p className="p text-center bg-danger text-light mt-3">
            El carrito esta vacio
          </p>
        )}
      </div>
    </div>
  );
}

export default Carrito;

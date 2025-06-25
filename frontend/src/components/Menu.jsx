import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="col-2 bg-dark border-start d-flex flex-column p-2 text-center">
      <Link to={"/"}>
        <h4 className="text-light my-3">ProductApp</h4>
      </Link>
      <ul className="nav flex-column ">
        <li className="nav-item mb-3">
          <Link className="nav-link active text-light" to={"/login"}>
            Ingresar
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link className="nav-link text-light" to={"/carrito"}>
            Carrito
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Opción 3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

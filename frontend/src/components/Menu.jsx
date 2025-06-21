import React from "react";

function Menu() {
  return (
    <div className="col-2 bg-dark border-start d-flex flex-column p-2 text-center">
      <h4 className="text-light my-3">ProductApp</h4>
      <ul className="nav flex-column ">
        <li className="nav-item mb-3">
          <a className="nav-link active text-light" href="#">
            Ingresar
          </a>
        </li>
        <li className="nav-item mb-3">
          <a className="nav-link text-light" href="#">
            Opción 2
          </a>
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

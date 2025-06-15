import React, { useState } from "react";
import "../css/login.css";
function Login({ data, cambio }) {
  return (
    <>
      <div className="login">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h2>Ingrese Su Usuario</h2>

          <label htmlFor="dni">Ingrese su dni: </label>
          <input
            type="text"
            className="input-group"
            id="dni"
            onChange={(e) => setData({ ...data, dni: e.target.value })}
            value={data.dni}
          />

          <label htmlFor="password">Ingrese su contraseña: </label>
          <input
            type="text"
            className="input-group"
            id="password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
          />
          <input
            type="button"
            value="Enviar"
            className="btn btn-lg btn-danger"
            onClick={cambio}
          />
        </div>
      </div>
    </>
  );
}

export default Login;

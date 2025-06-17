import React, { useState } from "react";
import "../css/login.css";
function Login({ cambioData, cambio, data }) {
  return (
    <>
      <div className="login">
        <div className="flex-colum">
          <h2>Ingrese Su Usuario</h2>

          <label htmlFor="dni">Ingrese su dni: </label>
          <input
            type="text"
            className="input-group"
            id="dni"
            onChange={(e) => cambioData({ ...data, dni: e.target.value })}
            value={data.dni}
          />

          <label htmlFor="password">Ingrese su contraseña: </label>
          <input
            type="text"
            className="input-group"
            id="password"
            onChange={(e) => cambioData({ ...data, password: e.target.value })}
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

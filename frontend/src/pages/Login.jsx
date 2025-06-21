import React, { useState } from "react";
import "../css/login.css";
import { loginAuth } from "../helpers/loginConnection";

function Login({ logeado, guardarDatos }) {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    e.preventDefault();
    const datos = {
      dni: dni,
      password: password,
    };
    const resp = await loginAuth(datos);
    if (resp?.token) {
      localStorage.setItem("token", resp.token);
      guardarDatos(resp.usuario);
      logeado();
    } else {
      return { msg: "Error en el login" };
    }
  };

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
            onChange={(e) => setDni(e.target.value)}
            value={dni}
          />

          <label htmlFor="password">Ingrese su contraseña: </label>
          <input
            type="text"
            className="input-group"
            id="password"
            onChange={(e) => cambioPassword(e.target.value)}
            value={password}
          />
          <input
            type="button"
            value="Enviar"
            className="btn btn-lg btn-danger"
            onClick={handleLogin}
          />
        </div>
      </div>
    </>
  );
}

export default Login;

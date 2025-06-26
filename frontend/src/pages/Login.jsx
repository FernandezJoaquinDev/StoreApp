import React, { useState } from "react";
import "../css/login.css";
import { loginAuth } from "../helpers/loginConnection";

function Login({ logeado, guardarDatos }) {
  const [datosPrueba, setDatosPrueba] = useState({
    dni: 0,
    password: 0,
  });
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const datos = {
      dni: dni,
      password: password,
    };
    const resp = await loginAuth(datos);
    if (resp?.token) {
      console.log(resp);
      localStorage.setItem("token", resp.token);
      guardarDatos(resp.usuario);
      logeado();
      alert(resp.msg);
    } else {
      return { msg: "Error en el login" };
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="login">
          <div className="border flex-column container">
            <div className="row">
              <div className="text-center">
                <h2>Ingrese Su Usuario</h2>
              </div>
            </div>
            <div className="row">
              <label htmlFor="dni">Ingrese su dni: </label>
              <input
                type="number"
                className="input-group text-center"
                id="dni"
                onChange={(e) => setDni(e.target.value)}
                value={dni}
              />
            </div>
            <div className="row">
              <label htmlFor="password">Ingrese su contraseña: </label>
              <input
                type="number"
                className="input-group text-center"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="row mt-3">
              <input
                type="button"
                value="Enviar"
                className="btn btn-primary"
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

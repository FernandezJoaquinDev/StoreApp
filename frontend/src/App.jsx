import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState({
    dni: "",
    password: "",
  });
  const [modal, setModal] = useState(false);
  const [loged, setLoged] = useState(false);

  const cambio = () => {
    setLoged(!loged);
  };

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-10 p-4">
            <Routes>
              <Route path="/" />
              <Route path="/login" element={<Login />} />
            </Routes>
            <h1>Esto es la pagina principal</h1>
          </div>

          <div className="col-2 bg-dark border-start d-flex flex-column p-2 text-center">
            <h4 className="text-light my-3">ProductApp</h4>
            <ul className="nav flex-column ">
              <li className="nav-item mb-3">
                <a
                  className="nav-link active text-light"
                  href="#"
                  onClick={cambio}
                >
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
        </div>
      </div>
    </>
  );
}

export default App;

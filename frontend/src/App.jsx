import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Error404 from "./pages/Error404";

function App() {
  const [data, setData] = useState(null);
  const [loged, setLoged] = useState(false);

  const logeado = () => {
    setLoged(true);
  };

  guardarDatos = (datos) => {
    setData(datos);
  };

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-10 p-4">
            <BrowserRouter>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route
                  path="/login"
                  element={
                    <Login guardarDatos={guardarDatos} logeado={logeado} />
                  }
                />
                <Route path="*" element={<Error404 />} />
                {/* <RutasProtegidas loged={loged}>
                  
                </RutasProtegidas> */}
              </Routes>
            </BrowserRouter>

            <h1>Esto es la pagina principal</h1>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;

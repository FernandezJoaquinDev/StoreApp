import { useEffect, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Error404 from "./pages/Error404";
import traerProductos from "./helpers/productUtilities";
import Carrito from "./pages/carrito";

function App() {
  const [data, setData] = useState(null);
  const [loged, setLoged] = useState(false);
  const [listaProductos, setListaProductos] = useState([]);
  const logeado = () => {
    setLoged(true);
    console.log(data);
  };

  const [carrito, setCarrito] = useState([]);

  const handleCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    console.log("carrito", carrito);
  };

  const traerProductos = async () => {
    const url = "http://localhost:5000/api/products";
    const resp = await fetch(url);
    const { productos } = await resp.json();
    setListaProductos(productos);
  };

  const guardarDatos = (datos) => {
    setData(datos);
  };

  useEffect(() => {
    traerProductos();
  }, [listaProductos]);

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <div className="col-10 p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    listaProductos={listaProductos}
                    handleCarrito={handleCarrito}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <Login guardarDatos={guardarDatos} logeado={logeado} />
                }
              />
              <Route path="/carrito" element={<Carrito carrito={carrito} />} />
              <Route path="*" element={<Error404 />} />
              {/* <RutasProtegidas loged={loged}>
                  
                </RutasProtegidas> */}
            </Routes>
          </div>
          <Menu />
        </div>
      </div>
    </>
  );
}

export default App;

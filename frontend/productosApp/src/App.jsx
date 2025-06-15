import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

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
      {loged ? <NavBar /> : ""}
      {loged ? "" : <Login data={data} cambio={cambio} />}
    </>
  );
}

export default App;

const url = "http://localhost:5000/api/products";
const traerProductos = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log("hola");
  return data;
};

export default traerProductos;

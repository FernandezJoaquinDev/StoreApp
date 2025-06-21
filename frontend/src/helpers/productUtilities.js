const url = "";
const traerProductos = async () => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export default traerProductos;

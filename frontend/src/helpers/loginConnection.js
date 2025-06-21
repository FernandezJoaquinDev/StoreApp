url = "localhost:algo";

export const loginAuth = async (datos) => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: { "content-type": "application/json charset=UTF-8" },
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
    return { msg: "Problemas de conexion" };
  }
};

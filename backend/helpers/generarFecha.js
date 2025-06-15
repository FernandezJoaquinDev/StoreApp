const generarFechaActual = () => {
  const fechaActual = new Date();

  const dia = String(fechaActual.getDate()).padStart(2, "0");
  const mes = String(fechaActual.getMonth() + 1).padStart(2, "0");
  const año = fechaActual.getFullYear();
  const horas = String(fechaActual.getHours()).padStart(2, "0");
  const minutos = String(fechaActual.getMinutes()).padStart(2, "0");

  const fechaFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}`;
  return fechaFormateada;
};

module.exports = generarFechaActual;

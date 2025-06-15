const { request, response } = require("express");
const jwt = require("jsonwebtoken");
const Empleado = require("../models/Empleado");

const validateToken = async (req = request, res = response, next) => {
  const token = req.header("auth");

  if (!token) {
    return res.status(401).json({ msg: "No tiene el token de acceso" });
  }
  try {
    const { uid } = jwt.verify(token, process.env.KEY_TOKEN);

    const empleado = await Empleado.findById(uid);

    if (!empleado) {
      return res.status(401).json({ msg: "Empleado inexistente" });
    }
    if (!empleado.state) {
      return res.status(401).json({ msg: "Empleado inhabilitado" });
    }
    req.empleado = empleado;
    next();
  } catch (error) {
    console.log("error:", error);
    res.status(401).json({ msg: "Error en la validacion" });
  }
};

module.exports = validateToken;

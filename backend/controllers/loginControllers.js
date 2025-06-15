const { request, response } = require("express");
const Empleado = require("../models/Empleado");
const bcrypt = require("bcrypt");
const generateToken = require("../helpers/generatejwt");

const handleLogin = async (req = require, res = response) => {
  try {
    const { dni, password } = req.body;
    const empleadoExists = await Empleado.findOne({ dni });
    if (!empleadoExists) {
      return res.status(401).json({ msg: "No se encontro el usuario" });
    }
    const passVerified = bcrypt.compareSync(password, empleadoExists.password);
    if (!passVerified) {
      return res.status(401).json({ msg: "No se encontro el usuario" });
    }
    if (!empleadoExists.state) {
      return res.status(401).json({ msg: "El usuario esta inhabilitado" });
    }

    const token = await generateToken(empleadoExists.id);

    res.status(200).json({ msg: "Acceso exitoso", token });
  } catch (error) {
    console.log("error:", error);
    res.status(401).json({ msg: "Error en el sistema de autenticacion" });
  }
};

module.exports = handleLogin;

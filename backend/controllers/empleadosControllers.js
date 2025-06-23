const { request, response } = require("express");
const bcrypt = require("bcrypt");
const Empleado = require("../models/Empleado");

const createEmpleado = async (req = request, res = response) => {
  const { password, dni, ...resto } = req.body;
  try {
    const dniAlreadyExist = await Empleado.findOne({ dni });
    if (dniAlreadyExist) {
      return res
        .status(400)
        .json({ msg: "El dni ya esta registrado en el sistema" });
    }
    const salt = 10;
    const hash = await bcrypt.hash(`${password}`, salt);
    const newEmp = new Empleado({ ...resto, password: hash, dni });
    await newEmp.save();

    res.json({ msg: "El empleado fue creado con exito" });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Error en la carga" });
  }
};

const updateEmpleado = async (req = request, res = response) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const empleado = await Empleado.findById(id);
    if (!empleado) {
      return res.status(401).json({ msg: "No se encontro al empleado" });
    }
    const salt = 10;
    const hash1 = await bcrypt.hash(password, salt);

    await Empleado.findByIdAndUpdate(id, { password: hash1 });
    res.status(200).json({ msg: "La contraseña fue actualizada" });
  } catch (error) {
    console.log("error:", error);
    res.json({ msg: "Error al modificar datos" });
  }
};

const deleteEmpleado = async (req = request, res = response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const empleadoFind = await Empleado.findById(id);
    console.log(empleadoFind);
    if (!empleadoFind) {
      return res.status(401).json({ msg: "No se encontro al empleado" });
    }
    await Empleado.findByIdAndUpdate(id, { state: false });
    res.json({ msg: `${empleadoFind.name} fue inhabilidato` });
  } catch (error) {
    res.status(401).json({ msg: "Error al inhabilitar usuario", error });
  }
};

module.exports = { createEmpleado, updateEmpleado, deleteEmpleado };

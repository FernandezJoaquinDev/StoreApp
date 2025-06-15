const { request, response } = require("express");
const Empleado = require("../models/Empleado");
const Producto = require("../models/Producto");
const FormasDePago = require("../models/FormasDePago");
const Venta = require("../models/Venta");
const generarFechaActual = require("../helpers/generarFecha");

const generarVenta = async (req = request, res = response) => {
  const { vendedor, producto, formaDePago } = req.body;
  try {
    const existeVendedor = await Empleado.findById(vendedor);
    if (!existeVendedor) {
      return res.status(400).json({ msg: "No se encontro al vendedor" });
    }
    const existeProducto = await Producto.findById(producto);
    if (!existeProducto) {
      return res.status(400).json({ msg: "No se encontro el producto" });
    }
    const existeFormaDePago = await FormasDePago.findOne({
      nombre: formaDePago,
    });

    if (!existeFormaDePago) {
      return res.status(400).json({ msg: "No se encontro la forma de pago" });
    }
    const venta = new Venta({
      vendedor,
      producto,
      formaDePago,
      fecha: generarFechaActual(),
    });
    if (venta) {
      await venta.save();
      await Producto.findByIdAndUpdate(producto, {
        stock: existeProducto.stock - 1,
      });
      res.status(200).json({
        msg: `${existeProducto.name} vendido exitosamente por ${existeVendedor.name}`,
      });
    } else {
      res.status(400).json({ msg: "Error en generar la venta" });
    }
  } catch (error) {
    res.json({ msg: "Se produjo un error", error });
  }
};

const obtenerVentas = async (req = request, res = response) => {
  console.log("aqui si entra");
  try {
    console.log("aqui NO entra");
    const ventas = await Venta.find()
      .populate("producto", "name -_id")
      .populate("vendedor", "name -_id");
    console.log(ventas);
    res.status(200).json({ ventas });
  } catch (error) {
    res.status(400).json({ msg: "Error al obtener las ventas", error });
    console.log(error);
  }
};

const ventasPorEmpleado = async (req = request, res = response) => {
  try {
    const { vendedor } = req.params;
    const empleado = await Empleado.findById(vendedor);
    const ventasEmp = await Venta.find({ vendedor }).populate(
      "producto",
      "name price -_id"
    );
    res.status(200).json({ ventas: `${empleado.name}`, ventasEmp });
  } catch (error) {
    res
      .status(400)
      .json({ msg: `Error al obtener las ventas de: ${empleado.name}` });
  }
};

module.exports = { generarVenta, obtenerVentas, ventasPorEmpleado };

const Producto = require("../models/Producto");

const { request, response } = require("express");

const getProducts = async (req = request, res = response) => {
  const [total, productos] = await Promise.all([
    Producto.countDocuments(),
    Producto.find(),
  ]);
  res.json({ total, productos });
};

const postProducts = async (req = request, res = response) => {
  const { name, price, stock, state, ...resto } = req.body;
  try {
    const productSelected = await Producto.findOne({ name });
    // console.log("productSelected", productSelected);

    if (productSelected) {
      return res
        .status(401)
        .json({ msg: "El producto ya se encuentra en el sistema" });
    }
    const product = new Producto({ ...resto, name, price, stock, state });
    await product.save();
    res.json({ msg: "Producto cargado" });
  } catch (error) {
    console.log("error:", error);
    res.json({ msg: "el producto no pudo cargarse en el sistema" });
  }
};
const putProducts = async (req = request, res = response) => {
  const { price, stock, ...resto } = req.body;
  const { id } = req.params;
  try {
    const productedit = await Producto.findById(id);

    if (!productedit) {
      return res.json({ msg: "No se encontro el producto" });
    }

    if (price) {
      resto.price = price;
    }
    if (stock) {
      resto.stock = productedit.stock + stock;
    }

    await Producto.findByIdAndUpdate(id, resto);

    res.json({ msg: "el producto fue actualizado" });
  } catch (error) {
    console.log("error:", error);
  }
};
const deleteProducts = async (req, res) => {
  const { id } = req.params;
  const { name } = req.empleado;
  try {
    const productDel = await Producto.findById(id);
    if (!productDel) {
      return res.status(401).json({ msg: "No se encontro el producto" });
    }
    if ((productDel.state = false)) {
      return res.status(401).json({ msg: "El producto ya esta inhabilitado" });
    }

    await Producto.findByIdAndUpdate(id, { state: false });
    res.status(200).json({ msg: "El producto fue inhabilitado por: ", name });
  } catch (error) {
    console.log("error:", error);
    res.status(401).json({ msg: "Error del sistema" });
  }
};

module.exports = { getProducts, postProducts, putProducts, deleteProducts };

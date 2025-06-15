const mongoose = require("mongoose");

const VentaSchema = mongoose.Schema(
  {
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    vendedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Empleado",
      required: true,
    },
    formaDePago: {
      type: String,
      required: [true, "La forma de pago es necesaria"],
    },
    fecha: {
      type: String,
      required: [true, "La fecha es obligatoria"],
    },
  },
  {
    collection: "Ventas",
  }
);

VentaSchema.methods.toJSON = function () {
  const { __v, _id, ...venta } = this.toObject();
  return venta;
};

module.exports = mongoose.model("Venta", VentaSchema);

const mongoose = require("mongoose");

const FormasDePagoSchema = mongoose.Schema(
  {
    nombre: {
      type: String,
    },
  },
  { collection: "FormasDePagos" }
);

module.exports = mongoose.model("FormasDePago", FormasDePagoSchema);

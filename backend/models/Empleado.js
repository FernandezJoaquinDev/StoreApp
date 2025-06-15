const mongoose = require("mongoose");

const EmpleadoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  dni: {
    type: Number,
    required: [true, "El dni es obligatorio"],
    unique: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
});

EmpleadoSchema.methods.toJSON = function () {
  const { __v, _id, empleado } = this.toObject();
  return empleado;
};

module.exports = mongoose.model("Empleado", EmpleadoSchema);

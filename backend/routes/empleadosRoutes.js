const express = require("express");
const { check } = require("express-validator");
const { validateChecks } = require("../middlewares/validate-checks");
const {
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
} = require("../controllers/empleadosControllers");

const router = express.Router();

router.post(
  "/",
  [
    check("name", "El nombre no puede estar vacio").notEmpty(),
    check("password", "La contraseña no puede estar vacia").notEmpty(),
    check("password", "La contraseña debe tener 5 caracteres").isLength({
      min: 5,
      max: 5,
    }),
    check("dni", "El dni no puede estar vacio").notEmpty(),
    check("dni", "El dni debe ser un numero").isNumeric(),
    validateChecks,
  ],
  createEmpleado
);

// router.get("/", getEmpleado);

router.put(
  "/:id",
  [
    check("password", "Debe ingresar una contraseña").notEmpty(),
    check("password", "La contraseña debe tener 5 caracteres").isLength({
      min: 5,
      max: 5,
    }),
    validateChecks,
  ],
  updateEmpleado
);

router.delete(
  "/:id",
  [
    check("id", "El id no puede estar vacio").notEmpty(),
    check("id", "El formato del id es incorrecto").isMongoId(),
    validateChecks,
  ],
  deleteEmpleado
);

module.exports = router;

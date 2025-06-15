const express = require("express");
const {
  generarVenta,
  obtenerVentas,
  ventasPorEmpleado,
} = require("../controllers/ventasControllers");
const { check } = require("express-validator");
const { validateChecks } = require("../middlewares/validate-checks");

const router = express.Router();

router.post(
  "/",
  [
    check("producto", "Formato del id inconsistente").isMongoId(),
    check("vendedor", "Formato del id inconsistente").isMongoId(),
    validateChecks,
  ],
  generarVenta
);

router.get("/", [], obtenerVentas);

router.get(
  "/:vendedor",
  [
    check("vendedor", "Formato del id inconsistente").isMongoId(),
    validateChecks,
  ],
  ventasPorEmpleado
);
module.exports = router;

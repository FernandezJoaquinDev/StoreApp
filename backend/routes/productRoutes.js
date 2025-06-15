const express = require("express");
const {
  getProducts,
  postProducts,
  putProducts,
  deleteProducts,
} = require("../controllers/productsControllers");
const { check } = require("express-validator");
const { validateChecks } = require("../middlewares/validate-checks");
const validateToken = require("../middlewares/validate-token");

const router = express.Router();

router.get("/", [], getProducts);

router.post(
  "/",
  [
    validateToken,
    check("name", "El nombre no puede estar vacio").notEmpty(),
    check("price", "El precio no puede estar vacio").notEmpty(),
    check("stock", "El stock del producto debe ingresarse").notEmpty(),
    validateChecks,
  ],
  postProducts
);

router.put(
  "/:id",
  [
    validateToken,
    check("id", "Formato de id incorrecto").isMongoId(),
    check("stock", "El formato del stock es invalido").isNumeric(),
    check("price", "El formato del precio es invalido").isNumeric(),
    validateChecks,
  ],
  putProducts
);

router.delete(
  "/:id",
  [
    validateToken,
    check("id", "El id no es valido").isMongoId(),
    validateChecks,
  ],
  deleteProducts
);

module.exports = router;

const express = require("express");
const { check } = require("express-validator");
const handleLogin = require("../controllers/loginControllers");
const { validateChecks } = require("../middlewares/validate-checks");
const router = express.Router();

router.post(
  "/",
  [
    check("password", "La contraseña no puede estar vacia").notEmpty(),

    // check("password", "La contraseña debe tener 5 caracteres").isLength({
    //   min: 5,
    //   max: 5,
    // }),

    validateChecks,
  ],
  handleLogin
);

module.exports = router;

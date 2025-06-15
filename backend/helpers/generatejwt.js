const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { uid: id };
    jwt.sign(
      payload,
      process.env.KEY_TOKEN,
      { expiresIn: "4h" },
      (err, token) => {
        if (err) {
          console.log("error:", err);
          reject("Error al generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateToken;

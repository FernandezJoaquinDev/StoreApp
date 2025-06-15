const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.paths = {
      login: "/login",
      products: "/api/products",
      empleados: "/empleados",
      ventas: "/ventas",
    };
    this.connectDB();
    this.middlewares();
    this.routes();
  }
  async connectDB() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  }
  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes() {
    this.app.use(this.paths.products, require("../routes/productRoutes"));
    this.app.use(this.paths.login, require("../routes/loginRoutes"));
    this.app.use(this.paths.empleados, require("../routes/empleadosRoutes"));
    this.app.use(this.paths.ventas, require("../routes/ventasRoutes"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server runing in port: ${this.port} `);
    });
  }
}

module.exports = Server;

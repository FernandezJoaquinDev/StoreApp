const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre del producto es obligatorio"],
      unique: true,
    },
    price: {
      type: Number,
      required: [true, "El precio es obligatorio"],
    },
    stock: {
      type: Number,
      required: [true, "El stock es obligatorio"],
    },
    state: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  { collection: "Products" }
);

ProductSchema.methods.toJSON = function () {
  const { __v, _id, ...producto } = this.toObject();
  return producto;
};

module.exports = mongoose.model("Product", ProductSchema);

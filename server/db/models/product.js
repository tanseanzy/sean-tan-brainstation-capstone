const mongoose = require("mongoose"),
  moment = require("moment");

const productSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      required: true,
      trim: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: false,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    productId: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Format the date sent back by mongo
productSchema.methods.toJSON = function () {
  const product = this;
  const productObject = product.toObject();

  return productObject;
};

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

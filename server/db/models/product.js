const mongoose = require("mongoose"),
  moment = require("moment"),
  fs = require("fs");

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
    categoryType: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    concerns: {
      type: String,
      required: true,
      trim: true,
    },
    skinType: {
      type: String,
      required: true,
      trim: true,
    },
    reviews: [
      {
        name: String,
        title: String,
        content: String,
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
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

// GET ALL PRODUCTS

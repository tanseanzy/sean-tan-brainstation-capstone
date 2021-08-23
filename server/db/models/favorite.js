const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  validator = require("validator"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");
// Product = require("./product");

const favoriteSchema = new mongoose.Schema({
  userFrom: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: String,
  },
  productName: {
    type: String,
  },
  img: {
    type: String,
  },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;

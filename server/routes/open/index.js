const router = require("express").Router(),
  { createUser, loginUser } = require("../../controllers/users"),
  {
    getAllProducts,
    getSpecificProduct,
    createProduct,
  } = require("../../controllers/products");
const express = require("express");

// ROUTER GET
router.get("/products", getAllProducts);
router.get("/products/:id", getSpecificProduct);

// ROUTER POST
router.post("/user/create", createUser);
router.post("/user/login", loginUser);
// router.post("/products", createProduct);

module.exports = router;

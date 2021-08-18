const router = require("express").Router(),
  { createUser, loginUser } = require("../../controllers/users"),
  { getAllProducts } = require("../../controllers/products");

router.post("/", createUser);

router.post("/login", loginUser);

router.get("/products", getAllProducts);
module.exports = router;

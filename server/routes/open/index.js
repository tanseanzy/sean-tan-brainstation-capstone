const router = require("express").Router(),
  { createUser, loginUser } = require("../../controllers/users"),
  {
    getAllProducts,
    getSpecificProduct,
    createProduct,
  } = require("../../controllers/products");

// ROUTER GET
router.get("/products", getAllProducts);
router.get("/products/:id", getSpecificProduct);

// ROUTER POST
router.post("/", createUser);
router.post("/login", loginUser);
// router.post("/products", createProduct);

module.exports = router;

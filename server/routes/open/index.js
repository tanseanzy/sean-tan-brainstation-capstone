const router = require("express").Router(),
  { createUser, loginUser, getAllUsers } = require("../../controllers/users"),
  {
    getAllProducts,
    getSpecificProduct,
    createProduct,
  } = require("../../controllers/products");

// ROUTER GET
router.get("/products", getAllProducts);
router.get("/products/:id", getSpecificProduct);
router.get("/allusers", getAllUsers);

// ROUTER POST
router.post("/signup", createUser);
router.post("/login", loginUser);
// router.post("/products", createProduct);

module.exports = router;

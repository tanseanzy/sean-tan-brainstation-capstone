const router = require("express").Router(),
  { createUser, loginUser, getAllUsers } = require("../../controllers/users"),
  {
    getAllProducts,
    getSpecificProduct,
    createProduct,
  } = require("../../controllers/products");

// Router GET
router.get("/products", getAllProducts);
router.get("/products/:id", getSpecificProduct);
router.get("/allusers", getAllUsers);

// Router Post
router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;

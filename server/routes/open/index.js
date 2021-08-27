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
// router.post("/products/:id/reviews", (req, res) => {
//   const { name, title, content, postedBy } = req.body;
//   res.json({ name, title, content, postedBy });
// });
router.get("/allusers", getAllUsers);

// Router Post
router.post("/signup", createUser);
router.post("/login", loginUser);

module.exports = router;

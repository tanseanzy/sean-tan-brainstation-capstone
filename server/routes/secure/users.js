const router = require("express").Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
  } = require("../../controllers/users"),
  { createProduct } = require("../../controllers/products");

// Router GET
router.get("/me", getCurrentUser);

// Router POST
router.post("/logout", logoutUser);
router.post("/createproduct", createProduct);

// Router PATCH
router.patch("/me", updateCurrentUser);

module.exports = router;

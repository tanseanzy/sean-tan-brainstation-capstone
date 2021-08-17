const router = require("express").Router(),
  { getCurrentUser } = require("../../controllers/users");

router.get("/me", getCurrentUser);

module.exports = router;

// SECURE USER ROUTES
const router = require("express").Router(),
  { getCurrentUser, updateCurrentUser } = require("../../controllers/users");

router.get("/me", getCurrentUser);
router.patch("/me", updateCurrentUser);

module.exports = router;

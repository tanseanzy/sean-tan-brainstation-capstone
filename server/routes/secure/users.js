const router = require("express").Router(),
  {
    getCurrentUser,
    updateCurrentUser,
    logoutUser,
  } = require("../../controllers/users");

router.get("/me", getCurrentUser);
router.patch("/me", updateCurrentUser);
router.post("/logout", logoutUser);

module.exports = router;

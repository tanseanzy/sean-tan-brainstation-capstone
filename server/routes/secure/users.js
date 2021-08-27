const router = require("express").Router(),
  { getCurrentUser } = require("../../controllers/users");
// { createProduct } = require("../../controllers/products");
const Product = require("../../db/models/product");
// Router GET
router.get("/me", getCurrentUser);

// Router POST
// router.post("/logout", logoutUser);
// router.post("/createproduct", createProduct);
router.post("/products/:id/reviews", (req, res) => {
  const { title, content } = req.body;
  console.log(req.decoded);
  console.log(req.body);
  Product.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        reviews: {
          name: req.decoded.email,
          title: title,
          content: content,
          postedBy: req.decoded.id,
        },
      },
      // reviews: reviews.push({ content: content, title: title, name: name }),
    },
    { safe: true, upsert: true, new: true },
    function (err, result) {
      if (err) {
        res.json("Oh nerrrr i am broken");
      } else {
        res.json(result);
      }
    }
  );
});

// Router PATCH
// router.patch("/me", updateCurrentUser);

module.exports = router;

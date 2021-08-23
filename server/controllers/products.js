const mongoose = require("mongoose"),
  Product = require("../db/models/product");

// Create a product
exports.createProduct = async (req, res) => {
  const { title, content, likes } = req.body;
  try {
    const post = await new Post({
      brandName,
      productName,
      price,
      categoryType,
      description,
      concerns,
      skinType,
      reviews,
      postedBy: req.decoded.id,
    });
    post.save();
    console.log(post);
    res.status(201).json(post);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// Get a specific product
exports.getSpecificProduct = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send("Not a valid product id");

  try {
    const product = await Product.findOne({ _id });
    // const product = await Product.findOne({ _id, owner: req.user._id });
    if (!product) return res.status(404).send();

    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// function getProducts(req, res) {
//   const products = inventoriesModel.getInventories();
//   res.status(200).json(inventories);
// }

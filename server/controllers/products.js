const mongoose = require("mongoose"),
  Product = require("../db/models/product");

// ***********************************************//
// Create a product
// ***********************************************//
exports.createProduct = async (req, res) => {
  const product = await new Product({
    ...req.body,
    owner: req.user._id,
  });
  try {
    product.save();
    res.status(201).json(product);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get a specific product
// ***********************************************//
exports.getSpecificProduct = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).send("Not a valid task id");

  try {
    const product = await Product.findOne({ _id, owner: req.user._id });
    if (!product) return res.status(404).send();

    res.json(product);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get all tasks
// /tasks?completed=true
// /tasks?limit=10&skip=10
// /tasks?sortBy=createdAt:asc
// /tasks?sortBy=dueDate:desc
// ***********************************************//
exports.getAllProducts = async (req, res) => {
  // const match = {},
  //   sort = {};

  // if (req.query.completed) match.completed = req.query.completed === 'true';

  // if (req.query.sortBy) {
  //   const parts = req.query.sortBy.split(':');
  //   sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  // }

  try {
    const products = await Product.find();
    res.json(products);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

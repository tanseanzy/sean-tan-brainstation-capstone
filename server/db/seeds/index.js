if (process.env.NODE_ENV !== "production") require("dotenv").config();

require("../config/index");

const Product = require("../models/product"),
  User = require("../models/user"),
  faker = require("faker"),
  mongoose = require("mongoose");

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
  await Product.countDocuments({}, function (err, count) {
    console.log("Number of products:", count);
  });
  const userIdArray = [];

  for (let i = 0; i < 100; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  for (let i = 0; i < 100; i++) {
    const product = new Product({
      brandName: faker.lorem.paragraph(),
      productName: faker.lorem.paragraph(),
      price: faker.lorem.paragraph(),
      image: faker.lorem.paragraph(),
      productId: faker.lorem.paragraph(),
    });
    await product.save();
  }
  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
  await Product.countDocuments({}, function (err, count) {
    console.log("Number of product:", count);
  });
};

dbReset();

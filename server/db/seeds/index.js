if (process.env.NODE_ENV !== "production") require("dotenv").config();

require("../config/index");

const Product = require("../models/product"),
  User = require("../models/user"),
  faker = require("faker"),
  mongoose = require("mongoose"),
  productsData = require("../../data/products");
axios = require("axios");

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

  // USER SEEDING
  for (let i = 0; i < 5; i++) {
    const me = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    await me.generateAuthToken();
    userIdArray.push(me._id);
  }

  // PRODUCT SEEDING
  productsData.forEach(async (item) => {
    const product = new Product({
      brandName: item.brandName,
      productName: item.productName,
      price: item.price,
      image: item.image,
      productId: item.productId,
      description: item.description,
      concerns: item.concerns,
      categoryType: item.categoryType,
      concerns: item.concerns,
      skinType: item.skinType,
      createdBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      reviews: [
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          content: faker.lorem.paragraph(),
          postedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          content: faker.lorem.paragraph(),
          postedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
        },
        {
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          content: faker.lorem.paragraph(),
          postedBy: userIdArray[Math.floor(Math.random() * userIdArray.length)],
        },
      ],
    });
    await product.save();
  });

  await User.countDocuments({}, function (err, count) {
    console.log("Number of users:", count);
  });
  await Product.countDocuments({}, function (err, count) {
    console.log("Number of product:", count);
  });
};

dbReset();

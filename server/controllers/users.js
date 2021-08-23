// // OPEN CONTROLLER
// const User = require("../db/models/user");

// /**
//  * @param {name, email, password}
//  * Create a user
//  * @return {user}
//  */
// exports.createUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = new User({
//       name,
//       email,
//       password,
//     });
//     const token = await user.generateAuthToken();
//     res.cookie("jwt", token, {
//       httpOnly: true,
//       sameSite: "Strict",
//       secure: process.env.NODE_ENV !== "production" ? false : true,
//     });
//     res.status(201).json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };

// SECURE CONTROLLER
const User = require("../db/models/user"),
  // { sendWelcomeEmail } = require("../emails/"),
  jwt = require("jsonwebtoken");

/**
 * @param {name, email, password}
 * Create a user
 * @return {user}
 */
exports.createUser = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const user = await new User({
      name,
      email,
      password,
    }).save();
    console.log(user);
    const userToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    console.log(userToken);
    res.status(201).json({ user: user, userToken });
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

/**
 * @param {email, password}
 * Login a user
 * @return {user}
 */
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

//Authenticated Routes Below

/**
 * @param {req.user}
 * Get current user
 * @return {user}
 */
exports.getCurrentUser = async (req, res) => res.json(req.user);

// UPDATE CURRENT USER
// server/controllers/users.js

// const User = require("../db/models/user"),
//   { sendWelcomeEmail } = require("../emails/"),
//   jwt = require("jsonwebtoken");

// /**
//  * @param {name, email, password}
//  * Create a user
//  * @return {user}
//  */
// exports.createUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = new User({
//       name,
//       email,
//       password,
//     });
//     const token = await user.generateAuthToken();
//     res.cookie("jwt", token, {
//       httpOnly: true,
//       sameSite: "Strict",
//       secure: process.env.NODE_ENV !== "production" ? false : true,
//     });
//     res.status(201).json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };

// /**
//  * @param {email, password}
//  * Login a user
//  * @return {user}
//  */
// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findByCredentials(email, password);
//     const token = await user.generateAuthToken();
//     res.cookie("jwt", token, {
//       httpOnly: true,
//       sameSite: "Strict",
//       secure: process.env.NODE_ENV !== "production" ? false : true,
//     });
//     res.json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };

// //Authenticated Routes Below

// /**
//  * @param {req.user}
//  * Get current user
//  * @return {user}
//  */
// exports.getCurrentUser = async (req, res) => res.json(req.user);

// /**
//  * @param {{updates}}
//  * Update a user
//  * @return {user}
//  */
// exports.updateCurrentUser = async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "email", "password", "avatar"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );
//   if (!isValidOperation)
//     return res.status(400).send({ error: "invalid updates!" });
//   try {
//     updates.forEach((update) => (req.user[update] = req.body[update]));
//     await req.user.save();
//     res.json(req.user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };

// // LOGOUT USER
// const User = require("../db/models/user"),
//   { sendCancellationEmail, sendWelcomeEmail } = require("../emails/index"),
//   cloudinary = require("cloudinary").v2,
//   jwt = require("jsonwebtoken");

// // ***********************************************//
// // Create a user
// // ***********************************************//
// exports.createUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const user = new User({
//       name,
//       email,
//       password,
//     });
//     await user.save();
//     const token = await user.generateAuthToken();
//     res.cookie("jwt", token, {
//       httpOnly: true,
//       sameSite: "Strict",
//       secure: process.env.NODE_ENV !== "production" ? false : true,
//     });
//     sendWelcomeEmail(user.email, user.name);
//     res.status(201).json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };

// // ***********************************************//
// // Login a user
// // ***********************************************//
// exports.loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findByCredentials(email, password);
//     const token = await user.generateAuthToken();
//     res.cookie("jwt", token, {
//       httpOnly: true,
//       sameSite: "Strict",
//       secure: process.env.NODE_ENV !== "production" ? false : true,
//     });
//     res.json(user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };

// //Authenticated Routes Below

// // ***********************************************//
// // Get current user
// // ***********************************************//
// exports.getCurrentUser = async (req, res) => res.json(req.user);

// // ***********************************************//
// // Update a user
// // ***********************************************//
// exports.updateCurrentUser = async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name", "email", "password", "avatar"];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );
//   if (!isValidOperation)
//     return res.status(400).send({ error: "invalid updates!" });
//   try {
//     updates.forEach((update) => (req.user[update] = req.body[update]));
//     await req.user.save();
//     res.json(req.user);
//   } catch (e) {
//     res.status(400).json({ error: e.toString() });
//   }
// };

// /**
//  * @param {}
//  * Logout a user
//  * @return {}
//  */
// exports.logoutUser = async (req, res) => {
//   try {
//     req.user.tokens = req.user.tokens.filter((token) => {
//       return token.token !== req.cookies.jwt;
//     });
//     await req.user.save();
//     res.clearCookie("jwt");
//     res.json({ message: "Logged out" });
//   } catch (e) {
//     res.status(500).json({ error: e.toString() });
//   }
// };

// OPEN CONTROLLER
const User = require("../db/models/user");

/**
 * @param {name, email, password}
 * Create a user
 * @return {user}
 */
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
    });
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// SECURE CONTROLLER
const User = require("../db/models/user"),
  { sendWelcomeEmail } = require("../emails/"),
  jwt = require("jsonwebtoken");

/**
 * @param {name, email, password}
 * Create a user
 * @return {user}
 */
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
    });
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.status(201).json(user);
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

const User = require("../db/models/user"),
  { sendWelcomeEmail } = require("../emails/"),
  jwt = require("jsonwebtoken");

/**
 * @param {name, email, password}
 * Create a user
 * @return {user}
 */
exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({
      name,
      email,
      password,
    });
    const token = await user.generateAuthToken();
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV !== "production" ? false : true,
    });
    res.status(201).json(user);
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

/**
 * @param {{updates}}
 * Update a user
 * @return {user}
 */
exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "avatar"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: "invalid updates!" });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

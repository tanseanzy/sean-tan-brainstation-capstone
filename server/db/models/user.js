const mongoose = require("mongoose"),
  validator = require("validator"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken");
Product = require("./product");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid.");
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password can't be password.");
        }
        if (value.length < 6) {
          throw new Error("Password must be at least 6 characters long.");
        }
      },
    },
    admin: {
      type: Boolean,
      required: true,
      default: false,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// /**
//  * Create a virtual relation between User and product.
//  */
// userSchema.virtual("products", {
//   ref: "Product",
//   localField: "_id",
//   foreignField: "owner",
// });

/**
 * // By naming this instance method toJSON we don't
 * // need to call it for it to run because of our
 * // express res.send or res.json methods calls it for us.

 */
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// instance method to generate a user token
// @return {token}
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

/**
 * // This static method will first find a user by email
 * // and then compare that users password with the
 * // submitted password.
 * // Static methods are run on the actual Model (User), instead
 * // of an instance of a model.
 * @return { user }
 */
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Unable to log in");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Unable to log in");
  return user;
};

/**
 * // This mongoose middleware will hash our user's passwords
 * // whenever a user is created or a user password is updated.
 * // it doesn't return anything, but calls next instead.  This next
 * // serves the same purpose as the next we have been calling in
 * // express, but it is not the same next.  This one is provided
 * // by mongoose, and the other by express.
 */
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password"))
    user.password = await bcrypt.hash(user.password, 8);

  next();
});

/**
 * Delete user products when a user is removed.
 */
// userSchema.pre("remove", async function (next) {
//   const user = this;
//   await Product.deleteMany({
//     owner: user._id,
//   });
//   next();
// });

const User = mongoose.model("User", userSchema);

module.exports = User;

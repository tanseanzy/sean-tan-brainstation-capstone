const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(400).send("Please login");
  }

  // getting token
  const authToken = req.headers.authorization.split(" ")[1];

  // verifying token
  jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Invalid auth token");
    }

    req.decoded = decoded;
    next();
  });
};

// const express = require("express"),
//   morgan = require("morgan"),
//   app = express();

// require("./db/config");

// // Parse incoming JSON into objects
// app.use(express.json());
// // Log all requests
// app.use(morgan("dev"));

// module.exports = app;

// import db
require("./db/config");

const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  cookieParser = require("cookie-parser"),
  openRoutes = require("./routes/open"),
  path = require("path");

// Parse incoming JSON into objects
app.use(express.json());
// Log all requests
app.use(morgan("dev"));

// Unauthenticated routes
app.use("/api/users", openRoutes);

// app.use(cookieParser());

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
// }

// We'll add more stuff in between in a little bit.

// if (process.env.NODE_ENV === "production") {
//   // Handle React routing, return all requests to React app
//   app.get("*", (request, response) => {
//     response.sendFile(
//       path.resolve(__dirname, "..", "client", "build", "index.html")
//     );
//   });
// }

module.exports = app;

// SECURE USER ROUTES
// import db
// require("./db/config");

// const express = require("express"),
//   app = express(),
//   cookieParser = require("cookie-parser"),
//   userRouter = require("./routes/secure/users"),
//   openRoutes = require("./routes/open"),
//   passport = require("./middleware/authentication"),
//   path = require("path");

// // Parse incoming JSON into objects
// app.use(express.json());

// // Unauthenticated routes
// app.use("/api/users", openRoutes);

// app.use(cookieParser());

// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
// }

// //  Authentication Middleware
// app.use("/api/*", passport.authenticate("jwt", { session: false }));

// // Authenticated Routes
// app.use("/api/users", userRouter);

// if (process.env.NODE_ENV === "production") {
//   // Handle React routing, return all requests to React app
//   app.get("*", (request, response) => {
//     response.sendFile(
//       path.resolve(__dirname, "..", "client", "build", "index.html")
//     );
//   });
// }

// module.exports = app;

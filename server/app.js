// import db
require("./db/config");

const express = require("express"),
  app = express(),
  morgan = require("morgan"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  openRoutes = require("./routes/open/index"),
  secureRoutes = require("./routes/open/index"),
  path = require("path");
authorize = require("./middleware/authorize");

app.use(cors());
// Parse incoming JSON into objects
app.use(express.json());

// Log all requests
app.use(morgan("dev"));

// Open routes
app.use("/api/users", openRoutes);

// Secure routes
app.use("/api/users", authorize, secureRoutes);

if (process.env.NODE_ENV === "production") {
  // serve any static files
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
}

if (process.env.NODE_ENV === "production") {
  // handle react routing, return all requests to react app
  app.get("*", (request, response) => {
    this.response.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

module.exports = app;

const express = require('express'),
    morgan = require('morgan'),
    app = express();

require('./db/config');

// Parse incoming JSON into objects
app.use(express.json());
// Log all requests
app.use(morgan('dev'));

module.exports = app;
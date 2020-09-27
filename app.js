const express = require('express');
const app = express();

// routes
app.use(require('./routes/routes'));

module.exports = app;
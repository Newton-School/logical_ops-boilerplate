const express = require('express');
const app = express();
const logicalRoutes = require('../routes/logicalRoutes');

//middleware
app.use(express.json());

//User POST ROUTE
app.use('/api/logical', logicalRoutes);

module.exports = app;

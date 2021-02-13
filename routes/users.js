const express = require('express');
const userRoutes = express.Router();
const userController = require('../controller/userController')

// Get Routes
userRoutes.get('/holaMundo',userController.v1.getHolaMundo);

// Export
module.exports = userRoutes;

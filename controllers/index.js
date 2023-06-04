// Import necessary modules and routers
const router = require('express').Router();
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes');
const apiRoutes = require("./api");

// Define routes and their corresponding routers
router.use('/', homeRoutes); // Routes for the home page and user authentication
router.use('/dashboard', dashboardRoutes); // Routes for the dashboard
router.use('/api', apiRoutes); // API routes for handling data

// Export the router
module.exports = router;

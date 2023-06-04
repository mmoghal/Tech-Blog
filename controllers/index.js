const mainRouter = require('express').Router();

const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes');
const apiRoutes = require("./api")

mainRouter.use('/', homeRoutes);
mainRouter.use('/dashboard', dashboardRoutes);
mainRouter.use('/api', apiRoutes);

module.exports = mainRouter;

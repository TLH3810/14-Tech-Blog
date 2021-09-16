const router = require('express').Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-route');
const homepageRoute = require('./homepage-route');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homepageRoute);

module.exports=router;



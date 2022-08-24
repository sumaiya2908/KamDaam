const router = require('express').Router();

const OrderRoute = require('./Order');
const ProductRoute = require('./Product');
const UserRoute = require('./User');

router.use('/order', OrderRoute);
router.use('/product', ProductRoute);
router.use('/user', UserRoute);

module.exports = router;


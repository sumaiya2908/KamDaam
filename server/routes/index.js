const router = require('express').Router();

const AddressRoute = require('./Address');
const OrderRoute = require('./Order');
const ProductRoute = require('./Product');
const UserRoute = require('./User');

router.use('/address', AddressRoute);
router.use('/order', OrderRoute);
router.use('/product', ProductRoute);
router.use('/user', UserRoute);

module.exports = router;


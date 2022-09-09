const router = require('express').Router();

const AddressRoute = require('./Address');
const OrderRoute = require('./Order');
const ProductRoute = require('./Product');
const UserRoute = require('./User');
const CartRouter = require('./Cart')

router.use('/address', AddressRoute);
router.use('/order', OrderRoute);
router.use('/product', ProductRoute);
router.use('/user', UserRoute);
router.use('/cart', CartRouter)

module.exports = router;


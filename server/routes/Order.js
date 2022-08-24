const router = require('express').Router();

const Order = require('../models/Order')

router.get('/all', (req, res) => {
    Order.find({}).then(function (orders) {
        res.send(orders);
    })
})

router.post('/add-order', (req, res) => {
    const NewOrder = new Order({
        orderItem: req.body.items,
        address: req.body.address,
        status: req.body.status || 'placed',
        rate: req.body.totalRate
    })

    NewOrder.save()
    .then(() => {
        res.send("Order Placed")
    })
})

module.exports = router;
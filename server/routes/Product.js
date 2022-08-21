const router = require('express').Router();

const Product = require('../models/Product');

router.get('/all', (req, res) => {
    Product.find({}).then(function (products) {
        res.send(products);
    })
})

router.post('/add', (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
    })
    product.save()
    .then(() => {
        res.send('Product created')
    })
})

router.put('/edit/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body.product, (err, doc) => {
        if (err) res.send(err, 'Product cannot be updated')

        res.send('Product updated successfully')
    })
})

router.delete('/delete/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) res.send('Product cannot be deleted')

        res.send("Product deleted successfull")
    })
})

module.exports = router
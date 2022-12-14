const router = require('express').Router();

const Product = require('../models/Product');
const upload = require('../utils/upload')
const { isAdmin, isAuth } = require('../utils/auth')

const singleUpload = upload.single('image')

router.get('/all', (req, res) => {
    Product.find({}).then(function (products) {
        res.send(products);
    })
})

router.get("/:id", (req, res) => {
    Product.findById(req.params.id, (err, doc) => {
        if (err) res.send("Error loading product")

        res.send(doc)
    })
})

router.post('/add', isAuth, isAdmin, singleUpload, (req, res) => {
    console.log(req.body)
    const product = new Product({
        name: req.body.name,
        description: req.body.description || '',
        imageUrl: req.file.location,
        brand: req.body.brand || '',
        category: req.body.category || '',
        price: req.body.price || 0,
        quantity: req.body.quantity || 0
    })
    product.save(function(err, doc) {
        if (err) res.status(404).send(err.message)

        res.status(200).send(doc)
    })
})

router.put('/edit/:id', isAuth, isAuth, (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body.product, (err, doc) => {
        if (err) res.send(err, 'Product cannot be updated')

        res.send('Product updated successfully')
    })
})

router.delete('/delete/:id', isAuth, isAdmin, (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) res.send('Product cannot be deleted')

        res.send("Product deleted successfull")
    })
})

module.exports = router
const router = require('express').Router();
const multer = require('multer')

const Product = require('../models/Product');

const upload = require('../utils/upload')
const singleUpload = upload.single('image')

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

router.post('/add-many', (req, res) => {
    Product.insertMany([req.products])
    .then(() => {
        res.send('Products inserted');
        
    })
    .catch((err) => {
        res.send('Couldnot insert products', err)
    })
})

router.post('/image', singleUpload, (req, res) => {
    console.log(req.file)
    res.send({
        data: req.file,
        msg: 'Successfully uploaded ' + req.file + ' files!'
    })
    })

module.exports = router
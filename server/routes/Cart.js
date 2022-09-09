const router = require('express').Router();
const {Cart} = require('../models/Cart');

router.get('/all', (req, res) => {
    Cart.find({}).then(function(items) {
        res.send(items)
    })
})

router.post('/add', (req, res)=> {
    const NewItem = new Cart({
        item: req.body.item,
        user: req.body.user
    })
    NewItem.save()
    .then(() => {
        res.send('Item added successfully')
    })
})

router.put('/edit/:id', (req, res) => {
    Cart.findByIdAndUpdate(req.params.id, req.body.item, (err, doc) => {
        if (err) res.send(err, 'Cart item cannot be updated')

        res.send('Cart item updated successfully')
    })
})

// router.delete('/delete/:id', (req, res) => {
//     Cart.findByIdAndDelete(req.params.id, (err, doc) => {
//         if (err) res.send('Product cannot be deleted')

//         res.send("Product deleted successfull")
//     })
// })

module.exports = router;

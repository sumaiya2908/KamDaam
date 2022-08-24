const router = require('express').Router();

const {AddressModel} = require('../models/Address');

router.get('/all', (req, res) => {
    AddressModel.find({})
    .then((addresses) => {
        res.send(addresses)
    })
    .catch((err) => {
        res.send('Error fetching Address')
    })
})

router.post('/add', (req, res) => {
    const NewAddress = new AddressModel({
        user: req.body.user,
        name: req.body.name,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.PostalCode,
        country: req.body.country
    })

    NewAddress.save()
    .then(() => {
        res.send("Address Added")
    })
    .catch(() => {
        res.send("Error Adding Address")
    })
})

router.put('/edit/:id', (req, res) => {
    AddressModel.findByIdAndUpdate(req.params.id, req.body.address, (err, doc) => {
        if (err) res.send("Error updating the address", err)

        res.send("Address updated succesfully")
    })
})

router.delete('/delete/:id', (req, res) => {
    AddressModel.findByIdAndDelete(req.params.id, (err, doc) => {
        if (err) res.send("Error Deleting the address", err)

        res.send("Address deleted successfully")
    })
})
const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const AddressSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
    country: {
        type: String
    },
})

const AddressModel = mongoose.model('Address', AddressSchema)

module.exports = {AddressModel, AddressModel}
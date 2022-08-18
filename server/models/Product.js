const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    brand: {
        type: String
    },
    imageUrl: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel
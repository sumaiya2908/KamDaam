const mongoose = require('mongoose')
const { ObjectId } =  mongoose.Schema

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    imageUrl: {
        type: String
    },
    quantity: {
        type: Number,
        default: 0
    },
    product: {
        type: ObjectId,
        ref: 'product'
    },
    quatity: {
        type: Number,
        default: 0
    },
    rate: {
        type: Number,
        default: 0
    }
})

const CartSchema = new mongoose.Schema({
    cartItem: [ItemSchema],
    rate: {
        type: Number,
        default: 0
    },
    user: {
        type: ObjectId,
        ref: 'user'
    }
})

const CartModel = new mongoose.model('cart', CartSchema);

module.exports = {ItemSchema, CartModel}
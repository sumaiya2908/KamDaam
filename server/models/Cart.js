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
        default: 1
    },
    product: {
        type: ObjectId,
        ref: 'product'
    },
    rate: {
        type: Number,
        default: 0
    }
})

const CartSchema = new mongoose.Schema({
    cartItem: [ItemSchema],
    user: {
        type: ObjectId,
        ref: 'user'
    }
})

const Cart = new mongoose.model('cart', CartSchema);

module.exports = {ItemSchema, Cart}
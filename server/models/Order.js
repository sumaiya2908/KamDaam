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


const CartSchema = new Schema({
    cartItem: [ItemSchema],
    user: {
        type: ObjectId,
        ref: 'user'
    }
})
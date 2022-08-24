const mongoose = require('mongoose')
const { ObjectId } =  mongoose.Schema

const {AddressSchema} = require('./Address')

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

const OrderSchema = new mongoose.Schema({
    orderItem: [ItemSchema],
    user: {
        type: ObjectId,
        ref: 'user'
    },
    address: {
        type: ObjectId,
        ref: 'address'
    },
    status: {
        type: String,
        enum: ["placed", "completed", "pending", "on the way", "returned", "cancelled"]
    },
    rate: {
        type: Number,
        default: 0
    }
})

const OrderModel = new mongoose.model('order', OrderSchema);

module.exports = OrderModel
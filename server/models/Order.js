const mongoose = require('mongoose')
const { ObjectId } =  mongoose.Schema

const {AddressSchema} = require('./Address');
const {ItemSchema} = require('./Cart');

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
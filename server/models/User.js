const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    isAdmin: {
        type: Boolean
    },
    created: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
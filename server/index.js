const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const ProductModel = require('./models/Product')
const UserModel = require('./models/User')

app.listen(3000, () => {
    console.log('Server started at port 3000')
})
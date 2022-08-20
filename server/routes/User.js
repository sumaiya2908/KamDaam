const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const UserModel = require('../models/User');
const getToken = require('../utils');

router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword
            });
            user.save()
                .then((result) => {
                    res.send("User registration successfull")
                })
                .catch((err) => {
                    res.send("Error creating user")
                })
        })
        .catch((err) => {
            res.send("Error hashing password")
        })
})

router.post('/login', (req, res) => {
    UserModel.findOne({ email: req.body.email })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password)
                .then((correctPassword) => {
                    if (!correctPassword) {
                        return res.status(404).send("Invalid credentials password")
                    }

                    const token = getToken(user)
                    res.status(200).send({ msg: 'Login succesfull', token: token })
                })
        })
        .catch((err) => {
            res.status(404).send("Invalid credentials")
        })
})

module.exports = router
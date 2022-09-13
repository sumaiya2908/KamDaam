const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const { getToken, isAdmin, isAuth } = require('../utils/auth');

router.get('/all', isAuth, isAdmin, (req, res) => {
    User.find({}).then(function (users) {
        res.send(users)
    })
})

router.put('/:id', isAuth, (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body.user, (err, doc) => {
        if (err) res.send("Product cannot be updated", err)
        const token = getToken(doc)
        res.send({ message: 'User Updated', token: token })
    })
})

router.post('/register', (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                isAdmin: req.body.isAdmin || false
            });
            user.save()
                .then((result) => {
                    res.send({ message: "User registration successfull", token: getToken(result) })
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
    User.findOne({ email: req.body.email })
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
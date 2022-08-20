const jwt = require('jsonwebtoken');

require('dotenv').config();

function getToken(user) {
    return jwt.sign({
        userID: user._id,
        userEmail: user.email
    },
        process.env.JWT_TOKEN,
        { expiresIn: '24h' }
    )
}

module.exports = getToken
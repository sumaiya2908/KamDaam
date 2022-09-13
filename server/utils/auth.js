const jwt = require('jsonwebtoken');

const getToken = (user) => {
    return jwt.sign({
        userID: user._id,
        userEmail: user.email,
        isAdmin: user.isAdmin
    },
        process.env.JWT_TOKEN,
        { expiresIn: '24h' }
    )
}

const isAuth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const onlyToken = token.slice(7, token.length);
        jwt.verify(onlyToken, process.env.JWT_TOKEN, (err, decode) => {
            if (err) {
                return res.status(401).send({ message: 'Invalid Token' });
            }
            req.user = decode;
            next();
            return;
        });
    } else {
        return res.status(401).send({ message: 'Token is not supplied.' });
    }
}

const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        return next();
    }
    return res.status(401).send({ message: 'Admin Token is not valid.' });
};

module.exports = { getToken, isAuth, isAdmin }
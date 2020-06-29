require('dotenv').config()

const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ error: 'No token provided' });

    const parts = authHeader.split(' ');

    if (!parts.lengt === 2)
        return res.status(401).send({ error: 'Token error' });

    const [ scheme, token ] = parts;

    if (!/^Bearer/.test(scheme))
        return res.status(401).send({ error: 'Token malformatted' });

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' });

        req.userId = decoded.id;

        return next();
    });
    
}
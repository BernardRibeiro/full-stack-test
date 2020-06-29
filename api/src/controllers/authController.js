require('dotenv').config();

const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database');
const User = db.User;

const secret = process.env.SECRET_KEY;

const generateToken = (params = {}) => {
    return jwt.sign(params, secret, {
        expiresIn: 86400,
    });
};

const authenticate = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email }});

    if (!user) 
        return res.status(200).send({ error: 'Usuário não localizado' });
    
    if (!await bcrypt.compare(password, user.password))
        return res.status(200).send({ error: 'Senha inválida' });

    user.password = undefined;

    res.send({ 
        user, 
        token: generateToken({ id: user.id })
    });
};

router.post('/authenticate', authenticate);

module.exports = app => app.use('/', router);
const express = require('express');
const bcrypt = require('bcryptjs');
const models = require('../database');

const User = models.User;

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();

        return res.send({ users });
    } catch (err) {      
        return res.status(400).send({ error: 'Falha no get'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findByPk();

        return res.send({ user });
    } catch (err) {      
        return res.status(400).send({ error: 'Falha no getId'});
    }
});

router.post('/create', async (req, res) => {
    try {
        
        const { email } = req.body;

        console.log(req.body);
        
        const result = await User.count({ where: { email: email }});
        if (result != 0)
            return res.status(400).send({ error: 'usuário já existe' });

        const { name } = req.body;
        const { password } = req.body;

        const user = await User.create({
            name: name,
            email: email,
            password: password
        });

        return res.send({ user });

    } catch (err) {      
        console.log(err);
        return res.status(400).send({ error: 'Falha no register'});
    }
});

router.put('/:id', async (req, res) => {
    try {

        //verifica usuario 
            //return res.status(400).send({ error: 'usuário não existe' });

        // atualiza

        return res.send({ message: 'OK' });

    } catch (err) {      
        return res.status(400).send({ error: 'Falha no register'});
    }
});

module.exports = app => app.use('/user', router);
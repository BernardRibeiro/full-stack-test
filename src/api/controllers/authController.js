const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../database/models/user');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        return res.send({ message: 'OK' });
    } catch (err) {      
        return res.status(400).send({ error: 'Falha no get'});
    }
});

router.get('/:id', async (req, res) => {
    try {
        return res.send({ message: 'OK' });
    } catch (err) {      
        return res.status(400).send({ error: 'Falha no getId'});
    }
});

router.post('/create', async (req, res) => {
    try {
        //verifica usupario
            //return res.status(400).send({ error: 'usuário já existe' });

        //cria usuario 
        
        return res.send({ 
            user, 
            // gera token token: 
        });

    } catch (err) {      
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
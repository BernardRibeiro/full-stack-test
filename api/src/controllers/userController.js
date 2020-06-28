const express = require('express');
const router = express.Router();

const userService = require('../services/userService');

const get = async (req, res) => {
    try {
        const user = await userService.get(req.params.id);

        return res.status(200).send({ user });

    } catch (err) {      
        return res.status(400).send({ message: 'Falha ao realizar operação', error: err});
    }
}

const getAll = async (req, res) => {
    try {
        const users = await userService.getAll();

        return res.status(200).send({ users });

    } catch (err) {      
        return res.status(400).send({ message: 'Falha ao realizar operação', error: err});
    }
}

const create = async (req, res) => {
    try {
        const user = await userService.create(req.body);
        user.password = null;

        return res.status(200).send({ user });

    } catch (err) {      
        return res.status(400).send({ message: 'Falha ao realizar operação', error: err});
    }
}

const update = async (req, res) => {
    try {
        const affecteds = await userService.update(req.params.id, req.body);

        return res.status(200).send({ affecteds });

    } catch (err) {      
        return res.status(400).send({ message: 'Falha ao realizar operação', error: err});
    }
}

const remove = async (req, res) => {
    try {
        const affecteds = await userService.remove(req.params.id);

        return res.status(200).send({ affecteds });

    } catch (err) {      
        return res.status(400).send({ message: 'Falha ao realizar operação', error: err});
    }
}

router.get('/:id', get);
router.get('/', getAll);
router.post('/create', create);
router.put('/:id/update', update);
router.delete('/:id', remove);

module.exports = app => app.use('/user', router);
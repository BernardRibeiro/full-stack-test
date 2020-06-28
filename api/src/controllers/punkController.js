const express = require('express');
const authMiddleware = require('../middlewares/auth');
const punkService = require('../services/punkService');

const router = express.Router();

const getAll = async (req, res) => {
    try {
        const rows = await punkService.get();
        
        return res.status(200).send({ userId: req.userId, rows });
        
    } catch (err) {      
        return res.status(400).send({ message: 'Falha ao realizar operação', error: err});
    }
};

router.use(authMiddleware);
router.get('/', getAll);

module.exports = app => app.use('/punk', router);
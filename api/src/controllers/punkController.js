const express = require('express');
const authMiddleware = require('../middlewares/auth');
const punkService = require('../services/punkService');

const router = express.Router();

const getAll = async (req, res) => {
    try {
        const data = await punkService.get(req.params.page, req.params.perPage);

        const rows = data.length >= 0 ? data : [];

        return res.status(200).send({ rows });
    } catch (err) {      
        return res.status(400).send({ message: 'Falha ao realizar operação', error: err});
    }
};

router.use(authMiddleware);
router.get('/:page/:perPage', getAll);

module.exports = app => app.use('/punk', router);
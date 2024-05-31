const express = require('express');
const router = express.Router();
const Presencial = require('../models/presencial')

router.get('/', async (req, res) => {
    const pres = await Presencial.findAll();
    res.json(pres)
});

router.post("/", async (req, res) => {
    const pres = req.body;
    try {
        const novo = await Presencial.create(pres)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Presencial ' + error.message });
    }
});

module.exports = router;

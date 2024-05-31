const express = require('express');
const router = express.Router();
const GrandeAreas = require('../models/GrandeAreas');

router.get('/', async (req, res) => {
    const GrandeArs = await GrandeAreas.findAll();
    res.json(GrandeArs)
});

router.post("/", async (req, res) => {
    const GrandeArs = req.body;
    try {
        const novo = await GrandeAreas.create(GrandeArs)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Grandes Areas '+ error.message });
    }
});

module.exports = router;

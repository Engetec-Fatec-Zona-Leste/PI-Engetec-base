const express = require('express');
const router = express.Router();
const SubAreas = require('../models/subareas')

router.get('/', async (req, res) => {
    const sba = await SubAreas.findAll();
    res.json(sba)
});

router.post("/", async (req, res) => {
    const sba = req.body;
    try {
        const novo = await SubAreas.create(sba)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar SubAreas '+ error.message });
    }
});

module.exports = router;

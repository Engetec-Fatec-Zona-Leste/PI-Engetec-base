const express = require('express');
const router = express.Router();
const Especialidades = require('../models/Especialidades')

router.get('/', async (req, res) => {
    const especialidades = await Especialidades.findAll();
    res.json(especialidades)
});

router.post("/", async (req, res) => {
    const especialidades = req.body;
    try {
        const novo = await Especialidades.create(especialidades)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Especialidades '+ error.message });
    }
});

module.exports = router;

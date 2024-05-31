const express = require('express');
const router = express.Router();
const Atividades = require('../models/atividade')
const TipoAtividades = require('../models/categoriaArquivos')

router.get('/', async (req, res) => {
    const ati = await Atividades.findAll();
    res.json(ati)
});

router.post("/", async (req, res) => {
    const ati = req.body;
    try {
        const novo = await Atividades.create(ati)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Atividades '+ error.message });
    }
});

module.exports = router;

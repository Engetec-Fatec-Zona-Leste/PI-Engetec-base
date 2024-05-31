const express = require('express');
const router = express.Router();
const categoriaArquivos = require('../models/categoriaArquivos')

router.get('/', async (req, res) => {
    const arq = await categoriaArquivos.findAll();
    res.json(arq)
});

router.post("/", async (req, res) => {
    const arq = req.body;
    try {
        const novo = await categoriaArquivos.create(arq)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar tipo de Arquivo '+ error.message });
    }
});

module.exports = router;

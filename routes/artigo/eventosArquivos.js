const express = require('express');
const router = express.Router();
const { Eventos, Arquivos } = require("../../model/db");

// Rota para buscar todos os eventos e todos os arquivos associados
router.get('/', async (req, res) => {
    try {
        // Buscar todos os eventos
        const eventos = await Eventos.findAll();

        // Criar um array de Promises para buscar arquivos associados a cada evento
        const arquivosPromises = eventos.map(event =>
            Arquivos.findAll({ where: { idEventos: event.id } })
        );

        // Resolver todas as Promises e obter todos os arquivos
        const arquivosResults = await Promise.all(arquivosPromises);

        // Mapear arquivos associados a cada evento
        const eventosComArquivos = eventos.map((event, index) => ({
            event,
            arquivos: arquivosResults[index]
        }));

        // Devolver todos os eventos e arquivos associados como JSON
        res.json(eventosComArquivos);

    } catch (error) {
        console.error('Erro ao buscar eventos e arquivos:', error);
        res.status(500).json({ error: 'Erro ao buscar eventos e arquivos: ' + error.message });
    }
});

module.exports = router;

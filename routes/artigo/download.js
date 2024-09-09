const express = require('express');
const router = express.Router();
const { Eventos, Arquivos } = require("../../model/db");
const path = require('path');

// Rota para download do arquivo de modeloApresentacao do evento
router.get('/:nomeURL/modeloApresentacao', async (req, res) => {
    try {
        // Obtendo o evento pelo nomeURL
        const event = await Eventos.findOne({ where: { nomeURL: req.params.nomeURL } });

        // Verifica se o evento foi encontrado
        if (!event) {
            return res.status(404).send('Evento não encontrado');
        }

        // Caminho completo do arquivo no servidor
        const arquivoPath = path.resolve(__dirname, '..', '..', 'uploads', event.nomeURL, 'arquivos', event.modeloApresentacao);
        console.log(`Caminho do arquivo de modeloApresentacao: ${arquivoPath}`);

        // Enviar o arquivo para download
        res.download(arquivoPath, (err) => {
            if (err) {
                console.error('Erro ao enviar o arquivo de modeloApresentacao:', err);
                return res.status(500).send('Erro ao enviar o arquivo');
            }
        });

    } catch (error) {
        console.error('Erro ao buscar o evento para modeloApresentacao:', error);
        res.status(500).send('Erro no servidor');
    }
});

// Rota para download do arquivo modeloArquivo da tabela Arquivos
router.get('/:nomeURL/arquivo', async (req, res) => {
    try {
        // Buscar o evento pelo nomeURL
        const event = await Eventos.findOne({ where: { nomeURL: req.params.nomeURL } });

        // Verifica se o evento foi encontrado
        if (!event) {
            return res.status(404).send('Evento não encontrado');
        }

        // Buscar o arquivo no banco de dados pelo ID do evento
        const arquivo = await Arquivos.findOne({ where: { idEventos: event.id } });

        // Verifica se o arquivo foi encontrado
        if (!arquivo) {
            return res.status(404).send('Arquivo não encontrado');
        }

        // Caminho completo do arquivo no servidor
        const arquivoPath = path.resolve(__dirname, '..', '..', 'uploads', event.nomeURL, 'arquivos', arquivo.modeloArquivo);
        console.log(`Caminho do arquivo modeloArquivo: ${arquivoPath}`);

        // Enviar o arquivo para download
        res.download(arquivoPath, (err) => {
            if (err) {
                console.error('Erro ao enviar o arquivo modeloArquivo:', err);
                return res.status(500).send('Erro ao enviar o arquivo');
            }
        });

    } catch (error) {
        console.error('Erro ao buscar o arquivo para modeloArquivo:', error);
        res.status(500).send('Erro no servidor');
    }
});

module.exports = router;

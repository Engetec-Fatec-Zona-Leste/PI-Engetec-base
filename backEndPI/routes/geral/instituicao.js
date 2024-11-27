const express = require('express');
const { Instituicoes } = require("../../model/db");
const { where } = require('sequelize');
const router = express.Router();

// Rota para cadastrar uma nova instituição
router.post("/cadastrar", async (req, res) => {
  const { nome, cnpj } = req.body;

  try {
    const validar = await Instituicoes.findOne({ where: { cnpj: cnpj } });

    if (validar) {
      return res.status(409).json({ message: 'Instituição já está cadastrada.' });
    }

    const status = "Pendente";
    const instituicao = await Instituicoes.create({ nome, cnpj, status });

    res.status(202).json({
      message: 'A instituição cadastrada ainda deve ser aprovada.',
      instituicao: instituicao
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar a instituição.' });
  }
});

// Rota para buscar instituições aprovadas
router.get('/aprovada', async (req, res) => {
  try {
    const instituicoes = await Instituicoes.findAll({
      where: { status: 'Aprovado' }, // Buscar apenas instituições aprovadas
    });

    if (instituicoes.length === 0) {
      return res.status(200).json({
        message: 'Nenhuma instituição aprovada encontrada.',
        instituicoes: [] // Retorna um array vazio
      });
    }

    res.status(200).json({ instituicoes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Ocorreu um erro ao buscar as instituições.',
    });
  }
});

// Rota para buscar instituições pendentes
router.get('/pendente', async (req, res) => {
  try {
    const instituicoes = await Instituicoes.findAll({
      where: { status: 'Pendente' },
    });

    if (instituicoes.length === 0) {
      return res.status(200).json({
        message: 'Nenhuma instituição pendente encontrada.',
        instituicoes: [] // Retorna um array vazio
      });
    }

    res.status(200).json({ instituicoes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Ocorreu um erro ao buscar as instituições.',
    });
  }
});

// Rota para buscar todas as instituições
router.get('/', async (req, res) => {
  try {
    const instituicoes = await Instituicoes.findAll();

    if (instituicoes.length === 0) {
      return res.status(200).json({
        message: 'Nenhuma instituição encontrada.',
        instituicoes: [] // Retorna um array vazio
      });
    }

    res.status(200).json({ instituicoes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Ocorreu um erro ao buscar as instituições.',
    });
  }
});

// Rota para buscar instituições recusadas
router.get('/recusada', async (req, res) => {
  try {
    const instituicoes = await Instituicoes.findAll({
      where: { status: 'Recusada' },
    });

    if (instituicoes.length === 0) {
      return res.status(200).json({
        message: 'Nenhuma instituição recusada encontrada.',
        instituicoes: [] // Retorna um array vazio
      });
    }

    res.status(200).json({ instituicoes });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Ocorreu um erro ao buscar as instituições.',
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Avaliadores = require('../models/avaliadores')
const userProfile = require('../models/userProfile')

router.get('/', async (req, res) => {
    const ava = await Avaliadores.findAll();
    res.json(eve)
});

router.post("/", async (req, res) => {
    var userid
    const userData = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        cargo: req.body.cargo,
        cpf: req.body.cpf,
    }
        try {
            const newUser = await userProfile.create(userData)
            res.json(newUser);
            userid = newUser.idUserProfile
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar userProfile '+ error.message });
        }

    const ava = {
        idUserProfile: userid,
        idInstituicoes: req.body.idInstituicoes,
        idAreaConhecimentos: req.body.idAreaConhecimentos
    }

    try {
        const novo = await Avaliadores.create(ava)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Avaliador '+ error.message });
    }
});

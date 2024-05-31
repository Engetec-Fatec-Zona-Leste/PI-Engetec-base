const express = require('express');
const router = express.Router();
const UserProfiles = require('../models/userProfile')
const Convidados = require('../models/convidado')

router.get('/', async (req, res) => {
    const nusrpfl = await UserProfiles.findAll();
    const ncom = await Convidados.findAll();
    res.json(nusrpfl, ncom)
});

router.post("/", async (req, res) => {
    const userData = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }
    const userCom = {
        idUserProfile: req.body.idUserProfile,
        tempoNecesario: req.body.tempoNecesario,
        periodo: req.body.periodo,
        funcao: req.body.funcao
    }
    try {
        const nusrpfl = await UserProfiles.create({userData});
        console.log(nusrpfl.idUserProfile)
        if (nusrpfl != null) {
            const ncom = await Convidados.create({userCom})
            res.json(nusrpfl, ncom)
        }else{
            console.error(error)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar o convidado '+ error.message });
    }
});

module.exports = router;

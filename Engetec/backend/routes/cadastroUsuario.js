const express = require('express');
const router = express.Router();
const UserProfiles = require('../models/userProfile')
const Ouvintes = require('../models/ouvinte')
const Instituicoes = require('../models/instituicao');
const { where } = require('sequelize');

router.get('/', async (req, res) => {
    const uspfl = await UserProfiles.findAll();
    res.json(uspfl)
});

router.post("/", async (req, res) => {

    const userprof = {
        nome: req.body.Nome,
        email: req.body.Email,
        senha: req.body.Senha
    }
   
    const userovnt = {
        curso: req.body.Curso
    }
    const insti = {
        nome: req.body.Nome,
    }
    try {
        const nuserpfp = await UserProfiles.create({userprof});
        console.log(nuserpfp.idUserProfile)
        if (userovnt != null) {
            const novnt = await Ouvintes.create({userovnt})
            if(insti != null){
                const ninst = await Instituicoes.create({insti})
                res.json(nuserpfp, novnt, ninst)
            }
        }else{
            console.error(error)
        } 
    } catch (error) {
        
    }
});

module.exports = router;

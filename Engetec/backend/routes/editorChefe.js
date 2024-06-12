const express = require('express')
const router = express.Router()
const EditorChefes = require('../models/editorChefe');
const Instituicoes = require("../models/instituicao")
const UserProfiles = require('../models/userProfile');


router.get('/', async(req, res)=>{
    const com = await EditorChefes.findAll();
    res.json(com)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const com = await EditorChefes.findByPk(id);
  res.json(com)
})

router.post("/", async(req, res)=>{

    const userchef ={
      linkLattes: req.body.linkLattes,
      status: req.body.status
    }
    const userprof = {
      nome: req.body.Nome,
      email: req.body.Email,
      senha: req.body.Senha
    }
    const insti = {
        nome: req.body.Nome,
    }
  try {
      const nuserpf = await UserProfiles.create({userprof});
      console.log(nuserpfp.UserProfiles)
      if (nuserpfp != null) {
          const nuinsti = await Instituicoes.create({userovnt})
          if (nuinsti != null) {
            const nuuserchef = await Convidados.create({userovnt})
            res.json(nuserpf, nuinsti, nuuserchef)
          }
        } 
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar EditorChefes '+ error.message });
      }
})


router.put("/:id", async(req, res)=>{
  const id = req.params.id;
  const novosDados = req.body;

  try {
    const edct = await EditorChefes.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (edct[0] === 1) {
      res.json({ message: 'EditorChefes atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'EditorChefes não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar EditorChefes ' + error.message });
  }
})


module.exports = router;

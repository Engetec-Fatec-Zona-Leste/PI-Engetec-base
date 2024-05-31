const express = require('express')
const router = express.Router()
const Autores = require('../models/Autores');


router.get('/', async(req, res)=>{
    const com = await Autores.findAll();
    res.json(com)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const com = await Autores.findByPk(id);
  res.json(com)
})

router.post("/", async(req, res)=>{
    const novo = req.body
    /*
    const idUserProfile = req.body.idUserProfile
    const idInstituicoes = req.body.instituicao
    const periodo = req.body.periodo
    const apresentador = req.body.apresentador
    const presenca = req.body.presenca
    const curso = req.body.curso
    */
    

    try {
        //const autor = await Autores.create(periodo,apresentador,presenca,curso)
        const autor = await Autores.create(novo)
        res.json(autor)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar Autores '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;
  /*
    const idUserProfile = req.body.idUserProfile
    const idInstituicoes = req.body.instituicao
    const periodo = req.body.periodo
    const apresentador = req.body.apresentador
    const presenca = req.body.presenca
    const curso = req.body.curso
    */
  try {
    const autor2 = await Autores.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (autor2[0] === 1) {
      res.json({ message: 'Autores atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Autores não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Autores ' + error.message });
  }
})


module.exports = router;

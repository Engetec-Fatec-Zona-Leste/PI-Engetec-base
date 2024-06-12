const express = require('express')
const router = express.Router()
const Ouvintes = require('../models/ouvinte');


router.get('/', async(req, res)=>{
    const Ouvintess = await Ouvintes.findAll();
    res.json(Ouvintess)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const Ouvintess = await Ouvintes.findByPk(id);
  res.json(Ouvintess)
})

router.post("/", async(req, res)=>{
    const novo = req.body

    try {
        const novoOuvintes = await Ouvintes.create(novo)
        res.json(novoOuvintes)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar Ouvintes '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;

  try {
    const OuvintesAtualizado = await Ouvintes.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (OuvintesAtualizado[0] === 1) {
      res.json({ message: 'Ouvintes atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Ouvintes não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Ouvintes ' + error.message });
  }
})


module.exports = router;

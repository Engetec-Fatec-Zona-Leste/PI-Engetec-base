const express = require('express')
const router = express.Router()
const Comissoes = require('../models/comissao');


router.get('/', async(req, res)=>{
    const com = await Comissoes.findAll();
    res.json(com)
})


router.get('/:id', async(req, res)=>{
  const id = req.params.id;
  const com = await Comissoes.findByPk(id);
  res.json(com)
})

router.post("/", async(req, res)=>{
    const novo = req.body

    try {
        const Covocomissoes = await Comissoes.create(novo)
        res.json(Covocomissoes)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao cadastrar Comissoes '+ error.message });
    }
})


router.put("/:id", async(req, res)=>{
    const id = req.params.id;
  const novosDados = req.body;

  try {
    const ComissoesAtualizado = await Comissoes.update(novosDados, {
      where: {
        id: id,
      },
    });

    if (ComissoesAtualizado[0] === 1) {
      res.json({ message: 'Comissoes atualizado com sucesso.' });
    } else {
      res.status(404).json({ error: 'Comissoes não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Comissoes ' + error.message });
  }
})


module.exports = router;

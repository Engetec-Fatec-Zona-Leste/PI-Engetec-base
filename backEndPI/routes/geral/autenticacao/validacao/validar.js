const express = require('express');
const {UserProfile, Admin, EditorChefes, Avaliadores, Instituicoes} = require("../../../../model/db");
const { where } = require('sequelize');
const router = express.Router();



router.get("/validar/avaliador", async (req, res) => {
  try {
    // Buscar todos os usuários onde o campo validado é false
    const avaliadores = await Avaliadores.findAll({
      where: {
        status: "Pendente" // Filtrar usuários com validado como false
      }
    });

    // Verifica se há usuários encontrados
    if (avaliadores.length === 0) {
      return res.status(404).json({ message: 'No users found with status as Pendente.' });
    }

    res.json(avaliadores); // Retorna a lista de usuários
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users', error: error.message });
  }
});



router.get("/validar/admin", async (req, res) => {
  try {
    // Buscar todos os usuários onde o campo validado é false
    const admin = await Admin.findAll({
      where: {
        status: "Pendente" // Filtrar usuários com validado como false
      }
    });

    // Verifica se há usuários encontrados
    if (admin.length === 0) {
      return res.status(404).json({ message: 'No users found with status as Pendente.' });
    }

    res.json(admin); // Retorna a lista de usuários
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users', error: error.message });
  }
});


router.get("/validar/editorchefe", async (req, res) => {
  try {
    // Buscar todos os usuários onde o campo validado é false
    const editorchefe = await EditorChefes.findAll({
      where: {
        status: "Pendente" // Filtrar usuários com validado como false
      }
    });

    // Verifica se há usuários encontrados
    if (editorchefe.length === 0) {
      return res.status(404).json({ message: 'No users found with status as Pendente.' });
    }

    res.json(editorchefe); // Retorna a lista de usuários
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'An error occurred while fetching users', error: error.message });
  }
});



router.post("/validar/admin", async (req, res) => {
    const userID = req.body.idUserProfiles; // Obter o ID do usuário do corpo da requisição
  
    try {
      // Buscar o usuário com o ID recebido
      const user = await UserProfile.findOne({ where: { id: userID } });
      const admin = await Admin.findOne({ where: { idUserProfiles: userID } });
  
      // Verifica se o usuário foi encontrado
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      if (!admin) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
  
      // Atualiza o campo 'validado' para true
      user.validado = true; // Supondo que 'validado' é o campo a ser atualizado
      admin.status = "Aprovado"
      await user.save(); // Salva as alterações no banco de dados
      await admin.save()
  
      res.json({ message: 'Usuário validado com sucesso!', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro ao validar o usuário.' });
    }
  });

  router.post("/validar/editorchefe", async (req, res) => {
    const userID = req.body.idUserProfiles; // Obter o ID do usuário do corpo da requisição
  
    try {
      // Buscar o usuário com o ID recebido
      const user = await UserProfile.findOne({ where: { id: userID } });
      const editorchefe = await EditorChefes.findOne({ where: { idUserProfiles: userID } });
  
      // Verifica se o usuário foi encontrado
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      if (!editorchefe) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
  
      // Atualiza o campo 'validado' para true
      user.validado = true; // Supondo que 'validado' é o campo a ser atualizado
      editorchefe.status = "Aprovado"
      await user.save(); // Salva as alterações no banco de dados
      await editorchefe.save()
  
      res.json({ message: 'Usuário validado com sucesso!', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro ao validar o usuário.' });
    }
  });



  router.post("/validar/avaliador", async (req, res) => {
    const userID = req.body.idUserProfiles; // Obter o ID do usuário do corpo da requisição
  
    try {
      // Buscar o usuário com o ID recebido
      const user = await UserProfile.findOne({ where: { id: userID } });
      const avaliador = await Avaliadores.findOne({ where: { idUserProfiles: userID } });
  
      // Verifica se o usuário foi encontrado
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      if (!avaliador) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
  
      // Atualiza o campo 'validado' para true
      user.validado = true; // Supondo que 'validado' é o campo a ser atualizado
      avaliador.status = "Aprovado"
      await user.save(); // Salva as alterações no banco de dados
      await avaliador.save();
  
      res.json({ message: 'Usuário validado com sucesso!', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro ao validar o usuário.' });
    }
  });


  router.get("/instituicao", async(req, res)=>{

    try {
      const instituicao = await Instituicoes.findAll({where: {status: "Pendente"}})

      res.json(instituicao)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ocorreu um erro ao carregar as instituicaoes' });
    }
  })

  router.post("/aprovar/instituicao", async (req, res) => {
    const { id } = req.body;
  
    // Verifica se o ID foi enviado
    if (!id) {
      return res.status(400).json({ message: "ID da instituição não fornecido." });
    }
  
    try {
      // Busca a instituição no banco
      const instituicao = await Instituicoes.findOne({ where: { id } });
  
      // Caso a instituição não seja encontrada
      if (!instituicao) {
        return res.status(404).json({ message: "Instituição não encontrada." });
      }
  
      // Atualiza o status da instituição
      instituicao.status = "Aprovado";
      await instituicao.save(); // Salva as alterações no banco
  
      // Retorna a instituição atualizada
      res.status(200).json({ message: "Instituição aprovada com sucesso.", instituicao });
    } catch (error) {
      console.error("Erro ao aprovar instituição:", error);
      res.status(500).json({ message: "Ocorreu um erro ao aprovar a instituição." });
    }
  });
  


  router.post("/recusar/instituicao", async(req, res)=>{
    const { id } = req.body;
  
    // Verifica se o ID foi enviado
    if (!id) {
      return res.status(400).json({ message: "ID da instituição não fornecido." });
    }
  
    try {
      // Busca a instituição no banco
      const instituicao = await Instituicoes.findOne({ where: { id } });
  
      // Caso a instituição não seja encontrada
      if (!instituicao) {
        return res.status(404).json({ message: "Instituição não encontrada." });
      }
  
      // Atualiza o status da instituição
      instituicao.status = "Recusada";
      await instituicao.save(); // Salva as alterações no banco
  
      // Retorna a instituição atualizada
      res.status(200).json({ message: "Instituição recusada com sucesso.", instituicao });
    } catch (error) {
      console.error("Erro ao aprovar instituição:", error);
      res.status(500).json({ message: "Ocorreu um erro ao recusar a instituição." });
    }
  })

  
  
module.exports = router
const express = require('express');
const router = express.Router();
const { ArquivoSubmetidos, Eventos, UserProfile, Autores } = require("../../model/db");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

// Função para garantir que o diretório exista
const ensureDirExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Função slugify para normalizar o nome do arquivo
function slugify(string) {
    return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/[^\w\-]+/g, '') // Remove caracteres não alfanuméricos
        .replace(/\-\-+/g, '-') // Remove múltiplos hífens
        .replace(/^-+/, '') // Remove hífen no início
        .replace(/-+$/, ''); // Remove hífen no final
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Aqui, presumo que você tenha o ID do usuário em algum lugar, por exemplo, req.user.id
        // Isso dependerá de como está estruturada a autenticação. Vou usar req.user.id como exemplo.
        const userId = req.user ? req.user.id : 'default-user'; // Ajuste conforme necessário

        // Definir o caminho como uploads/userid/arquivos
        const userDir = path.join('uploads', userId.toString(), 'arquivos');

        // Cria o diretório se não existir
        ensureDirExists(userDir);

        // Define o diretório final
        cb(null, userDir);
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${slugify(file.originalname)}${ext}`;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage });

// Função para gerar uma senha aleatória
const generateRandomPassword = () => {
    return crypto.randomBytes(8).toString('hex');
};

router.post('/:nomeURL/arquivos', upload.fields([
    { name: 'arquivoCompleto' },
    { name: 'arquivoSemAutoria' }
]), async (req, res) => {
    try {
        const autores = req.body.autores; // Certifique-se de que `autores` seja enviado corretamente no corpo da requisição
        const event = await Eventos.findOne({ where: { nomeURL: req.params.nomeURL } });

        if (!event) {
            return res.status(404).json({ message: 'Evento não encontrado' });
        }

        const data = {
            titulo: req.body.titulo,
            resumo: req.body.resumo,
            abstract: req.body.abstract,
            palavrasChaves: req.body.palavrasChaves,
            grandeAreas: req.body.grandeAreas,
            idAreas: req.body.area,
            arquivoCompleto: req.files.arquivoCompleto ? req.files.arquivoCompleto[0].path : null,
            arquivoSemAutoria: req.files.arquivoSemAutoria ? req.files.arquivoSemAutoria[0].path : null,
            status: req.body.status,
            idEventos: event.id // Associando o arquivo ao evento
        };

        // Criar o arquivo submetido
        await ArquivoSubmetidos.create(data);

        // Processar cada autor
        for (const autor of JSON.parse(autores)) {
            const { nome, instituicao, email, curso, periodo } = autor;

            // Gerar senha aleatória para o autor
            const senha = generateRandomPassword();

            // Criar um novo UserProfile
            const userProfile = await UserProfile.create({
                nome,
                email,
                senha
            });

            // Criar um novo Autor associado ao UserProfile
            await Autores.create({
                instituicao,
                curso,
                periodo,
                idUserProfile: userProfile.id
            });
        }

        res.status(201).json({ message: 'Arquivos e autores cadastrados com sucesso!' });

    } catch (error) {
        console.error('Erro ao processar arquivos ou cadastrar autores:', error);
        res.status(500).json({ error: 'Erro ao processar arquivos ou cadastrar autores: ' + error.message });
    }
});

module.exports = router;

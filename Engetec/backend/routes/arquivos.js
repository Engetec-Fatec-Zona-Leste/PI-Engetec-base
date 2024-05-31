const express  = require('express');
const router   = express.Router();
const arquivos = require('../models/arquivos');
function slugify(string) {
    return string
        .trim()
}
const multer   = require('multer');
const storage  = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const newFile = {
            originalname: slugify(file.originalname) 
        }
        cb(null, Date.now()+"-"+newFile.originalname)
    }
})
const upload = multer({ dest: 'uploads/', storage: storage })
router.get('/', async (req, res) => {
    const arquivo = await arquivos.findAll();
    res.json(arquivo)
});

router.post('/:idEvento', upload.fields([
    { name: 'ModeloArquivos'},
    { name: 'ModeloApresentacao'}
]),async (req,res)=>{
    const data = {

        idEvento:           req.params.idEvento,
        idCateroriaArquivos:      req.body. idCateroriaArquivos,
        NormasPublicacao:   req.body.NormasPublicacao,
        ModeloArquivos:      req.files.ModeloArquivos[0].path,
        ModeloApresentacao: req.files.ModeloApresentacao[0].path,
        Apresentacao:       req.body.Apresentacao,
    }

    res.json(data)


    try {
        const novo = await arquivo.create(data)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Arquivo '+ error.message });
    }
    
})

module.exports = router;
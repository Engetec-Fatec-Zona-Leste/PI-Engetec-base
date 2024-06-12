const express  = require('express');
const router   = express.Router();
const arquivoSub = require('../models/arquivos');
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

const uid = 1

const upload = multer({ dest: `uploads/${uid}/`, storage: storage })

 
router.get('/', async (req, res) => {
    const arquivo = await arquivoSub.findAll();
    res.json(arquivo)
});

router.post('/:idEvento', upload.fields([
    { name: 'arquivoCompleto'},
    { name: 'arquivoSemAutoria'}
]),async (req,res)=>{
    const data = {

        idEvento:           req.params.idEvento,
        idCateroriaArquivos:      req.body. idCateroriaArquivos,
        titulo:   req.body.titulo,
        resumo:      req.body.resumo,
        abstract:      req.body.abstract,
        palavrasChaves:      req.body.palavrasChaves,
        keyWords:      req.body.keyWords,
        arquivoCompleto: req.files.arquivoCompleto[0].path,
        arquivoSemAutoria: req.files.arquivoSemAutoria[0].path,
        Apresentacao:       req.body.Apresentacao,
    }

    res.json(data)


    try {
        const novo = await arquivoSub.create(data)
        res.json(novo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar Arquivo '+ error.message });
    }
    
})

module.exports = router;
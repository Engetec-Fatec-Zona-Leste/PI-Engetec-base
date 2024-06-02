const express = require('express')
const app     = express()
const db      = require('./models')
const cors    = require('cors')
const path    = require('path');

app.use(express.json())
app.use(cors())

app.use("/uploads", express.static('uploads'));

// http://localhost:3001/public/dall-e-2.webp


//Rotas
const arquivos = require('./routes/arquivos')
app.use("/arquivos", arquivos)

//const tipoArquivo = require('./routes/tipoArquivo')
//app.use("/tipoArquivo", tipoArquivo)

const atividades = require('./routes/atividade')
app.use("/atividade", atividades)

const evento = require('./routes/evento')
app.use("/evento", evento)
app.use("/evento:idEvento", evento)

const eventApoiador = require('./routes/eventApoiador')
app.use("/eventApoiador", eventApoiador)

const ouvinte = require('./routes/ouvinte')
app.use("/ouvinte", ouvinte)
app.use("/ouvinte/:idOuvinte", ouvinte)

const comissao = require('./routes/comissao')
app.use("/comissao", comissao)
app.use("/comissao/:idComissao", comissao)

//const CorpoEditorial = require('./routes/CorpoEditorial')
//app.use("/CorpoEditorial", CorpoEditorial)
//app.use("/CorpoEditorial/:idCorpoEditorial", CorpoEditorial)

//const CorpoEditorialEventos = require('./routes/corpoEditorialEventos')
//app.use("/CorpoEditorialEventos", CorpoEditorialEventos)
//app.use("/CorpoEditorialEventos/:id", CorpoEditorialEventos)

const editorChefe = require('./routes/editorChefe')
app.use("/editorChefe", editorChefe)
app.use("/editorChefe/:idEditorChefe", editorChefe)

const convidado = require('./routes/cadastroConvidado')
app.use("/convidado", convidado)
app.use("/convidado/:idConvidado", convidado)

const instituicao = require('./routes/instuicao')
app.use("/instituicao", instituicao)

const presencial = require('./routes/presencial')
app.use("/presencial", presencial)

const subAreas = require('./routes/subAreas')
app.use("/subAreas", subAreas)

const userProfile = require('./routes/userProfile')
app.use("/userProfile", userProfile)

db.sequelize.sync().then(()=>{
    app.listen(3001,()=>{
        console.log("Server running on port 3001")
    })
})


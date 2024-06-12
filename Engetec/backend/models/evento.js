
const db = require('./index');

const Eventos = db.sequelize.define("Eventos",{
    idEvento:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },
    assuntoPrincipal:{
        type: db.Sequelize.STRING
    },
    emailEventos:{
        type: db.Sequelize.STRING
    },
    datainicio :{
        type: db.Sequelize.STRING
    },
    dataFinal :{
        type: db.Sequelize.STRING
    },
    horarioInicio :{
        type: db.Sequelize.STRING
    },
    horarioFinal :{
        type: db.Sequelize.STRING
    },
    manha:{
        type: db.Sequelize.BOOLEAN
    },
    tarde:{  
        type: db.Sequelize.BOOLEAN
    },
    noite:{
        type: db.Sequelize.BOOLEAN
    },
    status :{
        type: db.Sequelize.STRING
    },
    publico :{
        type: db.Sequelize.BOOLEAN
    },
    formato :{
        type: db.Sequelize.STRING
    },
    proceedings :{
        type: db.Sequelize.BOOLEAN
    },
    certificados :{
        type: db.Sequelize.BOOLEAN
    },
    logo :{
        type: db.Sequelize.STRING
    },
    idEditorChefe:{
        type: db.Sequelize.INTEGER
    },
    inicioSubmissao:{
        type: db.Sequelize.STRING
    },
    finalSubmissao:{
        type: db.Sequelize.STRING
    },
    limiteArquivosAutores:{
        type: db.Sequelize.INTEGER
    },
    limiteAutores:{
        type: db.Sequelize.INTEGER
    },
    limiteAvaliadores:{
        type: db.Sequelize.INTEGER
    },
    modeloApresentacao:{
        type: db.Sequelize.STRING
    }
})

module.exports = Eventos;
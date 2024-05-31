const db = require('./index');

const Arquivos = db.sequelize.define("Arquivos",{
    idArquivos:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idCategoriaArquivos:{
        type: db.Sequelize.INTEGER
    },
    idEventos:{
        type: db.Sequelize.INTEGER
    },
    normasPublicacao :{
        type: db.Sequelize.STRING
    },
     modeloArquivos:{
        type: db.Sequelize.STRING
    },
    modeloApresentacao:{
        type: db.Sequelize.STRING
    },
    apresentacao:{
        type: db.Sequelize.BOOLEAN
    },
    avaliacao:{
        type: db.Sequelize.BOOLEAN
    }
})

module.exports = Arquivos;
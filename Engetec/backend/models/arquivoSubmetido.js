const db = require('./index');

const Arquivos = db.sequelize.define("Arquivos",{
    idArquivSubmetidos:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idCategoriaArquivo:{
        type: db.Sequelize.INTEGER
    },
    idEvento:{
        type: db.Sequelize.INTEGER
    },
    titulo :{
        type: db.Sequelize.STRING
    },
     resumo:{
        type: db.Sequelize.STRING
    },
    abstract:{
        type: db.Sequelize.STRING
    },
    palavrasChaves:{
        type: db.Sequelize.STRING
    },
    keyWords:{
        type: db.Sequelize.STRING
    },
    arquivoCompleto:{
        type: db.Sequelize.STRING
    },
    arquivoSemAutoria:{
        type: db.Sequelize.STRING
    },
    status:{
        type: db.Sequelize.STRING
    }
})

module.exports = Arquivos;
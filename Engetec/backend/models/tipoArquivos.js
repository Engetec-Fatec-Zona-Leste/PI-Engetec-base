const db = require("./index")

const tipoArquivos = db.sequelize.define("TipoArquivos", {
    idTipoArquivos:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.TEXT
    }
})


module.exports = tipoArquivos;
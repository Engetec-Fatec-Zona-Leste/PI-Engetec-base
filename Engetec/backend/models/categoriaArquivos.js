const db = require("./index")

const CatogoriaArquivos = db.sequelize.define("CatogoriaArquivos", {
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    }
})

module.exports = CatogoriaArquivos
const db = require("./index")

const ArquivoEspecialidades = db.sequelize.define("ArquivoEspecialidades",{
    idArquivoEspecialidades:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idArquivo:{
        type: db.Sequelize.INTEGER
    },
    idEspecialidades:{
        type: db.Sequelize.INTEGER
    }
})

module.exports = ArquivoEspecialidades
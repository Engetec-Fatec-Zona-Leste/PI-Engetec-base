const db = require("./index")

const certificadosAutores = db.sequelize.define("certificadosAutores", {
    idArquivosSubmetidos:{
        type: db.Sequelize.STRING
    },
    idAutor:{
        type: db.Sequelize.STRING
    },
    //tem mais dps 

})

module.exports = certificadosAutores
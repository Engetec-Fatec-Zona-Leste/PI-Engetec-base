const db = require("./index")

const AutorArquivos = db.sequelize.define("AutorArquivos",{
    idAutorArquivo:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idAutor:{
        type: db.Sequelize.INTEGER
    },
    idArquivo:{
        type: db.Sequelize.INTEGER
    }
})

module.exports = AutorArquivos
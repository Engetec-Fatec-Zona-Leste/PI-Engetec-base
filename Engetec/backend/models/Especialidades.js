const db = require("./index")

const Especialidades = db.sequelize.define("Especialidades", {
    idEspecialidades:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idSubAreas:{
        type: db.Sequelize.INTEGER
    },
    /*
    idGrandeArea:{
        type: db.Sequelize.INTEGER
    },
    idArea:{
        type: db.Sequelize.INTEGER
    },
    */
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    }
})


module.exports = Especialidades

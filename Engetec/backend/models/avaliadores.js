const db = require("./index")

const Avaliadores = db.sequelize.define("Avaliadores", {
    idAvaliadores:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idUserProfiles:{
        type: db.Sequelize.INTEGER,
    },
    idInstituicoes:{
        type: db.Sequelize.INTEGER,
    },
    idAreaConhecimento:{
        type: db.Sequelize.INTEGER,
    },
    linkLattes:{
        type: db.Sequelize.STRING,
    },
    status:{
        type: db.Sequelize.STRING,
    }
})


module.exports = Avaliadores

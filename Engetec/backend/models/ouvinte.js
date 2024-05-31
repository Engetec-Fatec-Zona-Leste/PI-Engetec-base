const db = require("./index")

const Ouvintes = db.sequelize.define("Ouvintes", {
    idOuvinte:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    curso:{
        type: db.Sequelize.STRING
    },
    periodo:{
        type: db.Sequelize.STRING
    },
    presenca:{
        type: db.Sequelize.INTEGER
    },
    idUserProfile:{
        type: db.Sequelize.INTEGER
    },
    idInstituicao:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = Ouvintes
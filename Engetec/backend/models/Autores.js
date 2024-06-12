const db = require("./index")

const Autores = db.sequelize.define("Autores", {
    idAutores:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idUserProfiles:{
        type: db.Sequelize.INTEGER,
    },
    idInstituicoes:{
        type: db.Sequelize.INTEGER,
    },
    periodo:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    apresentador:{
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    presenca:{
        type: db.Sequelize.BOOLEAN,
        allowNull: false
    },
    curso:{
        type: db.Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Autores

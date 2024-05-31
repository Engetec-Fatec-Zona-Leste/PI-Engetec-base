const db = require('./index');

const Comissoes = db.sequelize.define("Comissoes", {
    linkLattes: {
        type: db.Sequelize.STRING
    },
    periodo: {
        type: db.Sequelize.STRING
    },
    status: {
        type: db.Sequelize.STRING
    },
    organizador: {
        type: db.Sequelize.INTEGER
    },
    chair: {
        type: db.Sequelize.INTEGER
    },
    idUserProfile: {
        type: db.Sequelize.INTEGER
    },
    idEvento: {
        type: db.Sequelize.INTEGER
    },
    idInstituicao: {
        type: db.Sequelize.INTEGER
    }
})

module.exports = Comissoes;
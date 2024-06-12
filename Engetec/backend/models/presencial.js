const db = require("./index")

const Presenciais = db.sequelize.define("Presenciais", {
    cep:{
        type: db.Sequelize.STRING
    },
    estado:{
        type: db.Sequelize.STRING
    },
    local:{
        type: db.Sequelize.STRING
    },
    cidade:{
        type: db.Sequelize.STRING
    },
    idEvento:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = Presenciais
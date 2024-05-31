const db = require("./index")

const Atividades = db.sequelize.define("Atividades", {
    titulo:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },
    dia:{
        type: db.Sequelize.STRING
    },
    horario:{
        type: db.Sequelize.STRING
    }  
})

module.exports = Atividades
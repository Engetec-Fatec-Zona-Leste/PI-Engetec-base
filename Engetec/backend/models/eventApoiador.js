const db = require("./index")

const EventApoiadores = db.sequelize.define("EventApoiadores", {
    idEvento:{
        type: db.Sequelize.INTEGER
    },
    idApoiador:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = EventApoiadores
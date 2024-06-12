const db = require("./index")

const CorpoEditorialEventos = db.sequelize.define("CorpoEditorialEventos", {
    idCorpoEditorialEventos :{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idEventos:{
        type: db.Sequelize.INTEGER
    },
    idCorpoEditoriais:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = CorpoEditorialEventos
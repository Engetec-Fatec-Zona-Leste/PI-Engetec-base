const db = require("./index")

const Apoiadores = db.sequelize.define("Apoiadores",{
    nome:{
       
        type: db.Sequelize.STRING
    },
  
})

module.exports = Apoiadores;
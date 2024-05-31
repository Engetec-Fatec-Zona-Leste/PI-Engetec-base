const db = require('./index');

const CorpoEditorial = db.sequelize.define("CorpoEditorial",{
    idCorpoEditorial:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome :{
        type: db.Sequelize.STRING
    },
    descricao :{
        type: db.Sequelize.STRING
    }
    
})

module.exports = CorpoEditorial;
const db = require("./index")

const AreaConhecimentos = db.sequelize.define("AreaConhecimentos",{
    idArea:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idGrandeAreas:{
        type: db.Sequelize.INTEGER
    },
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    },

});


module.exports = AreaConhecimentos;

const db = require("./index")

const GrandeAreas = db.sequelize.define("GrandeAreas",{
    idGrandeAreas:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    /*GrandeArea:{
        type: db.Sequelize.STRING
    }   
    */
    nome:{
        type: db.Sequelize.STRING
    },
    descricao:{
        type: db.Sequelize.STRING
    }

});


module.exports = GrandeAreas;

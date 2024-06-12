const db = require('./index');

const AvaliadorSubareas = db.sequelize.define("AvaliadorSubareas",{
    idAvaliadorSubareas:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    idAvaliadores :{
        type: db.Sequelize.INTEGER
    },
    idSubAreas :{
        type: db.Sequelize.INTEGER
    }
    
})

module.exports = AvaliadorSubareas;
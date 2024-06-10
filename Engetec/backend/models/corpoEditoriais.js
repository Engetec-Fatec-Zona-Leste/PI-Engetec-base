const db = require('./index');

const CorpoEditoriais = db.sequelize.define("CorpoEditoriais",{
    idCorpoEditoriais:{
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

module.exports = CorpoEditoriais;
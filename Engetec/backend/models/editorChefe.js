const db = require("./index")

const Editorchefes = db.sequelize.define("EditorChefes", {
    idEditorChefe:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    linkLattes:{
        type: db.Sequelize.STRING
    },
    status:{
        type: db.Sequelize.STRING
    },
    idInstituicao:{
        type: db.Sequelize.INTEGER
    },
    idUserProfile:{
        type: db.Sequelize.INTEGER
    }
})


module.exports = Editorchefes
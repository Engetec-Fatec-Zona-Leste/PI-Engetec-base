const db = require("./index")

const UserProfiles = db.sequelize.define("UserProfiles", {
    idUserProfile:{
        type: db.Sequelize.INTEGER,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    cargo:{
        type: db.Sequelize.STRING
    }
})


module.exports = UserProfiles
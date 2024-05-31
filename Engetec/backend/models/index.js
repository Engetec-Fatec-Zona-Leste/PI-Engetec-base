const Sequelize = require("sequelize")
const sequelize = new Sequelize("Eventec", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
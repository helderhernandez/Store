const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    "storedb",
    "userApi",
    "userApi",
    { host: "localhost", dialect: "mysql" },
)
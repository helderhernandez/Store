const { Sequelize } = require("sequelize");
const dbSequelize = require("../../config/database.config")

const VentaEntity = dbSequelize.define(
    "ventas",
    {
        codigo: { type: Sequelize.UUID, primaryKey: true },
        productoId: { type: Sequelize.UUID },
        cantidad: { type: Sequelize.INTEGER },
    },
    { timestamps: false }
)

module.exports = VentaEntity
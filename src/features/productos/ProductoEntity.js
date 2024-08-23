const { Sequelize } = require("sequelize");
const dbSequelize = require("../../config/database.config")

const ProductoEntity = dbSequelize.define(
    "productos",
    {
        codigo: { type: Sequelize.UUID, primaryKey: true },
        precioUnitario: { type: Sequelize.DECIMAL(7,2) },
        descuento: { type: Sequelize.INTEGER },
        existencia: { type: Sequelize.INTEGER }
    },
    { timestamps: false }
)

module.exports = ProductoEntity
const VentaEntity = require("./VentaEntity")
const { v4: uuidv4 } = require('uuid');

async function findAll() {
    return await VentaEntity.findAll();
}

async function findOneById(codigo) {
    return await VentaEntity.findOne({ where: { codigo: codigo } })
}

async function save(venta) {
    const newVenta = {
        codigo: uuidv4(),
        productoId: venta.productoId,
        cantidad: venta.cantidad,
        existencia: venta.cantidad
    }

    return await VentaEntity.create(newVenta);
}

module.exports = {
    findAll,
    findOneById,
    save
}
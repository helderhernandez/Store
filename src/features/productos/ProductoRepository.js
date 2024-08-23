const ProductoEntity = require("./ProductoEntity")
const { v4: uuidv4 } = require('uuid');

async function findAll() {
    return await ProductoEntity.findAll();
}

async function findOneById(codigo) {
    return await ProductoEntity.findOne({ where: { codigo: codigo } })
}

async function save(producto) {
    const newProducto = {
        codigo: uuidv4(),
        precioUnitario: producto.precioUnitario,
        descuento: producto.descuento,
        existencia: producto.existencia
    }

    return await ProductoEntity.create(newProducto);
}

async function update(codigo, body) {
    const updateProducto = {
        codigo: codigo,
        precioUnitario: body.precioUnitario,
        descuento: body.descuento,
    }

    await ProductoEntity.update(
        updateProducto,
        { where: { codigo: codigo } }
    )

    return await ProductoEntity.findOne({ where: { codigo: codigo } })
}

async function updateStock(codigo, body) {
    const updateProducto = {
        codigo: codigo,
        existencia: body.existencia
    }

    await ProductoEntity.update(
        updateProducto,
        { where: { codigo: codigo } }
    )

    return await ProductoEntity.findOne({ where: { codigo: codigo } })
}

module.exports = {
    findAll,
    findOneById,
    save,
    update,
    updateStock
}
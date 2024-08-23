const ventaRepository = require("./VentaRepository")
const productoRepository = require("../productos/ProductoRepository")

async function findAll() {
    return await ventaRepository.findAll();
}

async function findOneById(codigo) {
    return await ventaRepository.findOneById(codigo);
}

async function save(venta) {
    // 1. insertar la venta
    const result = await ventaRepository.save(venta)

    // 2. actualizacion: descargar en el inventario
    const upProducto = await productoRepository.findOneById(result.productoId)
    const newExistencia = upProducto.existencia - venta.cantidad
    productoRepository.updateStock(result.productoId, { existencia: newExistencia })

    return result
}

module.exports = {
    findAll,
    findOneById,
    save
}
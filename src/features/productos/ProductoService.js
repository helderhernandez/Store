const productoRepository = require("./ProductoRepository")

async function findAll() {
    return await productoRepository.findAll();
}

async function findOneById(codigo) {
    return await productoRepository.findOneById(codigo);
}

async function save(producto) {
    return await productoRepository.save(producto)
}

async function update(codigo, body) {
    return await productoRepository.update(codigo, body)
}

async function updateStock(codigo, body) {
    return await productoRepository.updateStock(codigo, body)
}


module.exports = {
    findAll,
    findOneById,
    save,
    update,
    updateStock
}
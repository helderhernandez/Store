const ventaRepository = require("./VentaRepository")

async function findAll() {
    return await ventaRepository.findAll();
}

async function findOneById(codigo) {
    return await ventaRepository.findOneById(codigo);
}

async function save(producto) {
    return await ventaRepository.save(producto)
}

module.exports = {
    findAll,
    findOneById,
    save
}
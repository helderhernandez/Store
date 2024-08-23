// imports
const express = require("express")
const productoService = require("./ProductoService")

const productoRouter = express.Router();

productoRouter.get("/", async (req, res) => {
    const productos = await productoService.findAll()
    res.status(200).json(productos)
})

productoRouter.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo
    const producto = await productoService.findOneById(codigo)
    res.status(200).json(producto)
})

productoRouter.post("/", async (req, res) => {
    const body = req.body
    const producto = await productoService.save(body)

    res.status(201).json(producto)
})

productoRouter.put("/:codigo", async (req, res) => {
    const codigo = req.params.codigo
    const body = req.body
    const producto = await productoService.update(codigo, body)

    res.status(200).send(producto)
})

productoRouter.patch("/:codigo/existencias", async (req, res) => {
    const codigo = req.params.codigo
    const body = req.body
    const producto = await productoService.updateStock(codigo, body)

    res.status(200).send(producto)
})

module.exports = productoRouter
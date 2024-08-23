// imports
const express = require("express")
const ventaService = require("./VentaService")

const ventaRouter = express.Router();

ventaRouter.get("/", async (req, res) => {
    const ventas = await ventaService.findAll()
    res.status(200).json(ventas)
})

ventaRouter.get("/:codigo", async (req, res) => {
    const codigo = req.params.codigo
    const venta = await ventaService.findOneById(codigo)
    res.status(200).json(venta)
})

ventaRouter.post("/", async (req, res) => {
    const body = req.body
    const venta = await ventaService.save(body)

    res.status(201).json(venta)
})

module.exports = ventaRouter
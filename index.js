// Imports
const express = require("express")
const dbSequelize = require("./src/config/database.config.js")
const productoRouter = require("./src/features/productos/ProductoRouter.js")

// Variables
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
app.get("/", (req, res) => {
    res.send("Store - Prueba tecnica desarrollada por Helder Hernandez")
})
app.use("/productos", productoRouter)

// Authenticate DB
try {
    dbSequelize.authenticate();
    console.log("DB Authenticate OK");
} catch (error) {
    console.log("DB Authenticate error");
    console.log(error);
}

// Start server
app.listen(3000, () => {
    console.log("Start API OK")
})
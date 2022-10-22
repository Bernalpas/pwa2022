

const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Tenemos dos Rutas: /home y /productos`)
});

app.post('/productos', (req, res) => {

    const {nombreProducto, precioProducto } = req.body;
    console.log(`Los productos enviados son ${nombreProducto} y el precio es ${precioProducto}`);
    res.send(`Tus Productos han sido guardados`);
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
})
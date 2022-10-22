
const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

const routesProductos = require('./routes/routerProductos');

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Configuración a Motores de Plantillas


//Rutas
app.use('/api/productos', routesProductos);

app.get('/', (req, res) => {
    res.send(`Bienvenido a la App Producto`)
});

app.listen(PORT, () => {
    console.log(`App trabajando en el Puerto ${PORT}`);
})



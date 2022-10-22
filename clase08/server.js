const express = require('express');
const cors = require('cors');
const compression = require('compression');
//rutas

const usuarioRouter = require('./routes/usuarioRouter');
//const routerProductos = require('./routes/productos');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

app.use('/user', usuarioRouter);
//app.use('/productos', require('./routes/productos'));

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenido a la Apicación con Mongoose</h1>`)
});


module.exports = app;





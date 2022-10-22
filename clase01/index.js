
//import express from 'express';
const express = require('express');
const path = require('path');
const router = require('./routes/home');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//Variables de la rutas
const routerHome = require('./routes/home');
const routerProductos = require('./routes/productos');


app.use(express.json());


app.get('/', (req, res) => {
    res.send(`Tenemos dos Rutas: /home y /productos`)
});

app.use('/home', routerHome);
app.use('/productos', require('./routes/productos'));


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
})





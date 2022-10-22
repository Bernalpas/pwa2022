
const knex = require('../db/conexion');

const formularioProducto = (req, res) => {
    res.send(`Te envío el Formulario para que lo completes`)
}

const selectProducto = (req, res) => {
    knex.select('*')
    .from('productos')
    .then((response) => {
        for (row of response) {
            console.log(`${row['nombre']} - ${row['descripcion']}`);            
        }
        res.send(`Te muestro los productos`)
    })
    .catch((err) => {
        console.log(`${err}`);
    })
}

const crearProducto = (req, res) => {
    //Traemos las variables
    const { nombre, descripcion, stock } = req.body;

    //Hacer alguna validación
    if (nombre == "" || descripcion == "" || stock == "") {
        res.send(`Por favor llenar las características del Producto`)
    } else {
        knex('productos').insert({
            nombre,
            descripcion,
            stock
        })
        .then(() => {
            res.send(`Producto Creado con los datos: ${nombre} - ${descripcion} - ${stock}`);
        })
        .catch(error =>{
            throw error
        })
    }
}

const actualizarProducto = (req, res) => {

    const { nombre, descripcion, stock } = req.body;

    knex('productos')
        .where({ id: req.params.id})
        .update({
            nombre: nombre,
            descripcion: descripcion,
            stock: stock
        })
        .then(() => {
            res.send(`Producto Modificado con los datos: ${nombre} - ${descripcion} - ${stock}`);
        })
        .catch(error =>{
            throw error
        })
}


const eliminarProducto = (req, res) => {

    knex('productos')
    .where({ id: req.params.id})
    .del()
    .then(() => {
        res.send(`Producto Eliminado Correctamente`);
    })
    .catch(error =>{
        throw error
    })
}



module.exports = {
    formularioProducto,
    selectProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}
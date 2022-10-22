

const bienvenidaProductos = (req, res) => {
    res.send(`Buenas noches, bienvenido a la Productos`)
}


const listadoProductos = (req, res) => {
    res.send(`Somos los productos`)
}


const guardarProductos = (req, res) => {

    const {nombreProducto, precioProducto } = req.body;

    console.log(`Los productos enviados son ${nombreProducto} y el precio es ${precioProducto}`);

    res.send(`Tus Productos han sido guardados`);
}

module.exports = {
    bienvenidaProductos,
    listadoProductos,
    guardarProductos
}
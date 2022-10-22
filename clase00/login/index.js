
const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

const routesUser = require('./routes/routerUser');

// Middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/user', routesUser);

app.get('/', (req, res) => {
    res.send(`Bienvenido a la App Producto`)
});

app.listen(PORT, () => {
    console.log(`App trabajando en el Puerto ${PORT}`);
});

app.on('error', (err) =>{
    console.log(`Nuestos devs no tardarán en solucionarlo!! ${err}`);
})

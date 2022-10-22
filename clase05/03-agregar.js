

const fs = require('fs');

fs.appendFileSync('./miArchivo.txt', 'Este contenido lo agrego al texto existente en el archivo');




const data = 'Agregar datos con un callback\n';
fs.appendFile('./miArchivo.txt', `${data}`, (error) => {
    if (error) {
        throw error;
    }else{
        console.log('data:', data);
    }
});


//Este es un Callback: una función que recibe como parámetro a otra función y la ejecuta
function miFuncion(callback) {
    callback()
}

function escribir(){
    console.log('Hola, soy una función');
}

miFuncion(escribir);

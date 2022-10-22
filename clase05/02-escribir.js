

const fs = require('fs');

fs.writeFileSync('./miArchivo.txt', 'Veamos si encuentra el archivo y lo puede escribir!!');


const data = 'Mi historia para la escritura del archivo es esta';
fs.writeFileSync('./mihistoria.txt', `${data}`);



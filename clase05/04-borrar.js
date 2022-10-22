

const fs = require('fs');

fs.unlinkSync('./archivo.txt');

fs.unlink('./miArchivo.txt', (error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Archivo eliminado`);
    }
})
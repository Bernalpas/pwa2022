
const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/';

Mongo.connect(URL, (error, db) => {
    if (error) throw error;

    const dbo = db.db('pwa');

    const consulta = {
        nombre: 'Juan'
    }

    dbo.collection('eliminado').insertOne(consulta, (err, res) => {
        if (error) throw error;
        console.log('Inserción de Datos correcta - 1 Doc.');
        db.close();
    });

    dbo.collection('profesores').deleteOne(consulta, (error, res) => {
        if (error) throw error;
        console.log(`Registro eliminado: ${consulta}`);
        console.log('==========================');
    });
    
    //db.close();
});
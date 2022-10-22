

const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/';

Mongo.connect(URL, (error, db) => {
    if (error) throw error;

    const dbo = db.db('pwa')

    //creamos la colección
    dbo.createCollection('profesores', (err, collection) => {
        if (error) throw error;
        console.log('Colección de Datos Creada');
        db.close();
    });

    dbo.createCollection('cursos', (err, collection) => {
        if (error) throw error;
        console.log('Colección de Datos Creada');
        db.close();
    });

    dbo.createCollection('alumnos', (err, collection) => {
        if (error) throw error;
        console.log('Colección de Datos Creada');
        db.close();
    });

});
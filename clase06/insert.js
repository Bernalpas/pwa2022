
const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/';

Mongo.connect(URL, (error, db) => {
    if (error) throw error;

    const dbo = db.db('pwa')

    const data = {
        nombre: 'Santiago',
        curso: 'Fullstack',
        pais: 'Argentina'
    }

    const datauno = {
        nombre: 'Juan',
        curso: 'React',
        pais: 'Argentina'
    }

    const datados = [
        {
            nombre: 'Axel',
            curso: 'Angular',
            pais: 'Argentina'
        },
        {
            nombre: 'Axel',
            curso: 'Angular',
            pais: 'Argentina'
        },
        {
            nombre: 'Axel',
            curso: 'Angular',
            pais: 'Argentina'
        },
    ]

    //insertamos datos a la colección
    dbo.collection('profesores').insertOne(data, (err, res) => {
        if (error) throw error;
        console.log('Inserción de Datos correcta - 1 Doc.');
        db.close();
    });

});
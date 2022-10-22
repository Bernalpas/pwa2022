

const Mongo = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/';

Mongo.connect(URL, (error, db) => {
    if (error) throw error;

    const dbo = db.db('pwa')

    const data = [
        {
            curso: 'Angular',
            pais: 'Argentina'
        },
        {
            curso: 'Angular',
            pais: 'Chile'
        },
        {
            curso: 'Angular',
            pais: 'Brasil'
        },
    ]

    //insertamos datos a la colección
    dbo.collection('cursos').insertMany(data, (err, res) => {
        if (error) throw error;
        console.log('Inserción de Datos correcta');
        db.close();
    });

});
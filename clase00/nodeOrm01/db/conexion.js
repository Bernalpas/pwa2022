

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : 'berni',
        database : 'ejercicio'
    }
});


knex.schema.hasTable('productos').then(function(exists) {
    if (!exists) {
            return knex.schema.createTable('productos', function(t) {
            t.increments('id').primary();
            t.string('nombre', 100);
            t.string('descripcion', 100);
            t.integer('stock', 20);
        });
    }
});


module.exports = knex;






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


knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
            return knex.schema.createTable('users', function(t) {
            t.increments('id').primary();
            t.string('username', 100);
            t.string('password', 100);
        });
    }
});


module.exports = knex;




const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'rehanqasim',
    password: 'rehanqasim',
    database: 'ecomstore'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error getting connection:', err);
        return;
    }

    // Perform operations with the connection
    connection.query('SELECT * FROM users', (error, results) => {
        connection.release(); // Release the connection back to the pool
        if (error) {
            console.error('Error executing query:', error);
            return;
        }
        console.log('Query results:', results);
    });
});
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise'); // Using the promise-based version for async/await
const app = express();
app.use(cors());



// Create a pool to manage connections
const pool = mysql.createPool({
    host: 'localhost',
    user: 'rehanqasim',
    password: 'rehanqasim',
    database: 'ecomstore'
});

// Route to fetch data from the 'users' table
app.get('/users', async (req, res) => {
    try {
        let resObj = {}
        // Acquire a connection from the pool
        const connection = await pool.getConnection();

        // Query to select all rows from the 'users' table
        const [rows, fields] = await connection.query('SELECT * FROM users');

        // Release the connection back to the pool
        connection.release();

        resObj = {
            users: rows,
            total: rows.length
        }
        // Send the fetched data as a JSON response
        res.json(resObj);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the Express server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/users`);
});

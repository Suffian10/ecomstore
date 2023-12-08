const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
const port = 3001;

const pool = mysql.createPool({
    host: 'localhost',
    user: 'Suffian',
    password: '',
    database: 'ecomstore'
});

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// POST request handler for '/cart' endpoint
app.post('/cart', async (req, res) => {
    // Retrieve data from the request body
    const { product, userId } = req.body;
    console.log("At the backend, the data received:", product);
    
    // Your database logic here...

    try {
        // Acquire a connection from the pool
        const connection = await pool.getConnection();

        // Query to select all rows from the 'users' table
        const [rows, fields] = await connection.query('SELECT * FROM users');

        // Release the connection back to the pool
        connection.release();

        const resObj = {
            users: rows,
            total: rows.length
        };

        // Send the fetched data as a JSON response
        res.json(resObj);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

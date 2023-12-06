// products.js

const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

// Create a pool to manage connections
const pool = mysql.createPool({
    host: 'localhost',
    user: 'Suffian',
    password: '',
    database: 'ecomstore'
});

// Endpoint to fetch product information
router.get('/', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows, fields] = await connection.query('SELECT * FROM Products');
        connection.release();

        res.json(rows);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

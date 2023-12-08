const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
const app = express();
const productsRouter = require('./products');
app.use(cors());
app.use(express.json());

// Create a pool to manage connections
const pool = mysql.createPool({
    host: 'localhost',
    user: 'Suffian',
    password: '',
    database: 'ecomstore'
});

app.use('/products', productsRouter);
app.post('/login', async (req, res) => {
    let connection;  // Declare connection variable outside the try block
    try {
        // Retrieve data from the request body
        const { email, password } = req.body;

        // Acquire a connection from the pool
        connection = await pool.getConnection();

        // Query to select rows from the 'users' table
        const [rows, fields] = await connection.query('SELECT user_name FROM users WHERE user_email = ? AND user_password = ?', [email, password]);

        // Perform authentication logic
        if (rows.length > 0) {
            // Successful authentication
            res.status(200).json({ message: 'Login successful!' });
        } else {
            // Failed authentication
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        // Release the connection back to the pool
        if (connection) connection.release();
    }
});

// Route to fetch data from the 'users' table
app.get('/users', async (req, res) => {
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

app.post('/cart', async (req, res) => {
    // Retrieve data from the request body
    const { product, userId, quant } = req.body;
    console.log("At the backend, the data received:", product);

    // Your database logic here...

    try {
        // Acquire a connection from the pool
        const connection = await pool.getConnection();

        // Query to select all rows from the 'users' table
        const order_id = Math.floor(Math.random() * 900000) + 100000;
        const product_id = product.product_id;
        const quantity = quant;
        const subtotal = product.porduct_price * quant;

        // Assuming order_id, userId, and subtotal are variables with the appropriate values
        await connection.query(
            'INSERT INTO orders (order_id,user_id, total_amount) VALUES (?, ?, ?)',
            [order_id, userId, subtotal]
        );

        // Assuming order_id, product_id, quantity, and subtotal are variables with the appropriate values
        await connection.query(
            'INSERT INTO orderitems (order_id, product_id, quantity, subtotal) VALUES (?, ?, ?, ?)',
            [order_id, product_id, quantity, subtotal]
        );


        // Release the connection back to the pool
        connection.release();

        res.json({ message: 'Successfully confirmed' });
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the Express server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

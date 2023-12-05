const mysql = require('mysql2');
const _env = require('dotenv')
_env.config()
const ENV = process.env


// MySQL database configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Suffian',
    password: '',
    database: 'ecomstore'
});

// Sample user data
const users = [
    {username: 'john_doe', email: 'john@gmail.com', password: 'password123' },
    {username: 'jane_smith', email: 'jane@gmail.com', password: 'pass456' },
    {username: 'alice_wonder', email: 'alice@gmail.com', password: 'alicepass789' },
    {username: 'bob_marley', email: 'bob@gmail.com', password: 'bobpass' },
    {username: 'emma_jones', email: 'emma@gmail.com', password: 'emmapassword' }
];

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    // Insert user data into the users table
    const sql = 'INSERT INTO users (user_name, user_email, user_password) VALUES ?';
    const values = users.map(user => [user.username, user.email, user.password]);

    connection.query(sql, [values], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log(`${results.affectedRows} records inserted`);
        }

        // Close the connection
        connection.end();
    });
});


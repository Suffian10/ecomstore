const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON requests
app.use(express.json());

// POST request handler for '/login' endpoint
app.post('/login', (req, res) => {
    // Retrieve data from the request body
    const { email, password } = req.body;

    // Perform authentication logic (mock example)
    if (email === 'msuffiansoomro@gmail.com' && password === '10102003mss') {
        // Successful authentication
        res.status(200).json({ message: 'Login successful!' });
    } else {
        // Failed authentication
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:${port}');
});
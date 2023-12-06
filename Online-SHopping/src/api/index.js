// Assuming your backend URL is stored in a variable called backendURL
// const backendURL = 'http://localhost:3001/users'; // Replace this with your actual backend URL
// app.use(express.json());
const backendURL = 'http://localhost:3001/login';


// Function to log in the user
async function loginUser(email, password) {
  try {
    // Data to be sent in the POST request body
    const data = {
      email: email,
      password: password
    };

    // POST request using fetch
    const response = await fetch(backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Set the content type to JSON
      },
      body: JSON.stringify(data) // Convert data to JSON format
    });

    // Check if the request was successful (status code 200-299)
    if (response.ok) {
      const userData = await response.json(); // Parse the response body
      // Do something with userData (e.g., save user details, set authentication tokens, etc.)
      console.log('User logged in:', userData);
    } else {
      // Handle unsuccessful login (status code outside the range 200-299)
      console.error('Login failed:', response.statusText);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error:', error);
  }
}

// Usage: Call loginUser function with email and password
const userEmail ='msuffiansoomro@gmail.com'; // Replace with the user's email
const userPassword = '10102003mss'; // Replace with the user's password
loginUser(userEmail, userPassword);
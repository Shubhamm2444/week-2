const express = require('express');
const app = express();

// Example: Define a route for GET requests to "/users"
app.get('/users', (req, res) => {
  // Simulate fetching data from a database (replace with actual data retrieval logic)
  const users = [
    { name: 'Alice' },
    { name: 'Bob' },
  ];
  res.json(users); // Send JSON response
});

// Example: Start the server and listen for requests
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

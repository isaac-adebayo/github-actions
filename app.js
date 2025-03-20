const express = require('express');
const app = express();

const PORT = 8080;

// Define a route for the root URL "/"
app.get('/', (req, res) => {
    res.send('<h3>Hello World</h3><p>This test page tests Github Action CI');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

